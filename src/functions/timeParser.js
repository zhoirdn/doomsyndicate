function timeParser(time) {
  const minutes = Math.trunc(time / 60000) % 60;
  const seconds = Math.trunc(time / 1000) % 60;
  const milliseconds = Math.trunc(time) % 1000;

  function leadingZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  return {
    minutes: leadingZero(minutes),
    seconds: leadingZero(seconds),
    milliseconds: Math.trunc(milliseconds / 100), // only show hundreds
  };
}

function ConvertHR(time) {
  const parsedTime = timeParser(time);
  return `${parsedTime.minutes}:${parsedTime.seconds}.${parsedTime.milliseconds}`;
}

export { timeParser, ConvertHR };
