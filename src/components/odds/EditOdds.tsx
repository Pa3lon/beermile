import { Button, Input, MenuItem, Select } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getOdds, updateOdds } from "../../utils";
import { IOdds } from "./CreateOdds";

const EditOdds = () => {
  const [odds, setOdds] = useState<IOdds[]>([]);
  const [selectedOdds, setSelectedOdds] = useState<IOdds>();
  const navigate = useNavigate();

  useEffect(() => {
    getOdds().then((res) => {
      setOdds(res.data);
    });
  }, []);

  const submit = () => {
    updateOdds(selectedOdds as IOdds).then((res) => {
      res.status === 200 && navigate("/odds");
    });
  };

  return (
    <div className="flex flex-col space-y-5 items-center justify-center pt-12 md:pt-32">
      <h2 className="text-white text-3xl">Oppdater Odds</h2>
      <div className="flex flex-col w-10/12 md:w-3/12 space-y-5">
        <Select
          onChange={(e) =>
            setSelectedOdds(odds.find((o) => o.name === e.target.value))
          }
          value={selectedOdds}
          className="bg-white"
          label="Odds"
        >
          {odds.map((o, i) => (
            <MenuItem key={i} value={o.name}>
              {o.name}
            </MenuItem>
          ))}
        </Select>
        {selectedOdds && (
          <>
            <Input
              placeholder="Odds"
              type="textfield"
              value={selectedOdds.odds}
              onChange={(e) =>
                setSelectedOdds({ ...selectedOdds, odds: e.target.value })
              }
              className="bg-white rounded-md px-3"
            ></Input>
            <Button variant="contained" color="primary" onClick={submit}>
              Lagre
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default EditOdds;
