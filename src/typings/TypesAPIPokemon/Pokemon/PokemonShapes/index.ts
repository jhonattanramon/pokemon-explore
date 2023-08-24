import { Language, Name, NamedAPIResource } from "../../Utility";
import { PokemonSpecies } from "../PokemonSpecies";

export interface PokemonShape {
    id: number;
    name: string;
    awesome_names: AwesomeName[];
    names: Name[];
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
  }

  export interface AwesomeName {
    awesome_name: string;
    language: NamedAPIResource<Language>;
  }