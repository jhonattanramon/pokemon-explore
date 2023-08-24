import { EncounterConditionValue } from "../Encouters/EncounterConditionValue";
import { EncounterMethod } from "../Encouters/EncouterMethods";
import { Generation } from "../Games/Generations";
import { Version } from "../Games/version";
import { VersionGroup } from "../Games/versionGroups";
import { Machine } from "../Machines/Machines";

export interface NamedAPIResource<T>{
name: string;
url: string    
}


export interface Name{
    name: string;
    language: NamedAPIResource<Language> 
}

export interface Language{
    id: number;
    name: string;
    official: boolean;
    iso639: string;
    iso3166: string;
    names: Name
}


export interface APIResource<T> {
    url: string;
}

export interface Description{
    description: string;
    language: NamedAPIResource<Language>;
}

export interface Effect{
    effect: string;
    language: NamedAPIResource<Language>
}

export interface Encounter{
    min_level: number;
    max_level: number;
    condition_values: NamedAPIResource<EncounterConditionValue>
    chance: number;
    method: NamedAPIResource<EncounterMethod>;
}

export interface FlavorText{
    name: string
    language: NamedAPIResource<Language>;
    version: NamedAPIResource<Language>;
}

export interface GenerationGameIndex{
    game_index: number;
    generation: NamedAPIResource<Generation>;
}

export interface MachineVersionDetail{
    machine: APIResource<Machine>;
    version_group: NamedAPIResource<VersionGroup>;
}

export interface VerboseEffect{
    effect: string;
    short_effect: string;
    language: NamedAPIResource<Language>;
}

export interface VersionEncounterDetail{
    version: NamedAPIResource<Language>;
    max_chance: number;
    encounter_details: Encounter
}

export interface VersionGameIndex{
    game_index: number;
    version: NamedAPIResource<Version> ;
}



export interface VersionGroupFlavorText{
    text: string;
    language: NamedAPIResource<Language>;
    version_group: NamedAPIResource<VersionGroup>; 
}

