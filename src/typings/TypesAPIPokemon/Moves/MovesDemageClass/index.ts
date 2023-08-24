import { Description, Name, NamedAPIResource } from "../../Utility";
import { Move } from "../Move";

export interface MoveDamageClass {
    id: number;
    name: string;
    descriptions: Description[];
    moves: NamedAPIResource<Move>[];
    names: Name[];
  }
  