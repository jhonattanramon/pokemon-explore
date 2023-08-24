import { Effect, FlavorText } from "../../Utility";

export interface ContestEffect {
    id: number;
    appeal: number;
    jam: number;
    effect_entries: Effect;
    flavor_text_entries: FlavorText;
  }