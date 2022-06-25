import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Buttons from "./components/home/Buttons";
import Countdown from "./components/home/Countdown";
import Logo from "./components/home/Logo";
import UpdatesView from "./components/update/UpdatesView";

const App = () => {
  const [updatesOpen, setUpdatesOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center main">
      <div className="absolute top-5 px-5 flex w-full justify-between">
        <p className="text-white">Toppidrett</p>
        <p
          onClick={() => setUpdatesOpen(true)}
          className="text-white cursor-pointer"
        >
          Siste nytt
        </p>
        <Link className="italic text-white" to="/odds">
          Odds
        </Link>
      </div>
      <Logo />
      <Countdown />
      <Buttons />
      <UpdatesView open={updatesOpen} close={() => setUpdatesOpen(false)} />
    </div>
  );
};

export default App;
