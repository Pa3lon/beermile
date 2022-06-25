import { Button, Input } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUpdates } from "../../utils";
import { IUpdates } from "./Updates";

const CreateUpdates = () => {
  const [form, setForm] = useState<IUpdates>({
    title: "",
    content: "",
  });
  let navigate = useNavigate();

  const submit = () => {
    addUpdates(form).then((res) => {
      res.status === 200 && navigate("/odds");
    });
  };

  return (
    <div className="flex flex-col space-y-5 items-center justify-center pt-12 md:pt-32">
      <h2 className="text-white text-3xl">Ny Oppdatering</h2>
      <div className="flex flex-col w-10/12 md:w-3/12 space-y-5">
        <Input
          className="bg-white rounded-lg px-3"
          placeholder="Titel"
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        ></Input>
        <Input
          placeholder="Innhold"
          type="textfield"
          multiline
          rows={3}
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
          className="bg-white rounded-md px-3"
        ></Input>
        <Button variant="contained" color="primary" onClick={submit}>
          Lagre
        </Button>
      </div>
    </div>
  );
};

export default CreateUpdates;
