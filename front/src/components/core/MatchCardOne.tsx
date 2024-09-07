import React from "react";
import { Button } from "../ui/button";

const MatchCardOne = ({
  time,
  date,
  team1name,
  team2name,
  team1odds,
  team2odds,
}) => {
  return (
    <div className="size-72 p-7 bg-gray-800 rounded-xl text-red-50 card-container flex flex-col justify-between">
      <div className="flex justify-between">
        <div>
          <p className="leading-none">{time}</p>
          <p className="font-extralight text-[10px]">{date}</p>
        </div>
        <img className="w-14 object-contain" src="/esl.png" alt="" />
      </div>

      <div className="flex justify-between">
        <p>{team1name}</p>
        <p>{team2name}</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-center font-thin text-sm">win</p>
          <Button className="px-6 py-3 bg-[#00ff99] bg-opacity-20 backdrop-filter backdrop-blur-lg text-accent border border-[#00ff99] border-opacity-40 rounded-xl font-semibold shadow-lg hover:bg-opacity-30 hover:border-opacity-60 transition-all duration-300">
            {team1odds}
          </Button>
        </div>
        <div className="w-[1px] h-11 bg-accent" />
        <div>
          <p className="text-center font-thin text-sm">win</p>
          <Button className="px-6 py-3 bg-[#00ff99] bg-opacity-20 backdrop-filter backdrop-blur-lg text-accent border border-[#00ff99] border-opacity-40 rounded-xl font-semibold shadow-lg hover:bg-opacity-30 hover:border-opacity-60 transition-all duration-300">
            {team2odds}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchCardOne;
