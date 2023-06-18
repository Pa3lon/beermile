import React from "react";

interface Props {
  name: string;
  profilePicture: string;
}

const PlayerCard = (props: Props) => {
  return (
    <div className="cursor-pointer">
      <img
        className="w-52 2xl:w-64"
        src={
          props.profilePicture === ""
            ? "placeholder-male.png"
            : props.profilePicture
        }
        style={{ borderRadius: "30%", marginTop: 20 }}
      />
    </div>
  );
};

export default PlayerCard;
