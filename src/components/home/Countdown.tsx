import React, { useState, useEffect } from "react";
import "./CountdownTimer.css"; // Import the CSS file for styling
// ts-ignore

interface Props {
  targetDate: Date;
}

const CountdownTimer = (props: Props) => {
  const [remainingTime, setRemainingTime] = useState<any>();

  useEffect(() => {
    const interval = setInterval(() => {
      // ts-ignore
      setRemainingTime(calculateRemainingTime());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  var calculateRemainingTime = () => {
    const currentTime = new Date().getTime();
    const difference = props.targetDate.getTime() - currentTime;

    if (difference <= 0) {
      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const seconds = Math.floor((difference / 1000) % 60);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };

  return (
    <div className="countdown-container">
      <div className="countdown-item">
        <div className="countdown-value">
          {remainingTime ? remainingTime.days : "-"}
        </div>
        <div className="countdown-label">Dager</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">
          {remainingTime ? remainingTime.hours : "-"}
        </div>
        <div className="countdown-label">Timer</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">
          {remainingTime ? remainingTime.minutes : "-"}
        </div>
        <div className="countdown-label">Minutter</div>
      </div>
      <div className="countdown-item">
        <div className="countdown-value">
          {remainingTime ? remainingTime.seconds : "-"}
        </div>
        <div className="countdown-label">Sekunder</div>
      </div>
    </div>
  );
};

export default CountdownTimer;
