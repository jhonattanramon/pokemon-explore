import { Move } from "../../Moves/Move";
import { MoveDamageClass } from "../../Moves/MovesDemageClass";
import { APIResource, Name, NamedAPIResource } from "../../Utility";
import { Characteristic } from "../Characteristics";
import { Nature } from "../Natures";

export interface Stat {
    id: number;
    name: string;
    game_index: number;
    is_battle_only: boolean;
    affecting_moves: MoveStatAffectSets;
    affecting_natures: NatureStatAffectSets;
    characteristics: APIResource<Characteristic>[];
    move_damage_class: NamedAPIResource<MoveDamageClass>;
    names: Name[];
  }
  
export  interface MoveStatAffectSets {
    increase: MoveStatAffect[];
    decrease: MoveStatAffect[];
  }
  
export  interface MoveStatAffect {
    change: number;
    move: NamedAPIResource<Move>;
  }
  
export  interface NatureStatAffectSets {
    increase: NamedAPIResource<Nature>[];
    decrease: NamedAPIResource<Nature>[];
  }
  