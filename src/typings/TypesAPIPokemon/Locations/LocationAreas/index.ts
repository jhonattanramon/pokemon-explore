import { EncounterMethod } from "../../Encouters/EncouterMethods";
import { Version } from "../../Games/version";
import { Pokemon } from "../../Pokemon/Pokemon";
import { Name, NamedAPIResource, VersionEncounterDetail } from "../../Utility";

export interface LocationArea {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: EncounterMethodRate[];
  location: NamedAPIResource<Location>;
  names: Name[];
  pokemon_encounters: PokemonEncounter[];
}

export interface EncounterMethodRate {
  encounter_method: NamedAPIResource<EncounterMethod>;
  version_details: EncounterVersionDetails[];
}
export interface EncounterVersionDetails {
  rate: number;
  version: NamedAPIResource<Version>;
}

export interface PokemonEncounter {
  pokemon: NamedAPIResource<Pokemon>;
  version_details: VersionEncounterDetail[];
}
