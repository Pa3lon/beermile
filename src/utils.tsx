import { IOdds } from "./components/odds/CreateOdds";
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

export const getOdds = async () => {
  return await axios.get(`${process.env.REACT_APP_SERVER_PATH}/odds`);
};

export const addOdds = async (odds: IOdds) => {
  return await axios
    .post(`${process.env.REACT_APP_SERVER_PATH}/odds`, {
      name: odds.name,
      odds: odds.odds,
      description: odds.description,
    })
    .then((res: any) => {
      return res;
    });
};

export const updateOdds = async (odds: IOdds) => {
  return await axios
    .put(`${process.env.REACT_APP_SERVER_PATH}/odds`, {
      name: odds.name,
      odds: odds.odds,
      description: odds.description,
    })
    .then((res: any) => {
      return res;
    });
};
