import React, { useState, useEffect } from 'react';

const MonthsCounter = ({ targetDate, onFinish }) => {
  const calculateTimeRemaining = () => {
    const currentDate = new Date();
    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const totalSeconds = Math.floor(timeDifference / 1000);

    const months = Math.floor(totalSeconds / (30 * 24 * 3600));
    const remainingSeconds = totalSeconds % (30 * 24 * 3600);
    
    const weeks = Math.floor(remainingSeconds / (7 * 24 * 3600));
    const remainingSecondsWeeks = remainingSeconds % (7 * 24 * 3600);

    const days = Math.floor(remainingSecondsWeeks / (24 * 3600));

    return {
      months,
      weeks,
      days,
    };
  };

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    if (timeRemaining.months <= 0 && timeRemaining.weeks <= 0 && timeRemaining.days <= 0) {
      onFinish(); // Callback function when the countdown reaches zero
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId);
  }, [timeRemaining, onFinish]);

  return (
    <div>
      <h1>{`${timeRemaining.months}M : ${timeRemaining.weeks}W : ${timeRemaining.days}D`}</h1>
    </div>
  );
};

export default MonthsCounter;
