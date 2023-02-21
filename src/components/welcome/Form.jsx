import React from 'react';
import Button from './Button';
import WalletButton from '../WalletButton';

export default function Form({
  formData, message, handleSubmit, handleChange, registering,
}) {
  return (
    <>
      <form className="text-center" onSubmit={handleSubmit}>
        {message && <p className="mx-auto mb-4 w-[280px] text-sm text-white">{message}</p>}

        <input
          type="text"
          placeholder="Enter your username"
          value={formData.username}
          onChange={handleChange}
          className="mx-auto mb-5 block rounded-md bg-dmdark1/75 py-3 px-4 text-dmorange outline-none md:w-80"
        />

        <Button registering={registering} />
      </form>
      <WalletButton />
    </>
  );
}
