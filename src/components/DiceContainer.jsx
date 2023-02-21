import React from 'react';

export default function DiceContainer({ children }) {
  return (
    <div className="mb-[32px] grid grid-cols-5 gap-[8px] ml:gap-[12px] 2xl:mb-[36px] 2xl:gap-[14px]">
      {children}
    </div>
  );
}
