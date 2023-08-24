import { EvolutionChain } from "../../Evolution/EvolutionChains";
import { Version } from "../../Games/version";
import { Pokemon } from "../../Pokemon/Pokemon";
import { APIResource, GenerationGameIndex, MachineVersionDetail, Name, NamedAPIResource, VerboseEffect, VersionGroupFlavorText } from "../../Utility";
import { ItemAttribute } from "../ItemAttributes";
import { ItemCategory } from "../ItemCategories";
import { ItemFlingEffect } from "../ItemFlingEffects";

export interface Item {
    id: number;
    name: string;
    cost: number;
    fling_power: number;
    fling_effect: NamedAPIResource<ItemFlingEffect>;
    attributes: NamedAPIResource<ItemAttribute>[];
    category: NamedAPIResource<ItemCategory>;
    effect_entries: VerboseEffect[];
    flavor_text_entries: VersionGroupFlavorText[];
    game_indices: GenerationGameIndex[];
    names: Name[];
    sprites: ItemSprites;
    held_by_pokemon: ItemHolderPokemon[];
    baby_trigger_for: APIResource<EvolutionChain>;
    machines: MachineVersionDetail[];
  }
  

export interface ItemSprites {
    default: string;
  }
  

export interface ItemHolderPokemon {
    pokemon: NamedAPIResource<Pokemon>;
    version_details: ItemHolderPokemonVersionDetail[];
  }

export interface ItemHolderPokemonVersionDetail {
    rarity: number;
    version: NamedAPIResource<Version>;
  }  