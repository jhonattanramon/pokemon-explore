import { PokemonSpecies } from "../../Pokemon/PokemonSpecies";
import { Name, NamedAPIResource } from "../../Utility";

export interface PalParkArea {
    id: number;
    name: string;
    names: Name[];
    pokemon_encounters: PalParkEncounterSpecies[];
  }


export interface PalParkEncounterSpecies {
    base_score: number;
    rate: number;
    pokemon_species: NamedAPIResource<PokemonSpecies>;
  }  