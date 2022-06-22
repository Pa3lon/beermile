import { IProfile } from "./components/profile/ProfileCreate";

const axios = require("axios").default;

export const getPersons = async () => {
  return await axios.get(`${process.env.REACT_APP_SERVER_PATH}/people`);
};

export const addPerson = async (profile: IProfile) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_PATH}/people`, {
      name: profile.name,
      description: profile.description,
    })
    .then((res: any) => {
      return res;
    });
};
