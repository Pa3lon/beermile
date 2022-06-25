import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addOdds } from "../../utils";

export interface IOdds {
  name: string;
  odds: number | string;
  description?: string | null;
}

const CreateOdds = () => {
  const [form, setForm] = useState<IOdds>({
    name: "",
    odds: 0,
    description: "",
  });
  let navigate = useNavigate();

  const submit = () => {
    addOdds(form).then((res) => {
      res.status === 200 && navigate("/odds");
    });
  };

  return (
    <div className="flex flex-col space-y-5 items-center justify-center pt-12 md:pt-32">
      <h2 className="text-white text-3xl">Ny Odds</h2>
      <div className="flex flex-col w-10/12 md:w-3/12 space-y-5">
        <Input
          className="bg-white rounded-lg px-3"
          placeholder="Navn"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        ></Input>
        <Input
          placeholder="Odds"
          type="textfield"
          value={form.odds}
          onChange={(e) => setForm({ ...form, odds: e.target.value })}
          className="bg-white rounded-md px-3"
        ></Input>
        <Button variant="contained" color="primary" onClick={submit}>
          Lagre
        </Button>
      </div>
    </div>
  );
};

export default CreateOdds;
