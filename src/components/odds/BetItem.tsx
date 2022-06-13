import React from "react";

interface Props {
  item: string;
  odds: number;
}

const BetItem = (props: Props) => {
  return (
    <div className="flex justify-between px-4 py-2 bg-gray-600 rounded-md cursor-pointer w-80 hover:bg-gray-700">
      <p>{props.item}</p>
      <p>{props.odds}</p>
    </div>
  );
};

export default BetItem;
