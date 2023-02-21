import React from 'react';

export default function Button({ value, handleOnClick }) {
  return (
    <button
      type="button"
      className="rounded-md bg-dmorange px-5 py-2 font-karla font-bold tracking-wide text-dmdark1 active:scale-95 xl:text-lg"
      onClick={handleOnClick}
    >
      {value}
    </button>
  );
}
