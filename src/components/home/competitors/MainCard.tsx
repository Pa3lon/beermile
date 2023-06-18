import React from "react";

interface Props {
  name: string;
  profilePicture: string;
}

const MainCard = (props: Props) => {
  return (
    <div className="w-full text-white">
      <div className="absolute w-84 bg-red-50">
        <img src="profile.webp" className="" alt="" />
        <img
          width={144}
          style={{ left: "7.5rem" }}
          className="absolute top-0 rounded-full top-28 left"
          src="nik_1.png"
        />
      </div>
    </div>
  );
};

export default MainCard;
