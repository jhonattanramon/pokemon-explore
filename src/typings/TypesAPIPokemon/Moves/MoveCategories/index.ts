import { Description, NamedAPIResource } from "../../Utility";
import { Move } from "../Move";

export interface MoveCategory {
    id: number;
    name: string;
    moves: NamedAPIResource<Move>[];
    descriptions: Description[];
  }