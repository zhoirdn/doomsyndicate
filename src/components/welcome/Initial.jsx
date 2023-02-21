import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function Initial() {
  return (
    <div className="text-center">
      <h1 className="mb-3 font-karla text-3xl font-black tracking-tight text-dmorange ml:mb-4 lg:text-4xl">
        Doom Syndicate
        <br />
        Tenzi
      </h1>
      <p className="mx-auto mb-5 w-[280px] text-sm text-white ml:mb-6 lg:text-base">
        Roll until all dice are the same. Click each die to freeze it at its current value between
        rolls.
      </p>
      <div className="flex justify-center">
        <WalletMultiButton />
      </div>
    </div>
  );
}
