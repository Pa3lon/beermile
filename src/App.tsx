import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Buttons from "./components/home/Buttons";
import Countdown from "./components/home/Countdown";
import Logo from "./components/home/Logo";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center main">
      <p className="text-white absolute top-5 right-5">Toppidrett</p>
      <Link className="absolute italic text-white top-5 left-5" to="/odds">
        Odds
      </Link>
      <Logo />
      <Countdown />
      <Buttons />
    </div>
  );
};

export default App;
