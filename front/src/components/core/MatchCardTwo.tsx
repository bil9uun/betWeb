import React from "react";
import { Button } from "../ui/button";

const MatchCardTwo = ({
  time,
  date,
  team1name,
  team2name,
  team1odds,
  team2odds,
}) => {
  return (
    <div className=" w-full p-7 bg-gray-800 rounded-xl text-red-50  mt-5 flex justify-between">
      <div className=" flex items-center gap-10">
        <div className="flex gap-4 ">
          <div>
            <p className="leading-none">{time}</p>
            <p className="font-extralight text-[10px]">{date}</p>
          </div>
          <img className="w-14 object-contain" src="/esl.png" alt="" />
        </div>
        <div className="flex justify-between w-[400px]">
          <p>{team1name}</p>
          <p className="text-zinc-500">VS</p>
          <p>{team2name}</p>
        </div>
      </div>
      <div className="flex gap-14 items-center">
        <div>
          <p className="text-center font-thin text-sm">{team1name} win</p>
          <Button className="px-6 py-3 bg-[#00ff99] bg-opacity-20 backdrop-filter backdrop-blur-lg text-accent border border-[#00ff99] border-opacity-40 rounded-xl font-semibold shadow-lg hover:bg-opacity-30 hover:border-opacity-60 transition-all duration-300">
            {team1odds}
          </Button>
        </div>
        <div>
          <p className="text-center font-thin text-sm">{team2name} win</p>
          <Button className="px-6 py-3 bg-[#00ff99] bg-opacity-20 backdrop-filter backdrop-blur-lg text-accent border border-[#00ff99] border-opacity-40 rounded-xl font-semibold shadow-lg hover:bg-opacity-30 hover:border-opacity-60 transition-all duration-300">
            {team2odds}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchCardTwo;
