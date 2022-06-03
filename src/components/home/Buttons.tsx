import { Button, Dialog } from "@mui/material";
import React, { useState } from "react";

const Buttons = () => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const join = () => {
    alert("Hør med Sigurd");
  };

  const results = () => {
    alert("Resultater blir ikke publisert pga dårlige resultater");
  };

  return (
    <>
      <div className="mt-12 flex w-full justify-center space-x-10">
        <Button
          onClick={join}
          className="w-56"
          variant="contained"
          color="primary"
        >
          Påmelding
        </Button>
        <Button
          onClick={results}
          className="w-56"
          variant="contained"
          color="primary"
        >
          Resultater
        </Button>
        <Button
          onClick={() => setDialogOpen(true)}
          className="w-56"
          variant="contained"
          color="primary"
        >
          Tidligere Resultater
        </Button>
      </div>
      <Dialog onClose={() => setDialogOpen(false)} open={dialogOpen}>
        <img alt="guttan" src="/fav.jpg" />
      </Dialog>
    </>
  );
};

export default Buttons;
