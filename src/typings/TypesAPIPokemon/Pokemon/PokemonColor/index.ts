import { Name, NamedAPIResource } from "../../Utility";
import { PokemonSpecies } from "../PokemonSpecies";

export interface PokemonColor {
    id: number;
    name: string;
    names: Name[];
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
  }