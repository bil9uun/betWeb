"use client";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

//comp

import myAxios from "@/utils/myAxios";
import { useUser } from "./userProvider";
import { IBettedMatch, IMatch, IMatchContext, IUser } from "@/interface";

export const MatchContext = createContext<IMatchContext>({} as IMatchContext);

export const MatchProvider = ({ children }: PropsWithChildren<{}>) => {
  const [allMatch, setAllMatch] = useState<IMatch[]>([]);
  const [liveMatches, setLiveMatches] = useState<IMatch[]>([]);
  const [upcomingMatches, setUpcomingMatches] = useState<IMatch[]>([]);

  const getAllMatch = async () => {
    try {
      const {
        data: { matches },
      } = await myAxios.get("/match");

      setAllMatch(matches);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const getLiveMatches = async () => {
    try {
      const {
        data: { matches },
      } = await myAxios.get("/match/live");
      setLiveMatches(matches);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const sortByDateAsc = (data: IMatch[]) => {
    return data.sort(
      (a: IMatch, b: IMatch) =>
        new Date(a.start_time!).getTime() - new Date(b.start_time!).getTime()
    );
  };

  const getUpcomingMatch = async () => {
    try {
      const {
        data: { matches },
      } = await myAxios.get("/match/upcoming");
      console.log("UPCOMING", matches);

      setUpcomingMatches(sortByDateAsc(matches));
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const postBettedMatch = async (
    userId: IUser | string,
    matchId: IMatch | string,
    chosenTeam: string,
    chosenOdds: number,
    minus: boolean,
    totalAmount: number,
    chosenTeamW: string
  ) => {
    try {
      console.log("chosenOdds", chosenOdds);
      const {
        data: { newbettedMatch },
      } = await myAxios.post("/bettedMatch", {
        bettedMatch: {
          user: userId,
          match: matchId,
          chosenTeam,
          chosenOdds,
          minus,
          totalAmount,
          chosenTeamW,
        },
      });
      console.log("Bet match posted");
    } catch (error) {}
  };

  // console.log("CONTEXT WORKED");
  // console.log("MATCH PROV", loggedUser);

  const { loggedUser } = useUser();

  const [userBetHistory, setUserBetHistory] = useState<IBettedMatch[]>([]);
  const userBettedMatches = async (id: string) => {
    // console.log("RUN START UBH", id);
    try {
      const {
        data: { newBettedMatches },
      } = await myAxios.get(`/bettedMatch/user/${id}`);
      // console.log("User betted matches", newBettedMatches);
      setUserBetHistory(newBettedMatches);
      // console.log(userBetHistory, "gg");
      if (!loggedUser) {
        setUserBetHistory([]);
      }
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  const { setLoggedUser } = useUser();
  const betWon = async (bettedMatch: IBettedMatch) => {
    try {
      console.log("BEWT WON WORKING", bettedMatch);
      const date = new Date();
      const RT = date.toISOString().split(".")[0] + "Z";
      if (
        RT > bettedMatch.match.end_time! &&
        bettedMatch.paid === false &&
        bettedMatch.chosenTeamW === bettedMatch.match.won
      ) {
        // postBettedMatch(
        //   bettedMatch.user,
        //   bettedMatch.match,
        //   bettedMatch.chosenTeam,
        //   bettedMatch.chosenOdds,
        //   true,
        //   bettedMatch.totalAmount * bettedMatch.chosenOdds,
        //   bettedMatch.chosenTeamW
        // );
        const addBalance = async () => {
          try {
            const {
              data: { findedUser },
            } = await myAxios.post("/user/balance", {
              user: {
                balance: bettedMatch.totalAmount * bettedMatch.chosenOdds,
                userId: loggedUser?._id,
                minus: true,
              },
            });
            console.log("FRONT WORKING edit balance", findedUser);
            setLoggedUser(findedUser);
            localStorage.setItem("user", JSON.stringify(findedUser));
            toast.success("Balance edited");
          } catch (error) {
            toast.error("Somethig wrong in editing balance");
          }
        };
        useEffect(() => {
          addBalance();
        }, []);
      }
      // const wonMatch = userBetHistory
      //   .filter((match) => match.match.end_time! < date)
      //   .filter((match) => match.chosenTeamW === match.match.won).map((wonMatch)=>{});
    } catch (error) {}
  };

  const addBalanceAndEditPaid = async () => {
    try {
      // const filteredMatches = userBetHistory.filter((match)=>)
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  useEffect(() => {
    getLiveMatches();
    getUpcomingMatch();
    getAllMatch();
  }, []);
  return (
    <MatchContext.Provider
      value={{
        liveMatches,
        upcomingMatches,
        allMatch,
        getUpcomingMatch,
        postBettedMatch,
        userBettedMatches,
        userBetHistory,
        betWon,
      }}
    >
      {children}
    </MatchContext.Provider>
  );
};

export const useMatch = () => useContext(MatchContext);
