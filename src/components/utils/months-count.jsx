import React, { useState, useEffect } from 'react';

const DaysCounter = ({ days, onFinish }) => {
  const [endTime, setEndTime] = useState(null);

  useEffect(() => {
    if (!days || typeof days !== 'number' || days <= 0) {
      console.error("Invalid 'days' prop");
      return;
    }

    const calculateEndTime = () => {
      const now = new Date();
      return now.getTime() + days * 24 * 60 * 60 * 1000;
    };

    setEndTime(calculateEndTime());

    const intervalId = setInterval(() => {
      const now = new Date();
      const remainingMilliseconds = endTime - now.getTime();

      if (remainingMilliseconds <= 0) {
        setEndTime(null); // Optional: Reset endTime to stop the countdown
        if (onFinish) {
          onFinish();
        }
        clearInterval(intervalId);
      }
    }, 1000); // Update every second

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [days, endTime, onFinish]);

  return (
    <div>
      {endTime !== null ? (
        <p>{Math.ceil((endTime - new Date().getTime()) / (1000 * 60 * 60 * 24))} Days</p>
      ) : (
        <p>Countdown Finished!</p>
      )}
      {/* Add any additional UI components or information as needed */}
    </div>
  );
};

export default DaysCounter;
