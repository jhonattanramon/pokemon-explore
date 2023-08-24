import { Generation } from "../../Games/Generations";
import { VersionGroup } from "../../Games/versionGroups";
import { Effect, Language, Name, NamedAPIResource, VerboseEffect } from "../../Utility";
import { Pokemon } from "../Pokemon";
 
export interface AbilityEffectChange{
    effect_entries: Effect;
    version_group: NamedAPIResource<VersionGroup>;
}

export interface AbilityFlavorText{
    flavor_text: string;
    language: NamedAPIResource<Language>;
    version_group: NamedAPIResource<VersionGroup>;
}

export interface AbilityPokemon{
    is_hidden: boolean;
    slot: number;
    pokemon: NamedAPIResource<Pokemon>
}

export interface Ability{
    id: number;
    name: string;
    is_main_series: boolean;
    generation: NamedAPIResource<Generation>;
    names: Name;
    effect_entries: VerboseEffect;
    effect_changes: AbilityEffectChange;
    flavor_text_entries: AbilityFlavorText;
    pokemon: AbilityPokemon 
}