"use client";

import { useEffect, useState } from "react";

//comp

import { useMatch } from "@/context/matchProvider";
import { useUser } from "@/context/userProvider";
import BetCard from "@/components/core/BetCard";

const Bets = ({ params }: { params: { id: string } }) => {
  const { loggedUser } = useUser();
  const { userBettedMatches, userBetHistory } = useMatch();
  //   console.log("PARAMS ID ", params.id);
  useEffect(() => {
    userBettedMatches(params.id);
  }, [loggedUser]);
  console.log("UBH", userBetHistory);

  return (
    <div>
      {userBetHistory.map((bet) => {
        return <BetCard bettedMatch={bet} />;
      })}
    </div>
  );
};

export default Bets;
