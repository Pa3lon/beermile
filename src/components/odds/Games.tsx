import React, { useEffect, useState } from "react";
import { getOdds } from "../../utils";
import BetItem from "./BetItem";
import Updates from "./Updates";

interface Props {
  games: any[];
}

const Games = (props: Props) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    /*
    getOdds().then((res: any) => {
      res.data.sort((a: any, b: any) => (a.odds > b.odds ? 1 : -1));
      setItems(res.data);
    });
    */
    const tempOdds = [
      {
        name: "Sigurd",
        odds: 1.69,
      },
      {
        name: "Salamonsen",
        odds: 0.5,
      },
      {
        name: "Pæt",
        odds: 25.0,
      },
      {
        name: "Don Omar",
        odds: 2.5,
      },
      {
        name: "Busk-Bindestrek",
        odds: 7.69,
      },
      {
        name: "Johannes",
        odds: 8.8,
      },
      {
        name: "Skansen",
        odds: 300,
      },
      {
        name: "Jans1",
        odds: 0.01,
      },
      {
        name: "Jans2",
        odds: 0.02,
      },

      {
        name: "Petter",
        odds: 32.0,
      },

      {
        name: "Jokke",
        odds: 21.0,
      },

      {
        name: "Tellef",
        odds: 5.5,
      },

      {
        name: "Mikke",
        odds: 19.0,
      },

      {
        name: "Losoa",
        odds: 15.0,
      },

      {
        name: "Wigelius Roska",
        odds: 10.0,
      },

      {
        name: "Lars",
        odds: 2.5,
      },

      {
        name: "Persen",
        odds: 10.5,
      },

      {
        name: "Jovnna",
        odds: 3.5,
      },

      {
        name: "Thomas",
        odds: 12.3,
      },

      {
        name: "Mads",
        odds: 5.55,
      },
    ];
    // sort bu odds
    tempOdds.sort((a: any, b: any) => (a.odds > b.odds ? 1 : -1));
    setItems(tempOdds);
  }, []);

  return (
    <div className="md:flex md:justify-center md:w-5/12">
      <div>
        <p className="text-center">Winner</p>
        <ul className="mt-6 space-y-2">
          {items.map((c, i) => (
            <div key={i}>
              <BetItem item={c.name} odds={c.odds} />
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Games;
