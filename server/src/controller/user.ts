import { NextFunction, Request, Response } from "express";
import User from "../model/user.ts";

export const getAllUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await User.find();

    console.log("USERS", users);

    res.status(200).json({
      message: `Buh hereglegchidiin burtgel`,
      users,
    });
  } catch (error) {
    next(error);
  }
};
