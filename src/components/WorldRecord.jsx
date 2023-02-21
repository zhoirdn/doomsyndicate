import React from 'react';
import { ConvertHR } from '../functions/timeParser';

export default function WorldRecord({ worldRecord }) {
  return (
    <div className="mb-5 text-center md:mb-6">
      <div className="text-karla text-xl font-semibold text-dmorange">World Record</div>

      {worldRecord.username && (
        <div className="text-white">
          <span className="text-dmorange">{worldRecord.username}</span>
          &nbsp;
          <span>
            (
            {ConvertHR(worldRecord.time)}
            )
          </span>
        </div>
      )}
    </div>
  );
}
