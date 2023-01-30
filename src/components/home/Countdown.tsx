import React, { useEffect, useState } from "react";

const date = new Date("2023-08-10T02:00:00");
const Countdown = () => {
  const [time, setTime] = useState<string>();

  useEffect(() => {
    setInterval(() => {
      getDiff();
    }, 1000);
  }, []);

  const getDiff = () => {
    const now = new Date();
    let sec = (date.getTime() - now.getTime()) / 1000;
    let days: string | number = Math.floor(sec / (3600 * 24));
    sec -= days * 3600 * 24;
    let hours = Math.floor(sec / 3600);
    sec -= hours * 3600;
    let min = Math.floor(sec / 60);
    sec -= min * 60;

    if (days < 0) {
      setTime("Stream e live ish");
    } else {
      setTime(
        `${days.toString()}d ${hours.toString()}t ${min.toString()}m ${
          sec.toString().split(".")[0]
        }s`
      );
    }
  };

  return (
    <div>
      <p className="mt-16 text-5xl font-bold text-red-500">{time}</p>
    </div>
  );
};

export default Countdown;
