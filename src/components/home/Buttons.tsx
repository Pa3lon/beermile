import { Button, Dialog } from "@mui/material";
import { useState } from "react";

const Buttons = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  
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
      </div>
      <Dialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
        <img alt="guttan" src="/fav2.jpeg" />
      </Dialog>
    </>
  );
};

export default Buttons;
