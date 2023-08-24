import { Description, NamedAPIResource } from "../../Utility";
import { PokemonSpecies } from "../PokemonSpecies";

export interface GrowthRate{
    id: number;
    name: string;
    formula: string;
    description: Description;
    levels: GrowthRateExperienceLevel;
    pokemon_species: NamedAPIResource<PokemonSpecies>;
}

export interface GrowthRateExperienceLevel{
    level: number;
    experience: number;
}