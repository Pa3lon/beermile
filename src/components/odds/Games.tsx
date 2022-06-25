import React, { useEffect, useState } from "react";
import { getOdds } from "../../utils";
import BetItem from "./BetItem";

interface Props {
  games: any[];
}

const competoters = [
  { name: "Patrick Lønhaug", odds: 6001 },
  { name: "Tråll-Hirsti", odds: 1.02 },
  { name: "Sigurd Gundersen", odds: 1.5 },
  { name: "Niklas Busk Treningsleir Jensen", odds: 1.2 },
  { name: "Daniel Salamonsen", odds: 1.99 },
  { name: "Skansen", odds: 2.2 },
  { name: "Johannes Jonassen Pleym", odds: 1.05 },
  { name: "Andreas Mathisen", odds: 6.9 },
  { name: "Don Omar", odds: 2500 },
  { name: "Thor Arne", odds: 1.01 },
];

const Games = (props: Props) => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    getOdds().then((res: any) => {
      res.data.sort((a: any, b: any) => (a.odds > b.odds ? 1 : -1));
      setItems(res.data);
    });
  }, []);

  return (
    <div className="md:flex md:justify-between md:w-5/12">
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
      <div>
        <p className="text-center">Specials</p>
        <ul className="mt-6 space-y-2">
          <div className="flex flex-col items-center justify-center w-64 p-4 bg-gray-800 rounded-lg">
            <p>Sigurd Total Spy 3.5</p>
            <div className="flex mt-2 space-x-5">
              <div className="space-y-2">
                <p className="text-center">Over</p>
                <div className="w-16 p-4 text-center bg-gray-600 rounded-md cursor-pointer hover:bg-gray-700">
                  2.5
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-center">Under</p>
                <div className="w-16 p-4 text-center bg-gray-600 rounded-md cursor-pointer hover:bg-gray-700">
                  1.69
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-64 p-4 bg-gray-800 rounded-lg">
            <p>Don Omar Røykepauser 2.5</p>
            <div className="flex mt-2 space-x-5">
              <div className="space-y-2">
                <p className="text-center">Over</p>
                <div className="w-16 p-4 text-center bg-gray-600 rounded-md cursor-pointer hover:bg-gray-700">
                  1.1
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-center">Under</p>
                <div className="w-16 p-4 text-center bg-gray-600 rounded-md cursor-pointer hover:bg-gray-700">
                  4.5
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-64 p-4 bg-gray-800 rounded-lg">
            <p className="text-center">Leder Salamonsen etter 50 meter</p>
            <div className="flex mt-2 space-x-5">
              <div className="space-y-2">
                <p className="text-center">Ja</p>
                <div className="w-16 p-4 text-center bg-gray-600 rounded-md cursor-pointer hover:bg-gray-700">
                  1.01
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-center">Nei</p>
                <div className="w-16 p-4 text-center bg-gray-600 rounded-md cursor-pointer hover:bg-gray-700">
                  80.0
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-64 p-4 bg-gray-800 rounded-lg">
            <p>Vinnertid 11:01</p>
            <div className="flex mt-2 space-x-5">
              <div className="space-y-2">
                <p className="text-center">Over</p>
                <div className="w-16 p-4 text-center bg-gray-600 rounded-md cursor-pointer hover:bg-gray-700">
                  3.23
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-center">Under</p>
                <div className="w-16 p-4 text-center bg-gray-600 rounded-md cursor-pointer hover:bg-gray-700">
                  1.46
                </div>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Games;
