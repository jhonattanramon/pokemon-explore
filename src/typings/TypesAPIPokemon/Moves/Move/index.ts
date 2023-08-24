import { ContestEffect } from "../../Contests/ContestEffects";
import { ContestType } from "../../Contests/ContestTypes";
import { SuperContestEffect } from "../../Contests/SuperContestEffects/SuperContestEffect";
import { Generation } from "../../Games/Generations";
import { VersionGroup } from "../../Games/versionGroups";
import { AbilityEffectChange } from "../../Pokemon/Ability";
import { APIResource, Language, MachineVersionDetail, Name, NamedAPIResource, VerboseEffect } from "../../Utility";
import { MoveAilment } from "../MoveAliment";
import { MoveCategory } from "../MoveCategories";
import { MoveTarget } from "../MoveTargets";
import { MoveDamageClass } from "../MovesDemageClass";
import { Stat } from "../../Pokemon/stats";
import { Type } from "../../Pokemon/Types";
import { Pokemon } from "../../Pokemon/Pokemon";

export interface Move {
    id: number;
    name: string;
    accuracy: number | null;
    effect_chance: number | null;
    pp: number;
    priority: number;
    power: number | null;
    contest_combos: ContestComboSets;
    contest_type: NamedAPIResource<ContestType>;
    contest_effect: APIResource<ContestEffect>;
    damage_class: NamedAPIResource<MoveDamageClass>;
    effect_entries: VerboseEffect[];
    effect_changes: AbilityEffectChange[];
    learned_by_pokemon: NamedAPIResource<Pokemon>[];
    flavor_text_entries: MoveFlavorText[];
    generation: NamedAPIResource<Generation>;
    machines: MachineVersionDetail[];
    meta: MoveMetaData;
    names: Name[];
    past_values: PastMoveStatValues[];
    stat_changes: MoveStatChange[];
    super_contest_effect: APIResource<SuperContestEffect>;
    target: NamedAPIResource<MoveTarget>;
    type: NamedAPIResource<Type>;
  }
  
  export interface ContestComboSets {
    normal: ContestComboDetail;
    super: ContestComboDetail;
  }
  
  export interface ContestComboDetail {
    use_before: NamedAPIResource<Move>[];
    use_after: NamedAPIResource<Move>[];
  }
  
 export interface MoveFlavorText {
    flavor_text: string;
    language: NamedAPIResource<Language>;
    version_group: NamedAPIResource<VersionGroup>;
  }
  
 export interface MoveMetaData {
    ailment: NamedAPIResource<MoveAilment>;
    category: NamedAPIResource<MoveCategory>;
    min_hits: number | null;
    max_hits: number | null;
    min_turns: number | null;
    max_turns: number | null;
    drain: number;
    healing: number;
    crit_rate: number;
    ailment_chance: number;
    flinch_chance: number;
    stat_chance: number;
  }

 export interface MoveStatChange {
    change: number;
    stat: NamedAPIResource<Stat>;
  }
  

 export interface PastMoveStatValues {
    accuracy: number;
    effect_chance: number;
    power: number;
    pp: number;
    effect_entries: VerboseEffect[];
    type: NamedAPIResource<Type>;
    version_group: NamedAPIResource<VersionGroup>;
  }
  
  
