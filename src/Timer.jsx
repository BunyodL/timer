import React, { useState, useEffect } from 'react';
import { formatTime } from './formatTime';

function Timer() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const storedTime = localStorage.getItem('timer');
    storedTime ? setTimer(parseInt(storedTime, 10)) : setTimer(0);

    const intervalId = setInterval(() => {
      setTimer((prevTime) => Number(prevTime + 1));
      localStorage.setItem('timer', timer + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  return (
    <div className='stopWatch'>
      <p>{formatTime(timer)}</p>
    </div>
  );
}

export default Timer;
