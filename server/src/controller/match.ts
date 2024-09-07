import { NextFunction, Response, Request } from "express";
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
    const match = await Match.find();
    res.status(200).json({
      message: "success",
      match,
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
    const RT = new Date();
    console.log("RT", RT);

    const match = await Match.find({
      start_time: { $lte: RT },
      end_time: { $gte: RT },
    });

    res.status(200).json({
      message: "success",
      match,
    });
  } catch (error) {
    next(error);
  }
};
