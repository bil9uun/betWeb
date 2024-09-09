import { NextFunction, Request, Response } from "express";

//comp

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
export const editBalance = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { user } = req.body;
    console.log("front coming user", user);

    const findedUser = await User.findOne({ _id: user.userId });

    console.log("fidned user in editBALANCE", findedUser);
    if (!findedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    if (user.minus === true) {
      findedUser.balance = findedUser.balance! - user.balance;
    } else if (user.minus === false) {
      findedUser.balance = findedUser.balance! + user.balance;
    }
    await findedUser?.save();
    console.log("UPDATE WORKED");
    res.status(200).json({
      message: "edit balance success",
      findedUser,
    });
  } catch (error) {
    next(error);
  }
};
