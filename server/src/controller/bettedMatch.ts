import { NextFunction, Request, Response } from "express";

//comp

import BettedMatch from "../model/bettedMatch.ts";

export const postBettedMatch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { bettedMatch } = req.body;
    const newBettedMatch = await BettedMatch.create({
      ...bettedMatch,
    });

    res.status(201).json({
      message: "Bet history edited successfully",
      newBettedMatch,
    });
  } catch (error) {
    next(error);
  }
};

export const userBettedMatches = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("userbettedmatches", req.params);

    const newBettedMatches = await BettedMatch.find({
      user: req.params.id,
    })
      .populate("user")
      .populate("match")
      .exec();
    if (!newBettedMatches) {
      res.status(200).json({
        message: "Get user unvalid ",
      });
    }
    console.log("NEW BETTED MATCH:", newBettedMatches);
    res.status(200).json({
      message: "Get user bet history successfully ",
      newBettedMatches,
    });
  } catch (error) {
    next(error);
  }
};

export const addBalanceAndEditPaid = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("work2");
    const { bettedMatch } = req.body;
    console.log("UPDATE WORKING", bettedMatch);

    const searchedMatch = await BettedMatch.find({
      user: bettedMatch.userId,
    });
    if (!searchedMatch) {
      return res
        .status(404)
        .json({ message: "Match with the provided teamId not found" });
    }
    console.log("SEARCHED MATCH", searchedMatch);

    console.log("UPDATE WORKED");
    res.status(200).json({
      message: "success",
      searchedMatch,
    });
  } catch (error) {
    next(error);
  }
};
