import { Move } from "../../../Moves/Move";
import { FlavorText, NamedAPIResource } from "../../../Utility";

export interface SuperContestEffect {
    id: number;
    appeal: number;
    flavor_text_entries: FlavorText[];
    moves: NamedAPIResource<Move>[];
  }