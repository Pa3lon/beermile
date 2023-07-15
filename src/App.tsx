import { useState } from "react";
import "./App.css";
import Buttons from "./components/home/Buttons";
import CountdownTimer from "./components/home/Countdown";
import Logo from "./components/home/Logo";
import UpdatesView from "./components/update/UpdatesView";
import CastIcon from "@mui/icons-material/Cast";

const App = () => {
  const [updatesOpen, setUpdatesOpen] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center main">
      <div
        className="absolute left-0 flex px-5 text-white cursor-pointer top-5"
        onClick={() =>
          window.open("https://www.instagram.com/skans1/?hl=en", "_blank")
        }
      >
        <CastIcon style={{ color: "#ffffff" }} />
        <p className="mx-2 text-white">Live Stream</p>
      </div>
      <Logo />
      <CountdownTimer targetDate={new Date("2023-07-15T14:00:00")} />
      <Buttons />
      <UpdatesView open={updatesOpen} close={() => setUpdatesOpen(false)} />
    </div>
  );
};

export default App;
