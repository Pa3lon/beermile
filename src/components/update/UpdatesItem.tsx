import React, { useEffect, useState } from "react";
import { IUpdates } from "../odds/Updates";

interface Props {
  item: IUpdates;
}

const UpdatesItem = (props: Props) => {
  const [date, setDate] = useState("");
  useEffect(() => {
    setDate(
      new Date(props.item.created_at!).toLocaleDateString() +
        " " +
        new Date(props.item.created_at!).toLocaleTimeString()
    );
  }, []);

  return (
    <div className="px-10 py-5">
      <h3 className="font-bold">{props.item.title}</h3>
      <p>{date}</p>
      <p>{props.item.content}</p>
    </div>
  );
};

export default UpdatesItem;
