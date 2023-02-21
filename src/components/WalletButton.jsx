import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export default function WalletButton() {
  return (
    <div className="absolute top-5 right-5">
      <WalletMultiButton />
    </div>
  );
}
