import { BerryFlavor } from "../../Berries/BerryFlavor";
import { MoveBattleStyle } from "../../Moves/MoveBattleStyles";
import { Name, NamedAPIResource } from "../../Utility";
import { PokeathlonStat } from "../PokeathlonStats";
import { Stat } from "../stats";

export interface Nature {
    id: number;
    name: string;
    decreased_stat: NamedAPIResource<Stat>;
    increased_stat: NamedAPIResource<Stat>;
    hates_flavor: NamedAPIResource<BerryFlavor>;
    likes_flavor: NamedAPIResource<BerryFlavor>;
    pokeathlon_stat_changes: NatureStatChange[];
    move_battle_style_preferences: MoveBattleStylePreference[];
    names: Name;
  }

  export interface NatureStatChange {
    max_change: number;
    pokeathlon_stat: NamedAPIResource<PokeathlonStat>;
  }
  
  
  export interface MoveBattleStylePreference {
    low_hp_preference: number;
    high_hp_preference: number;
    move_battle_style: NamedAPIResource<MoveBattleStyle>;
  }