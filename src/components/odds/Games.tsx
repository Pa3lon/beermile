import { useEffect, useState } from "react";
import BetItem from "./BetItem";

interface Props {
  games: any[];
}

const Games = (props: Props) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const tempOdds = [
      {
        name: "Sigurd",
        odds: 1.49,
      },
      {
        name: "Salamonsen",
        odds: 2.1,
      },
      {
        name: "Pæt",
        odds: 6.4,
      },
      {
        name: "Don Omar",
        odds: 100,
      },
      {
        name: "Jørgensen",
        odds: 3.5,
      },
      {
        name: "Busk-Bindestrek",
        odds: 5.69,
      },
      {
        name: "Johannes",
        odds: 6.69,
      },
      {
        name: "Skansen",
        odds: 11,
      },
      {
        name: "Jans1",
        odds: 500,
      },
      {
        name: "Petter",
        odds: 1000.0,
      },
      {
        name: "Jokke",
        odds: 7.9,
      },

      {
        name: "Tellef",
        odds: 5.5,
      },

      {
        name: "Mikke",
        odds: 1001.0,
      },

      {
        name: "Losoa",
        odds: 7.0,
      },

      {
        name: "Wigelius Roska",
        odds: 7,
      },

      {
        name: "Lars",
        odds: 12,
      },

      {
        name: "Persen",
        odds: 36,
      },

      {
        name: "Jovnna",
        odds: 8.0,
      },

      {
        name: "Thomas",
        odds: 1200.3,
      },

      {
        name: "Mads",
        odds: 8.2,
      },
      {
        name: "Mathisen",
        odds: 1300.0,
      },
      {
        name: "Hjellen",
        odds: 21.0,
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
