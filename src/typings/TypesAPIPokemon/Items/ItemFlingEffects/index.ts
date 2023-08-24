import { Effect, NamedAPIResource } from "../../Utility";
import { Item } from "../item";

export interface ItemFlingEffect {
    id: number;
    name: string;
    effect_entries: Effect[];
    items: NamedAPIResource<Item>[];
  }