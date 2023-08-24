import { VersionGroup } from "../../Games/versionGroups";
import { Name, NamedAPIResource } from "../../Utility";
import { Pokemon, PokemonFormType } from "../Pokemon";

export interface PokemonForm {
  id: number;
  name: string;
  order: number;
  form_order: number;
  is_default: boolean;
  is_battle_only: boolean;
  is_mega: boolean;
  form_name: string;
  pokemon: NamedAPIResource<Pokemon>;
  types: PokemonFormType[];
  sprites: PokemonFormSprites;
  version_group: NamedAPIResource<VersionGroup>;
  names: Name[];
  form_names: Name[];
}

export interface PokemonFormSprites {
  front_default: string;
  front_shiny: string;
  back_default: string;
  back_shiny: string;
}
