import React, { useState, useEffect } from 'react';

function SecondsCounter() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeString = String(seconds).padStart(6, '0');

  return (
    <div className='container-fluid d-flex justify-content-center bg-dark align-items-center vh-100'>
      <div id="counter"><i class="fa-solid fa-clock"></i>{timeString}</div>
    </div>
  );
}

export default SecondsCounter;
