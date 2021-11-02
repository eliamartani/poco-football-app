import { ChangeEvent } from "react";

export interface Game {
  opponent: Match;
  team: Match;
}

export interface InputEvent {
  target: HTMLInputElement;
}

export interface Match {
  team: string;
  teamId: number;
  score: number;
  winner: boolean;
}

export interface Matches {
  teams: string[];
  score: number[];
  teamIds: number[];
}

export interface MatchResult {
  matches: number;
  points: number;
  won: number;
  drawn: number;
  lost: number;
  goals: number;
  goalsConceded: number;
  goalsDifference: number;
  teamId?: number;
  teamName?: string;
}

export interface Team {
  id?: string;
  name?: string;
  results?: Matches[];
}

export interface WeekLink {
  chosenWeek: number;
  weeks: number[];
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export type RouterParams = { index: string };

export type TeamMatches = Record<string, Game[]>;

export type ValueRef = number | string;
