import { useEffect } from "react";

//comp

import { useMatch } from "@/context/matchProvider";
import {
  formatTimeWithHourAndMinute,
  formatTimewithYearAndMonthAndDay,
} from "@/utils/dateFormatter";
import { Button } from "../ui/button";
import { IBettedMatch } from "@/interface";

const BetCard = ({ bettedMatch }: IBettedMatch | any) => {
  const { betWon } = useMatch();
  useEffect(() => {
    betWon(bettedMatch);
  });
  return (
    <div className=" w-full p-7 bg-gray-800 rounded-xl text-red-50  mt-5 flex justify-between">
      <div className=" flex items-center gap-10">
        <div className="flex gap-4 ">
          <div>
            <p className="leading-none">
              {formatTimeWithHourAndMinute(bettedMatch.createdAt)}
            </p>
            <p className="font-extralight text-[10px]">
              {formatTimewithYearAndMonthAndDay(bettedMatch.createdAt)}
            </p>
          </div>
          <img className="w-14 object-contain" src="/esl.png" alt="" />
        </div>
        <div className="flex justify-between w-[400px]">
          <p>{bettedMatch.chosenTeam}</p>
          <p className="text-zinc-500">
            {bettedMatch.minus
              ? "Balance decreased"
              : bettedMatch.paid
              ? "Balance increased"
              : "Pending"}
          </p>
        </div>
      </div>
      <div className="flex gap-14 items-center">
        <div>
          <p className="text-center font-thin text-sm">Odds</p>
          <Button className="px-6 py-3 bg-[#00ff99] bg-opacity-20 backdrop-filter backdrop-blur-lg text-accent border border-[#00ff99] border-opacity-40 rounded-xl font-semibold shadow-lg hover:bg-opacity-30 hover:border-opacity-60 transition-all duration-300">
            {bettedMatch.chosenOdds}
          </Button>
        </div>
        <div
          className={`flex ${
            bettedMatch.minus ? "text-red-500" : "text-green-500"
          }`}
        >
          <p>{bettedMatch.minus ? "-" : "+"}</p>
          <p>{bettedMatch.totalAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default BetCard;
