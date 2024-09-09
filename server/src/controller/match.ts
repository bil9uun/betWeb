import { NextFunction, Response, Request } from "express";

//comp

import Match from "../model/match.ts";

export const addMatch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const body = req.body;
    const match = await Match.create(body);
    res.status(200).json({
      message: "success",
      match,
    });
  } catch (error) {
    next(error);
  }
};
export const getAllMatch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const matches = await Match.find().exec();

    res.status(200).json({
      message: "success",
      matches,
    });
  } catch (error) {
    next(error);
  }
};
export const getAllLiveMatch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const date = new Date();
    const RT = date.toISOString().split(".")[0] + "Z";
    console.log("RT", RT);

    const matches = await Match.find({
      start_time: { $lte: RT },
      end_time: { $gte: RT },
    }).exec();

    res.status(200).json({
      message: "success",
      matches,
    });
  } catch (error) {
    next(error);
  }
};
export const getAllUpcomingMatch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const date = new Date();
    const RT = date.toISOString().split(".")[0] + "Z";
    console.log("RT", RT);

    const matches = await Match.find({
      start_time: { $gte: RT },
    }).exec();

    res.status(200).json({
      message: "success",
      matches,
    });
  } catch (error) {
    next(error);
  }
};
export const getAllRecentMatch = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const date = new Date();
    const RT = date.toISOString().split(".")[0] + "Z";
    console.log("RT", RT);

    const matches = await Match.find({
      end_time: { $lt: RT },
    }).exec();

    res.status(200).json({
      message: "success",
      matches,
    });
  } catch (error) {
    next(error);
  }
};

export const editMatchMoney = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { match } = req.body;
    console.log("UPDATE WORKING", match);

    const searchedMatch = await Match.findOne({
      _id: match._id,
    });
    if (!searchedMatch) {
      return res
        .status(404)
        .json({ message: "Match with the provided teamId not found" });
    }
    console.log("SEARCHED MATCH", searchedMatch);

    if (searchedMatch.team1id === match.chosenTeamId) {
      searchedMatch.team1money =
        searchedMatch.team1money + match.chosenTeamMoney;
      searchedMatch.totalMoney =
        searchedMatch.totalMoney + match.chosenTeamMoney;
    } else {
      searchedMatch.team2money =
        searchedMatch.team2money + match.chosenTeamMoney;
      searchedMatch.totalMoney =
        searchedMatch.totalMoney + match.chosenTeamMoney;
    }

    await searchedMatch?.save();
    console.log("UPDATE WORKED");
    res.status(200).json({
      message: "success",
      searchedMatch,
    });
  } catch (error) {
    next(error);
  }
};
