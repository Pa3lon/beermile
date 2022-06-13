import React from "react";
import BetItem from "./BetItem";

interface Props {
  games: any[];
}

const Games = (props: Props) => {
  return (
    <div className="flex justify-between w-5/12">
      <div>
        <p className="text-center">Winner</p>
        <ul className="mt-6 space-y-2">
          <BetItem item="Sigurd Gundersen" odds={1.98} />
          <BetItem item="Daniel Salamonsen" odds={1.99} />
          <BetItem item="Niklas Busk Bindestrek Jensen" odds={3.0} />
          <BetItem item="Henrik Jakola Skansen" odds={4.2} />
          <BetItem item="Johannes Jonassen Pleym" odds={1.05} />
          <BetItem item="Andreas Mathisen" odds={6.9} />
          <BetItem item="Don Omar" odds={5000} />
          <BetItem item="Patrick Lønhaug" odds={5001} />
        </ul>
      </div>
      <div>
        <p className="text-center">Spesials</p>
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
