import React, { useState, useEffect } from 'react';

function SecondsCounter() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const resetCounter = () => {
    setSeconds(0);
  };

  const toggleRunning = () => {
    setIsRunning(!isRunning);
  };

  const timeString = String(seconds).padStart(6, '0');

  return (
  <div className='row container-fluid d-flex justify-content-center bg-dark align-items-center vh-100'>
   <div>
      <div id="counter">
      {isRunning ? <i class="fa-regular fa-clock"></i> : <i class="fa-solid fa-clock"></i>}{timeString}
      </div>
      <div>
      <button type="button" class="btn btn-warning" onClick={resetCounter}>Reset</button>
      <button type="button" class={isRunning ? "btn btn-secondary" : "btn btn-success"} onClick={toggleRunning}>
        {isRunning ? 'Pause' : 'Resume'}
      </button>
      </div>      
    </div> 
  </div>
  );
}

export default SecondsCounter;
