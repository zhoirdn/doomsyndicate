import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';

import Router from './Router';

export default function App() {
  const endpoint = 'https://shy-orbital-log.solana-mainnet.discover.quiknode.pro/d57aaf8ee9f509a03bd3da6838ac6922c975f6ca/';
  const wallets = useMemo(() => [], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Router />
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
