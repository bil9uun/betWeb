"use client";

import { useEffect, useState } from "react";

//comp

import LeagueMatch from "@/components/core/LeagueMatch";
import { useMatch } from "@/context/matchProvider";
import { IMatch } from "@/interface";

const Tournament = () => {
  const { allMatch } = useMatch();
  const [leagues, setLeagues] = useState<{ name: string; matches: IMatch[] }[]>(
    [
      { name: "CS2 League Day 1", matches: [] },
      { name: "CS2 League Day 2", matches: [] },
      { name: "CS2 League Day 3", matches: [] },
      { name: "CS2 League Day 4", matches: [] },
      { name: "CS2 League Day 5", matches: [] },
    ]
  );

  const filterLeague = () => {
    const updatedLeagues = leagues.map((league) => {
      const matchedGames = allMatch.filter((match) =>
        match.league_name!.includes(league.name)
      );

      return {
        ...league,
        matches: matchedGames,
      };
    });

    setLeagues(updatedLeagues);
  };

  useEffect(() => {
    filterLeague();
  }, [allMatch]);
  console.log("leagues", leagues);
  return (
    <div className="flex flex-col gap-20">
      {leagues.map((league) => (
        <div className="flex flex-wrap gap-10 flex-col justify-center items-center ">
          <h1 className="text-4xl font-bold">{league.name}</h1>
          <div className="flex flex-wrap gap-10 justify-center items-center">
            {league.matches.map((match) => (
              <LeagueMatch
                leagueName={league.name}
                startTime={match.start_time}
                team1={{ name: match.team1name }}
                team2={{ name: match.team1name }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Tournament;
