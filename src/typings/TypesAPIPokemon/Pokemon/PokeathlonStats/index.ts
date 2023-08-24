import { Name, NamedAPIResource } from "../../Utility";
import { Nature } from "../Natures";

export interface PokeathlonStat {
    id: number;
    name: string;
    names: Name[];
    affecting_natures: NaturePokeathlonStatAffectSets;
  }

  export interface NaturePokeathlonStatAffect {
    max_change: number;
    nature: NamedAPIResource<Nature>;
  }

  export interface NaturePokeathlonStatAffectSets {
    increase: NaturePokeathlonStatAffect[];
    decrease: NaturePokeathlonStatAffect[];
  }