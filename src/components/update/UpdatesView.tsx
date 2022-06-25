import { Dialog } from "@mui/material";
import React from "react";
import Updates from "../odds/Updates";

interface Props {
  open: boolean;
  close: () => void;
}

const UpdatesView = (props: Props) => {
  return (
    <Dialog open={props.open} onClose={props.close}>
      <Updates />
    </Dialog>
  );
};

export default UpdatesView;
