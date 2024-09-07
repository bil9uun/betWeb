import { Schema, model, Document } from "mongoose";

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

const BetSchema = new Schema<IBet>({
  hash: { type: String },
  matchType: { type: String },
  streamUrl: { type: String },
  startsAt: { type: Date },
  leagueName: { type: String },
  leagueUrl: { type: String },
  choice: { type: String },
  teams: [
    {
      name: { type: String },
      url: { type: String },
    },
    {
      name: { type: String },
      url: { type: String },
    },
  ],
});

const Bet = model<IBet>("User", BetSchema);

export default Bet;
