import { Button, Input, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import history from "../../history";
import { addPerson } from "../../utils";

export interface IProfile {
  name: string;
  description: string;
}

const ProfileCreate = () => {
  const [form, setForm] = useState<IProfile>({ name: "", description: "" });
  let navigate = useNavigate();

  const submit = () => {
    addPerson(form).then((res) => {
      res.status === 200 && navigate("/profile");
    });
  };

  return (
    <div className="flex flex-col space-y-5 items-center justify-center pt-12 md:pt-32">
      <h2 className="text-white text-3xl">Ny profil</h2>
      <div className="flex flex-col w-10/12 md:w-3/12 space-y-5">
        <Input
          className="bg-white rounded-lg px-3"
          placeholder="Navn"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        ></Input>
        <Input
          multiline
          placeholder="Beskrivelse..."
          type="textfield"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          className="bg-white rounded-md"
          rows={10}
        ></Input>
        <Button variant="contained" color="primary" onClick={submit}>
          Lagre
        </Button>
      </div>
    </div>
  );
};

export default ProfileCreate;
