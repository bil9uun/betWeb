import React, { useEffect, useState } from "react";

//comp

import { Button } from "../ui/button";
import {
  formatTimeWithHourAndMinute,
  formatTimewithYearAndMonthAndDay,
} from "@/utils/dateFormatter";

import BetModal from "../BetModal";
import { IMatch } from "@/interface";

const MatchCardTwo = ({
  _id,
  start_time,
  match_id,
  team1name,
  team2name,
  team1money,
  team2money,
  totalMoney,
  team1id,
  team2id,
}: IMatch) => {
  const team1odds = parseFloat(
    ((1 / (team1money! / totalMoney!)) * 0.95).toFixed(2)
  );
  const team2odds = parseFloat(
    ((1 / (team2money! / totalMoney!)) * 0.95).toFixed(2)
  );

  // if (team1money! > 0 && team2money! > 0) {
  //   setTeam1odds(
  //     parseFloat(((1 / (team1money! / totalMoney!)) * 0.95).toFixed(2))
  //   );
  //   setTeam2odds(
  //     parseFloat(((1 / (team2money! / totalMoney!)) * 0.95).toFixed(2))
  //   );
  //   console.log("1");
  // }

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedTeam, setSelectedTeam] = useState<{
    name: string;
    id: string;
    liveOdds: number;
  }>({ name: "", id: "", liveOdds: 0 });

  const oddsCalc = () => {
    // console.log("team1money", team1money, typeof team1money);
    // console.log("team2money", team2money, typeof team2money);

    if (totalMoney === 0) {
      // console.log("team1odds", team1odds);
      // console.log("team2odds", team2odds);
    }
  };
  useEffect(() => {
    oddsCalc();
  }, [totalMoney]);

  return (
    <div className=" w-full p-7 bg-gray-800 rounded-xl text-red-50  mt-5 flex justify-between">
      <div className=" flex items-center gap-10">
        <div className="flex gap-4 ">
          <div>
            <p className="leading-none">
              {formatTimeWithHourAndMinute(start_time)}
            </p>
            <p className="font-extralight text-[10px]">
              {formatTimewithYearAndMonthAndDay(start_time)}
            </p>
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
          <Button
            onClick={() => {
              setIsOpen(true);
              setSelectedTeam({
                name: team1name!,
                id: team1id!,
                liveOdds: team1odds,
              });
            }}
            className="px-6 py-3 bg-[#00ff99] bg-opacity-20 backdrop-filter backdrop-blur-lg text-accent border border-[#00ff99] border-opacity-40 rounded-xl font-semibold shadow-lg hover:bg-opacity-30 hover:border-opacity-60 transition-all duration-300"
          >
            {team1odds || 1.95}
          </Button>
        </div>
        <div>
          <p className="text-center font-thin text-sm">{team2name} win</p>{" "}
          <Button
            onClick={() => {
              setIsOpen(true);
              setSelectedTeam({
                name: team2name!,
                id: team2id!,
                liveOdds: team2odds,
              });
            }}
            className="px-6 py-3 bg-[#00ff99] bg-opacity-20 backdrop-filter backdrop-blur-lg text-accent border border-[#00ff99] border-opacity-40 rounded-xl font-semibold shadow-lg hover:bg-opacity-30 hover:border-opacity-60 transition-all duration-300"
          >
            {team2odds || 1.95}
          </Button>
        </div>
        <BetModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          selectedTeam={selectedTeam}
          match_id={match_id}
          _id={_id}
        />
      </div>
    </div>
  );
};

export default MatchCardTwo;
