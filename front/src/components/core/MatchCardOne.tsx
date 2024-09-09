//comp

import { Button } from "../ui/button";
import {
  formatTimeWithHourAndMinute,
  formatTimewithYearAndMonthAndDay,
} from "@/utils/dateFormatter";
import { IMatch } from "@/interface";

const MatchCardOne = ({
  start_time,
  team1name,
  team2name,
  team1money,
  team2money,
  totalMoney,
  series_type,
}: IMatch) => {
  const team1odds = parseFloat(
    ((1 / (team1money! / totalMoney!)) * 0.95).toFixed(2)
  );
  const team2odds = parseFloat(
    ((1 / (team2money! / totalMoney!)) * 0.95).toFixed(2)
  );
  return (
    <div className="size-72 p-7 bg-gray-800 rounded-xl text-red-50 card-container flex flex-col justify-between">
      <div className="flex justify-between">
        <div>
          <p className="leading-none">
            {formatTimeWithHourAndMinute(start_time)}
          </p>
          <p className="font-extralight text-[10px]">
            {formatTimewithYearAndMonthAndDay(start_time)}
          </p>
        </div>
        <p className="text-red-500 font-semibold">MATCHLIVE</p>
        <img className="w-14 object-contain" src="/esl.png" alt="" />
      </div>

      <div className="flex justify-between">
        <p>{team1name}</p>
        <p>{team2name}</p>
      </div>
      <div className="flex justify-between items-center">
        <div>
          <p className="text-center font-thin text-sm">win</p>
          <Button
            disabled={true}
            className="px-6 py-3 bg-[#00ff99] bg-opacity-20 backdrop-filter backdrop-blur-lg text-accent border border-[#00ff99] border-opacity-40 rounded-xl font-semibold shadow-lg hover:bg-opacity-30 hover:border-opacity-60 transition-all duration-300"
          >
            {team1odds || 1.95}
          </Button>
        </div>
        <p className="text-center">{series_type}</p>
        <div>
          <p className="text-center font-thin text-sm">win</p>
          <Button
            disabled={true}
            className="px-6 py-3 bg-[#00ff99] bg-opacity-20 backdrop-filter backdrop-blur-lg text-accent border border-[#00ff99] border-opacity-40 rounded-xl font-semibold shadow-lg hover:bg-opacity-30 hover:border-opacity-60 transition-all duration-300"
          >
            {team2odds || 1.95}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchCardOne;
