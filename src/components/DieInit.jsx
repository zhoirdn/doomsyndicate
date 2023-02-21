import React from 'react';
import DieFaceDmSyn from './DieFaceDmSyn';

export default function Die() {
  return (
    <button
      type="button"
      className="h-[calc((100vw-120px)/5)] rounded-md bg-dmorange ml:h-[57.8px] sm:h-[59.36px] md:h-[61.61px] lg:h-[64.39px] xl:h-[63.72px] 2xl:h-[75.82px]"
    >
      <DieFaceDmSyn />
    </button>
  );
}
