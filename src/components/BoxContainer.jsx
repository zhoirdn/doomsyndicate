import React from 'react';

export default function BoxContainer({ children }) {
  return (
    <div className="w-full rounded-md bg-dmdark1/90 px-[20px] py-[32px] text-center sm:w-[65%] md:w-[55%] lg:w-[42%] xl:w-[33%] 2xl:w-[33%] 2xl:px-[28px] 2xl:py-[40px]">
      {children}
    </div>
  );
}
