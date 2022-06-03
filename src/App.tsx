import React from "react";
import "./App.css";
import Buttons from "./components/home/Buttons";
import Countdown from "./components/home/Countdown";
import Logo from "./components/home/Logo";

const App = () => {
  return (
    <div className="main flex flex-col justify-center items-center">
      <Logo />
      <Countdown />
      <Buttons />
    </div>
  );
};

export default App;
