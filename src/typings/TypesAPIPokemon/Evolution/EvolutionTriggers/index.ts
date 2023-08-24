import { PokemonSpecies } from "../../Pokemon/PokemonSpecies";
import { Name, NamedAPIResource } from "../../Utility";

export interface EvolutionTrigger {
    id: number;
    name: string;
    names: Name[];
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
  }