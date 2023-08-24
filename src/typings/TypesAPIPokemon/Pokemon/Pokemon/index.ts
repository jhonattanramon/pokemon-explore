import { Generation } from "../../Games/Generations";
import { Version } from "../../Games/version";
import { VersionGroup } from "../../Games/versionGroups";
import { Item } from "../../Items/item";
import { Move } from "../../Moves/Move";
import { MoveLearnMethod } from "../../Moves/MoveLearnMethods";
import { NamedAPIResource, VersionGameIndex } from "../../Utility";
import { Ability } from "../Ability";
import { PokemonForm } from "../PokemonForms";
import { PokemonSpecies } from "../PokemonSpecies";
import { Type } from "../Types";
import { Stat } from "../stats";

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: PokemonAbility[];
  forms: NamedAPIResource<PokemonForm>[];
  game_indices: VersionGameIndex[];
  held_items: PokemonHeldItem[];
  location_area_encounters: string;
  moves: PokemonMove[];
  past_types: PokemonTypePast[];
  sprites: PokemonSprites;
  species: NamedAPIResource<PokemonSpecies>;
  stats: PokemonStat[];
  types: PokemonType[];
}

export interface PokemonType {
  slot: number;
  type: NamedAPIResource<Type>;
}

export interface PokemonFormType {
  slot: number;
  type: NamedAPIResource<Type>;
}

export interface PokemonTypePast {
  generation: NamedAPIResource<Generation>;
  types: PokemonType[];
}

export interface PokemonHeldItem {
  item: NamedAPIResource<Item>;
  version_details: PokemonHeldItemVersion[];
}

export interface PokemonHeldItemVersion {
  version: NamedAPIResource<Version>;
  rarity: number;
}

export interface PokemonMove {
  move: NamedAPIResource<Move>;
  version_group_details: PokemonMoveVersion[];
}

export interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource<MoveLearnMethod>;
  version_group: NamedAPIResource<VersionGroup>;
  level_learned_at: number;
}

export interface PokemonStat {
  stat: NamedAPIResource<Stat>;
  effort: number;
  base_stat: number;
}

export interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export interface PokemonAbility {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource<Ability>;
}
