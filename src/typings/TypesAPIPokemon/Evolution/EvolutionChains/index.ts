import { Item } from "../../Items/item";
import { Move } from "../../Moves/Move";
import { PokemonSpecies } from "../../Pokemon/PokemonSpecies";
import { Type } from "../../Pokemon/Types";
import { NamedAPIResource } from "../../Utility";
import { EvolutionTrigger } from "../EvolutionTriggers";

export interface EvolutionChain {
    id: number;
    baby_trigger_item: NamedAPIResource<Item>;
    chain: ChainLink;
  }

export interface ChainLink {
    is_baby: boolean;
    species: NamedAPIResource<PokemonSpecies>;
    evolution_details: EvolutionDetail[];
    evolves_to: ChainLink[];
  }

export interface EvolutionDetail {
    item: NamedAPIResource<Item>;
    trigger: NamedAPIResource<EvolutionTrigger>;
    gender: number;
    held_item: NamedAPIResource<Item>;
    known_move: NamedAPIResource<Move>;
    known_move_type: NamedAPIResource<Type>;
    location: NamedAPIResource<Location>;
    min_level: number;
    min_happiness: number;
    min_beauty: number;
    min_affection: number;
    needs_overworld_rain: boolean;
    party_species: NamedAPIResource<PokemonSpecies>;
    party_type: NamedAPIResource<Type>;
    relative_physical_stats: number;
    time_of_day: string;
    trade_species: NamedAPIResource<PokemonSpecies>;
    turn_upside_down: boolean;
  }  