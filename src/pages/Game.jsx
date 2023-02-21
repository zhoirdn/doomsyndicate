/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect, useRef } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Redirect } from 'react-router-dom';
import ReactConfetti from 'react-confetti';

import { newRandomDice, newRandomDie } from '../functions/newRandom';
import { read, update } from '../functions/fetch';

import Container from '../components/Container';
import WalletButton from '../components/WalletButton';
import BoxContainer from '../components/BoxContainer';
import Header from '../components/Header';
import DiceContainer from '../components/DiceContainer';
import DieInit from '../components/DieInit';
import Button from '../components/Button';
import Die from '../components/Die';
import WorldRecord from '../components/WorldRecord';
import UserData from '../components/UserData';

import rollingDiceAudio from '../audio/rolling-dice.mp3';
import winningAudio from '../audio/hell.mp3';

export default function Game() {
  const { connected, publicKey } = useWallet();
  const [confetti, setConfetti] = useState(false);

  // game state
  const [init, setInit] = useState(true);
  const [tenzi, setTenzi] = useState(false);
  const [diceArray, setdiceArray] = useState(newRandomDice());

  // best record
  const [worldRecord, setWorldRecord] = useState({
    username: null,
    publicKey: null,
    time: null,
  });

  // user data
  const [userData, setUserData] = useState({
    username: null,
    publicKey: null,
    time: null,
  });

  // stopwatch
  const stopwatchInterval = useRef(null);
  const [userTime, setUserTime] = useState(0);

  // stopwatch controller
  const stopwatch = {
    start: () => {
      const startDate = Date.now();
      stopwatchInterval.current = setInterval(() => {
        setUserTime(Date.now() - startDate);
      }, 1);
    },
    stop: () => {
      clearInterval(stopwatchInterval.current);
    },
  };

  // audio controller
  const audio = {
    play: (id) => {
      const audioElement = document.querySelector(id);
      audioElement.play();
    },
    stop: (id) => {
      const audioElement = document.querySelector(id);
      audioElement.pause();
      audioElement.currentTime = 0;
    },
  };

  // game state controller
  const game = {
    play: () => {
      setInit(false);
      setdiceArray(newRandomDice());
      audio.play('#rollingDice');
      stopwatch.start();
    },
    new: () => {
      audio.stop('#winning');
      setConfetti(false);
      setTenzi(false);
      setdiceArray(newRandomDice());
      audio.play('#rollingDice');
      stopwatch.start();
    },
  };

  // dice controller
  const dice = {
    roll: () => {
      // eslint-disable-next-line max-len
      setdiceArray((prevDice) => prevDice.map((die) => (die.isHeld === false ? newRandomDie() : die)));
      audio.stop('#rollingDice');
      audio.play('#rollingDice');
    },
    hold: (id) => {
      setdiceArray((prevDice) => prevDice.map((die) => {
        if (die.id === id) {
          return { ...die, isHeld: !die.isHeld };
        }

        return die;
      }));
    },
  };

  // fetch world record
  useEffect(() => {
    read().then((data) => {
      const filtedData = data.filter((item) => item.time > 0);
      filtedData.sort((a, b) => a.time - b.time);
      setWorldRecord(filtedData[0]);
    });
  }, []);

  // fetch user data
  useEffect(() => {
    if (publicKey) {
      read().then((data) => {
        // eslint-disable-next-line no-shadow
        const userData = data.find((item) => item.publicKey === publicKey.toString());
        setUserData(userData);
      });
    }
  }, [publicKey]);

  // winning condition
  useEffect(() => {
    const allHeld = diceArray.every((die) => die.isHeld);
    const allSameValue = diceArray.every((die) => die.value === diceArray[0].value);

    if (allHeld && allSameValue) {
      setTenzi(true);
      stopwatch.stop();

      // breaking their own record
      if (userTime < userData.time || userData.time === 0) {
        // update local user data
        setUserData((prevUserData) => ({
          ...prevUserData,
          time: userTime,
        }));

        // update online user data
        read().then((data) => {
          update(
            data.map((item) => {
              if (item.publicKey === publicKey.toString()) {
                return {
                  ...item,
                  time: userTime,
                };
              }

              return item;
            }),
          );
        });

        // breaking world record too
        if (userTime < worldRecord.time) {
          // update local world record
          setWorldRecord({
            username: userData.username,
            publicKey: userData.publicKey,
            time: userTime,
          });
        }

        setConfetti(true);
        audio.play('#winning');
      }
    }
  }, [diceArray]);

  const diceElements = diceArray.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      tenzi={tenzi}
      holdDice={() => dice.hold(die.id)}
    />
  ));

  const diceInit = diceArray.map((die) => <DieInit key={die.id} />);
  const playButton = <Button value="Play Game" handleOnClick={game.play} />;
  const newRollButton = (
    <Button value={tenzi ? 'New Game' : 'Roll'} handleOnClick={tenzi ? game.new : dice.roll} />
  );

  return (
    <>
      {!connected && <Redirect to="/welcome" />}
      {confetti && <ReactConfetti colors={['#FD5E39', '#C44040']} />}

      <Container>
        <WalletButton />

        <BoxContainer>
          <Header />

          <WorldRecord worldRecord={worldRecord} />
          <UserData userData={userData} userTime={userTime} />

          <DiceContainer>{init ? diceInit : diceElements}</DiceContainer>
          {init ? playButton : newRollButton}
        </BoxContainer>

        <audio src={rollingDiceAudio} id="rollingDice" />
        <audio src={winningAudio} id="winning" />
      </Container>
    </>
  );
}
