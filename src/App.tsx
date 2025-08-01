import { useState } from "react";
import "./App.css";
import Buttons from "./components/home/Buttons";
import CountdownTimer from "./components/home/Countdown";
import Logo from "./components/home/Logo";
import UpdatesView from "./components/update/UpdatesView";
import CastIcon from "@mui/icons-material/Cast";
import { Link } from "react-router-dom";

const App = () => {
  const [updatesOpen, setUpdatesOpen] = useState(false);
  const [audio] = useState(new Audio("/CL.mp3"));

  return (
    <div
      onClick={() => audio.play()}
      className="flex flex-col items-center justify-center main"
    >
      <div
        className="absolute left-0 flex px-5 text-white cursor-pointer top-5"
        onClick={() =>
          window.open("https://www.instagram.com/skans1/?hl=en", "_blank")
        }
      >
        <CastIcon style={{ color: "#ffffff" }} />
        <p className="mx-2 text-white">Live Stream</p>
      </div>
      <div className="absolute right-5 top-5">
        <Link className="italic text-white" to="/odds">
          Odds
        </Link>
      </div>
      <Logo />
      <CountdownTimer targetDate={new Date("2025-07-12T13:50:00")} />
      <Buttons />
      <UpdatesView open={updatesOpen} close={() => setUpdatesOpen(false)} />
    </div>
  );
};

export default App;
