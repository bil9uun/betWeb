import { Dispatch, SetStateAction } from "react";

export interface IMatch {
  _id?: string;
  match_id?: string;
  start_time?: Date;
  end_time?: string | Date;
  team1id?: string;
  team1name?: string;
  team1money?: number;
  team2id?: string;
  team2name?: string;
  team2money?: number;
  leagueid?: string;
  league_name?: string;
  series_type?: string;
  won?: string;
  totalMoney?: number;
}
export interface IBettedMatch {
  user: IUser;
  match: IMatch;
  chosenTeam: string;
  chosenOdds: number;
  amount: number;
  minus: boolean;
  paid: boolean;
  totalAmount: number;
  createdAt: Date;
  chosenTeamW: string;
}

export interface IMatchContext {
  liveMatches: IMatch[];
  upcomingMatches: IMatch[];
  allMatch: IMatch[];
  getUpcomingMatch: () => void;
  postBettedMatch: (
    userId: IUser | string,
    matchId: IMatch | string,
    chosenTeam: string,
    chosenOdds: number,
    minus: boolean,
    totalAmount: number,
    chosenTeamW: string
  ) => void;
  userBettedMatches: (id: string) => void;
  userBetHistory: IBettedMatch[];
  betWon: (bettedMatch: IBettedMatch) => void;
}

export interface IUser {
  name?: string;
  email?: string;
  password?: string;
  avatarImage?: string;
  otp?: string;
  balance?: number;
  createdAt?: string;
  _id: string;
}

export interface IUserContext {
  users: IUser[];
  userToken: string | null;
  loggedUser?: IUser;
  logIn: ({ email, password }: ILogin) => void;
  logout: () => void;
  signUp: ({ email, name, password }: ILogin) => void;
  setLoggedUser: Dispatch<SetStateAction<IUser | undefined>>;
}

export interface ILogin {
  email: string;
  password: string;
  name?: string;
}
