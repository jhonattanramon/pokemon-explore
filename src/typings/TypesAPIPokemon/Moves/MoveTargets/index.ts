import { Description, Name, NamedAPIResource } from "../../Utility";
import { Move } from "../Move";

export interface MoveTarget {
    id: number;
    name: string;
    descriptions: Description[];
    moves: NamedAPIResource<Move>[];
    names: Name[];
  }