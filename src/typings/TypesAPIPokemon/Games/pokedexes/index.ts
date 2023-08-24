import { Region } from "../../Locations/Regions";
import { PokemonSpecies } from "../../Pokemon/PokemonSpecies";
import { Description, Name, NamedAPIResource } from "../../Utility";
import { VersionGroup } from "../versionGroups";

export interface Pokedex {
    id: number;
    name: string;
    is_main_series: boolean;
    descriptions: Description[];
    names: Name[];
    pokemon_entries: PokemonEntry[];
    region: NamedAPIResource<Region>;
    version_groups: NamedAPIResource<VersionGroup>[];
  }

export interface PokemonEntry {
    entry_number: number;
    pokemon_species: NamedAPIResource<PokemonSpecies>;
  }