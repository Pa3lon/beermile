import React, { useEffect } from "react";
import Scroll from "./Scroll";

interface Props {
  player: {
    name: string;
    image: string;
    intro: string;
  };
}

const MainCard = (props: Props) => {
  return (
    <div className="w-full text-sm text-white">
      <div className="absolute flex items-center justify-center w-84">
        <img src="card-bg.png" alt="background" />
        <img
          className="absolute rounded-full top-20 w-36 2xl:w-40"
          src={props.player.image}
        />
        <h2 className="absolute mb-4 text-lg italic 2xl:mb-5">
          {props.player.name}
        </h2>
        <Scroll text={props.player.intro} />
      </div>
    </div>
  );
};

export default MainCard;
