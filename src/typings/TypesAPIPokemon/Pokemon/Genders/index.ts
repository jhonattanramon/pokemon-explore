import { NamedAPIResource } from "../../Utility";
import { PokemonSpecies } from "../PokemonSpecies";

export interface Gender{
    id: number;
    name: string;
    pokemon_species_details:  PokemonSpeciesGender;
    required_for_evoluttion: NamedAPIResource<PokemonSpecies>;
}

export interface PokemonSpeciesGender{
    rate: number;
    pokemon_species: NamedAPIResource<PokemonSpecies>;
}
