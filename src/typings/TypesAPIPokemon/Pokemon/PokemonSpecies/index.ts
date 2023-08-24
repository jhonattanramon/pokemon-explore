import { EvolutionChain } from "../../Evolution/EvolutionChains";
import { Generation } from "../../Games/Generations";
import { Pokedex } from "../../Games/pokedexes";
import { PalParkArea } from "../../Locations/PalParkAreas";
import { APIResource, Description, FlavorText, Language, Name, NamedAPIResource } from "../../Utility";
import { EggGroup } from "../EggGroup";
import { GrowthRate } from "../GrowthRates";
import { Pokemon } from "../Pokemon";
import { PokemonColor } from "../PokemonColor";
import { PokemonHabitat } from "../PokemonHabitats";
import { PokemonShape } from "../PokemonShapes";

export interface PokemonSpecies {
    id: number;
    name: string;
    order: number;
    gender_rate: number;
    capture_rate: number;
    base_happiness: number;
    is_baby: boolean;
    is_legendary: boolean;
    is_mythical: boolean;
    hatch_counter: number;
    has_gender_differences: boolean;
    forms_switchable: boolean;
    growth_rate: NamedAPIResource<GrowthRate>;
    pokedex_numbers: PokemonSpeciesDexEntry[];
    egg_groups: NamedAPIResource<EggGroup>[];
    color: NamedAPIResource<PokemonColor>;
    shape: NamedAPIResource<PokemonShape>;
    evolves_from_species: NamedAPIResource<PokemonSpecies>;
    evolution_chain: APIResource<EvolutionChain>;
    habitat: NamedAPIResource<PokemonHabitat>;
    generation: NamedAPIResource<Generation>;
    names: Name[];
    pal_park_encounters: PalParkEncounterArea[];
    flavor_text_entries: FlavorText[];
    form_descriptions: Description[];
    genera: Genus[];
    varieties: PokemonSpeciesVariety[];
  }
  
  export interface Genus {
    genus: string;
    language: NamedAPIResource<Language>;
  }

 export interface PokemonSpeciesDexEntry {
    entry_number: number;
    pokedex: NamedAPIResource<Pokedex>;
  }
  
 export interface PalParkEncounterArea {
    base_score: number;
    rate: number;
    area: NamedAPIResource<PalParkArea>;
  }
  export interface PokemonSpeciesVariety {
    is_default: boolean;
    pokemon: NamedAPIResource<Pokemon>;
  }
  
  
  
  
  
  
  
  
  