import React from 'react';

export default function Container({ children }) {
  return (
    <main className="bg-dmsyn bg-cover">
      <div className="flex h-screen items-center justify-center">{children}</div>
    </main>
  );
}
