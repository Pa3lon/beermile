import React from "react";
import { Link } from "react-router-dom";
import Games from "./Games";
import SelectedGames from "./SelectedGames";

const Odds = () => {
  const [games, setGames] = React.useState([]);
  return (
    <div className="flex text-red-100 justify-between w-full pt-20 text-white">
      <Link className="absolute italic text-white top-5 left-5" to="/">
        Hjem
      </Link>
      <div></div>
      <Games games={games} />
      <SelectedGames />
    </div>
  );
};

export default Odds;
