import React from "react";

interface Props {
  name: string;
  profilePicture: string;
}

const PlayerCard = (props: Props) => {
  return (
    <div>
      <img
        src={
          props.profilePicture === ""
            ? "placeholder-male.png"
            : props.profilePicture
        }
        width="240"
        style={{ borderRadius: "30%", marginTop: 20 }}
      />
    </div>
  );
};

export default PlayerCard;
