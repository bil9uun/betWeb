import { Schema, model, Document } from "mongoose";
import bcrypt from "bcrypt";

interface IBet {
  hash: String;
  matchType: String;
  streamUrl: null | String;
  startsAt: Date;
  leagueName: String;
  leagueUrl: String;
  choice?: String;
  teams: [
    {
      name: String;
      url: String;
    },
    {
      name: String;
      url: String;
    }
  ];
}

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  avatarImg?: string;
  otp?: string;
  createdAt?: Date;
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minlength: 6,
    // select: false,
  },
  avatarImg: {
    type: String,
  },
  otp: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

UserSchema.pre("save", async function () {
  if (this.isModified("password")) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
  }
});

const User = model<IUser>("User", UserSchema);

export default User;
