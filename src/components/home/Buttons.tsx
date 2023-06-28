import { Button, Dialog } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import Index from "./competitors/Index";

const count2 = new Date("2023-06-28T18:00:00");
const count3 = new Date("2023-06-28T18:05:00");

const Buttons = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [trollOpen, setTrollOpen] = useState(false);
  const [countdown, setCountdown] = useState("-:-:-:-");
  const [competitorsOpen, setCompetitorsOpen] = useState(false);
  const btn2ref = useRef<HTMLButtonElement>(null);

  const handleCompetitorsClick = () => {
    if (countdown !== "Deltakere") return;
    const c3 = getCountdown(count3);
    c3 !== "Deltakere" ? setTrollOpen(true) : setCompetitorsOpen(true);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdown(count2));
    }, 1000);
    return () => clearInterval(interval);
  });

  const getCountdown = (time: Date) => {
    const now = new Date();
    const diff = time.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    // return 00:00:00:00 format when the countdown is over
    if (diff < 0) {
      // Add opacity to the button
      btn2ref.current!.style.opacity = "1";
      btn2ref.current!.style.cursor = "pointer";
      return "Deltakere";
    }
    // Retrun the countdown as a string
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <>
      <div className="flex justify-center w-full mt-12 space-x-10">
        <Button
          onClick={() => setDialogOpen(true)}
          className="w-32 sm:w-56"
          variant="contained"
          color="primary"
        >
          Tidligere Resultater
        </Button>
        <Button
          ref={btn2ref}
          onClick={() => handleCompetitorsClick()}
          className="w-32 sm:w-56"
          style={{ opacity: 0.25, cursor: "not-allowed" }}
          variant="contained"
          color="primary"
        >
          {countdown}
        </Button>
      </div>
      <Dialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
        <img alt="guttan" src="/fav2.jpeg" />
      </Dialog>
      <Dialog onClose={() => setTrollOpen(false)} open={trollOpen}>
        <img src="/fu_gif.gif" alt="fuck_u" />
      </Dialog>
      <Dialog
        maxWidth="xl"
        onClose={() => setCompetitorsOpen(false)}
        open={competitorsOpen}
      >
        <Index />
      </Dialog>
    </>
  );
};

export default Buttons;
