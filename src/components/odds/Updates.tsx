import React, { useEffect, useState } from "react";
import { getUpdates } from "../../utils";
import UpdatesItem from "../update/UpdatesItem";

export interface IUpdates {
  title: string;
  content: string;
  created_at?: string;
}

const Updates = () => {
  const [updates, setUpdates] = useState<IUpdates[]>([]);

  useEffect(() => {
    getUpdates().then((res) => {
      setUpdates(res.data);
    });
  }, []);

  return (
    <div>
      <ul>
        {updates.map((c, i) => (
          <div key={i}>
            <UpdatesItem item={c} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Updates;
