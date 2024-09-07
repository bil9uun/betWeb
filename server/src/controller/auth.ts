import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../model/user.ts";
import MyError from "../utils/myError.ts";

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { userEmail, userPassword } = req.body;

    const user = await User.findOne({ email: userEmail })
      .select("+password")
      .lean();

    if (!user) {
      res.status(400).json({
        message: "User is not registered",
      });
    } else {
      console.log("_Id serched user:", user.password);
      const isValid = await bcrypt.compare(userPassword, user.password);
      console.log("gg", userEmail, userPassword);

      if (!isValid) {
        res.status(400).json({
          message: "Wrong Password",
        });
      }

      const token = jwt.sign(
        {
          id: user._id,
        },
        process.env.JWT_PRIVATE_KEY as string,
        { expiresIn: process.env.JWT_EXPIRES_IN }
      );
      const { password, ...otherParams } = user;
      res.status(201).json({
        message: "User login successfully",
        token,
        user: otherParams,
      });
    }
  } catch (error) {
    next(error);
  }
};

export const signup = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = req.body;

    const isExist = await User.findOne({ email: newUser.email });

    if (isExist) {
      throw new MyError("User is registered, go to login", 400);
    }

    const user = await User.create({ ...newUser });

    res.status(201).json({
      message: "Шинэ хэрэглэгч амжилттай бүртгэгдлээ ",
      user,
    });
  } catch (error) {
    next(error);
  }
};
