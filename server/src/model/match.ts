import { Schema, model, Document } from "mongoose";

interface IMatch {
  match_id: String;
  start_time: String;
  end_time: String;
  team1id: String;
  team1name: String;
  team1money: Number;
  team2id: String;
  team2name: String;
  team2money: Number;
  leagueid: String;
  league_name: String;
  series_type: String;
  won: String;
  totalMoney: Number;
}

const MatchSchema = new Schema<IMatch>({
  match_id: { type: String, required: true, unique: true },
  start_time: { type: String, required: true },
  end_time: { type: String, required: true },
  team1id: { type: String, required: true },
  team1name: { type: String, required: true },
  team1money: { type: Number, default: 0, required: true },
  team2id: { type: String, required: true },
  team2name: { type: String, required: true },
  team2money: { type: Number, default: 0, required: true },
  leagueid: { type: String, required: true },
  league_name: { type: String, required: true },
  series_type: { type: String, required: true },
  won: { type: String, required: true },
  totalMoney: { type: Number, default: 0, required: true },
});

const Match = model<IMatch>("Match", MatchSchema);

export default Match;
