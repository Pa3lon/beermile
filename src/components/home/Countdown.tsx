import React, { useEffect, useState } from "react";

const date = new Date("2022-07-09 12:00:00");
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
    const days = Math.floor(sec / (3600 * 24));
    sec -= days * 3600 * 24;
    const hours = Math.floor(sec / 3600);
    sec -= hours * 3600;
    const min = Math.floor(sec / 60);
    sec -= min * 60;

    setTime(`${days}d ${hours}t ${min}m ${sec.toString().split(".")[0]}s`);
  };

  return (
    <div>
      <p className="mt-16 text-red-500 text-5xl font-bold">{time}</p>
    </div>
  );
};

export default Countdown;
