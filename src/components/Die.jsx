import React, { useState, useEffect, useRef } from 'react';
import randomNumber from '../functions/randomNumber';

import DieFace from './DieFace';
import DieFaceDmSyn from './DieFaceDmSyn';

export default function Die({
  value, isHeld, tenzi, holdDice,
}) {
  const [roll, setRoll] = useState(1);
  const rollConfig = useRef({
    dieShowDuration: 90,
    totalDieToShow: 10,
  });

  // roll effect
  useEffect(() => {
    let rollCount = 0;
    const rollInterval = setInterval(() => {
      setRoll(() => {
        rollCount += 1;

        // bring back the real value
        if (rollCount === rollConfig.current.totalDieToShow) {
          clearInterval(rollInterval);
          return value;
        }

        return randomNumber(6);
      });
    }, rollConfig.current.dieShowDuration);
  }, []);

  return (
    <button
      type="button"
      className="h-[calc((100vw-120px)/5)] rounded-md bg-dmorange ml:h-[57.8px] sm:h-[59.36px] md:h-[61.61px] lg:h-[64.39px] xl:h-[63.72px] 2xl:h-[75.82px]"
      onClick={!tenzi ? holdDice : undefined}
    >
      {isHeld ? <DieFaceDmSyn /> : <DieFace number={roll} />}
    </button>
  );
}
