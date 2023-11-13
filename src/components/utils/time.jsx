import React, { useState, useEffect } from 'react';

const CountdownTimer = ({ initialHours, onFinish }) => {
  const initialTimeInSeconds = initialHours * 3600; // Convert hours to seconds
  const [timeRemaining, setTimeRemaining] = useState(initialTimeInSeconds);

  useEffect(() => {
    let intervalId;

    if (timeRemaining > 0) {
      intervalId = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      onFinish(); // Callback function when the countdown reaches zero
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timeRemaining, onFinish]);

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes < 10 ? '0' : ' '}${minutes}:${remainingSeconds < 10 ? '0' : ' '}${remainingSeconds}`;
  };

  return (
    <div>
      <h1>{formatTime(timeRemaining)}</h1>
    </div>
  );
};

export default CountdownTimer;
