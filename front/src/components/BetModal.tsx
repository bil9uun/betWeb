"use client";

import { useState, ChangeEvent } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";

//comp

import myAxios from "@/utils/myAxios";
import { useUser } from "@/context/userProvider";
import { useMatch } from "@/context/matchProvider";
import Link from "next/link";

export default function BetModal({
  isOpen,
  setIsOpen,
  selectedTeam,
  match_id,
  _id,
}: {
  isOpen: boolean;
  setIsOpen: (boolean: boolean) => void;
  selectedTeam: { name: string; id: string; liveOdds: number };
  match_id: string | undefined;
  _id: string | undefined;
}) {
  const { loggedUser, setLoggedUser } = useUser();
  const { getUpcomingMatch, postBettedMatch } = useMatch();
  const [betAmount, setBetAmount] = useState<number>(0);
  //   const [betOdds, setBetOdds] = useState<number>(selectedTeam.liveOdds || 1.95);
  const [potentialPayout, setPotentialPayout] = useState<number>(0);

  const handleBetAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    const amount = parseFloat(e.target.value);
    setBetAmount(amount);
    calculatePotentialPayout(amount, selectedTeam.liveOdds || 1.95);
  };
  const calculatePotentialPayout = (amount: number, odds: number) => {
    const payout = amount * odds;
    setPotentialPayout(payout);
  };

  const editMatchMoney = async () => {
    try {
      console.log(betAmount);
      console.log(selectedTeam.id);
      await myAxios.post("/match/upcoming", {
        match: {
          chosenTeamMoney: betAmount,
          chosenTeamId: selectedTeam.id,
          _id,
        },
      });
      console.log("FRONT WORKING");
    } catch (error) {
      toast.error("There was an error placing a bet");
    }
  };

  const minusBalance = async () => {
    try {
      const {
        data: { findedUser },
      } = await myAxios.post("/user/balance", {
        user: {
          balance: betAmount,
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

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Place Your Bet</DialogTitle>
          <DialogDescription>
            Enter the amount you want to bet.
          </DialogDescription>
          <DialogDescription className="text-accent">
            {selectedTeam.name || ""}
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid items-center grid-cols-4 gap-4 text-black">
            <Label htmlFor="betAmount" className="text-right">
              Bet Amount
            </Label>
            <Input
              id="betAmount"
              type="number"
              value={betAmount}
              onChange={handleBetAmountChange}
              className="col-span-3"
            />
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="betOdds" className="text-right">
              Bet Odds
            </Label>
            <div id="betOdds" className="col-span-3 font-medium">
              {selectedTeam.liveOdds || 1.95}
            </div>
          </div>
          <div className="grid items-center grid-cols-4 gap-4">
            <Label htmlFor="potentialPayout" className="text-right">
              Potential Payout
            </Label>
            <div id="potentialPayout" className="col-span-3 font-medium">
              ${potentialPayout.toFixed(2)}
            </div>
          </div>
        </div>
        <DialogFooter>
          {loggedUser ? (
            <Button
              variant="ghost"
              type="submit"
              onClick={() => {
                editMatchMoney();
                minusBalance();
                setIsOpen(false);
                getUpcomingMatch();
                postBettedMatch(
                  loggedUser._id,
                  _id!,
                  selectedTeam.name,
                  selectedTeam.liveOdds,
                  true,
                  betAmount,
                  "team1"
                );
              }}
            >
              Place Bet
            </Button>
          ) : (
            <Link href="/login">
              <Button>LogIn</Button>
            </Link>
          )}
          <Button
            onClick={() => setIsOpen(false)}
            variant="ghost"
            className="bg-white text-black"
          >
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
