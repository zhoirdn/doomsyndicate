import React from 'react';

export default function Container({ children }) {
  return (
    <main className="bg-dmsyn bg-cover">
      <div className="container flex min-h-screen items-center justify-center py-8">{children}</div>
    </main>
  );
}
