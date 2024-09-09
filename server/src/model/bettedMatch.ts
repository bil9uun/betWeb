import { Schema, model, ObjectId } from "mongoose";
interface IBettedMatchSchema {
  user: ObjectId;
  match: ObjectId;
  chosenTeam: string;
  chosenOdds: number;
  amount: number;
  minus: boolean;
  paid: boolean;
  totalAmount: number;
  createdAt: Date;
  chosenTeamW: string;
}

const BettedMatchSchema = new Schema<IBettedMatchSchema>({
  user: { type: Schema.ObjectId, ref: "User", required: true, default: "" },
  match: { type: Schema.ObjectId, ref: "Match", required: true, default: "" },
  chosenTeam: { type: String, required: true },
  chosenOdds: { type: Number, required: true },
  minus: { type: Boolean, required: true },
  paid: { type: Boolean, required: true, default: false },
  totalAmount: { type: Number, required: true },
  chosenTeamW: { type: String, required: true },
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
