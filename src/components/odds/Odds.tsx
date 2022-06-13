import React from "react";
import Games from "./Games";
import SelectedGames from "./SelectedGames";

const Odds = () => {
  const [games, setGames] = React.useState([]);
  return (
    <div className="flex justify-between w-full pt-20 text-white">
      <div></div>
      <Games games={games} />
      <SelectedGames />
    </div>
  );
};

export default Odds;
