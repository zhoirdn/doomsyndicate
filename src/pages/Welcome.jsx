/* eslint-disable react/jsx-no-bind */
import React, { useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { Redirect } from 'react-router-dom';

import { read, update } from '../functions/fetch';

import Container from '../components/welcome/Container';
import Form from '../components/welcome/Form';
import Initial from '../components/welcome/Initial';
import Loading from '../components/Loading';
import WalletButton from '../components/WalletButton';

export default function Welcome() {
  const { connected, publicKey } = useWallet();

  const [message, setMessage] = useState();
  const [formData, setFormData] = useState({
    username: '',
  });

  // promise loading state
  const [isWalletRegistered, setIsWalletRegistered] = useState(false);
  const [checkWalletAnimation, setCheckWalletAnimation] = useState(false);
  const [registering, setRegistering] = useState(false);

  function handleChange(e) {
    const { value } = e.target;
    setFormData({
      username: value.trim(),
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // empty message, preparing for the next message
    setMessage('');

    // start registering animation
    setRegistering(true);

    // character validation
    const re = /^[a-zA-Z0-9_-]{3,12}$/;
    if (!re.test(formData.username)) {
      setMessage(
        'Only alphanumeric string that may include _ and - having a length of 4 to 12 characters allowed!',
      );

      // stop registering animation
      setRegistering(false);

      return;
    }

    read()
      .then((data) => {
        // checking username avability
        const isUsernameTaken = data.find((item) => item.username === formData.username);
        if (isUsernameTaken) {
          setMessage('This username is already taken!');

          // stop registering animation
          setRegistering(false);

          return;
        }

        // storing new data
        update([
          ...data,
          {
            username: formData.username,
            publicKey,
            time: 0,
          },
        ])
          .then(() => {
            setIsWalletRegistered(true);
          })
          .catch(() => {
            setMessage('Something is wrong. Try again later!');

            // stop registering animation
            setRegistering(false);
          });
      })
      .catch(() => {
        setMessage('Something is wrong. Try again later!');

        // stop registering animation
        setRegistering(false);
      });
  }

  useEffect(() => {
    // empty message and username after disconnect
    setMessage('');
    setFormData({ username: '' });

    setCheckWalletAnimation(true);

    // checking if user already registered
    if (publicKey) {
      read().then((data) => {
        const isPublicKeyExist = data.find((item) => item.publicKey === publicKey.toString());
        if (isPublicKeyExist) {
          setIsWalletRegistered(true);
          return;
        }

        setCheckWalletAnimation(false);
      });
    }
  }, [publicKey]);

  return (
    <>
      {isWalletRegistered && <Redirect to="/" />}

      <Container>
        {connected ? (
          <div>
            {checkWalletAnimation ? (
              <>
                <Loading />
                <WalletButton />
              </>
            ) : (
              <Form
                formData={formData}
                message={message}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                registering={registering}
              />
            )}
          </div>
        ) : (
          <Initial />
        )}
      </Container>
    </>
  );
}
