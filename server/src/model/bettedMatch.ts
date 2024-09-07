import { Schema, model, ObjectId } from "mongoose";
import bcrypt from "bcrypt";
interface IBettedMatchSchema {
  user: ObjectId;
  match: ObjectId;
  chosenTeam: string;
  chosenOdds: number;
  amount: number;
  totalAmount: number;
  createdAt: Date;
}

const BettedMatchSchema = new Schema<IBettedMatchSchema>({
  user: { type: Schema.ObjectId, ref: "User", required: true },
  match: { type: Schema.ObjectId, ref: "Match", required: true },
  chosenTeam: { type: String, required: true },
  chosenOdds: { type: Number, required: true },
  amount: { type: Number, required: true },
  totalAmount: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const BettedMatch = model<IBettedMatchSchema>(
  "BettedMatchSchema",
  BettedMatchSchema
);

export default BettedMatch;
