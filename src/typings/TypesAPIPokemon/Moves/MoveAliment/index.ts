import { Name, NamedAPIResource } from "../../Utility";
import { Move } from "../Move";

export interface MoveAilment {
    id: number;
    name: string;
    moves: NamedAPIResource<Move>[];
    names: Name[];
  }