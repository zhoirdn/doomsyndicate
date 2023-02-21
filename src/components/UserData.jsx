import React from 'react';
import { ConvertHR } from '../functions/timeParser';

export default function UserData({ userData, userTime }) {
  return (
    <div className="mb-3 flex justify-between text-sm text-white 2xl:text-[0.94rem]">
      {userData.username && (
        <p>
          <span className="text-dmorange">
            {userData.username}
            {' '}
          </span>
          <span>
            (
            {ConvertHR(userData.time)}
            )
          </span>
        </p>
      )}

      <div />
      <p>{ConvertHR(userTime)}</p>
    </div>
  );
}
