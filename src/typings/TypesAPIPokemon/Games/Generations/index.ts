import { Region } from "../../Locations/Regions";
import { Ability } from "../../Pokemon/Ability";
import { Name, NamedAPIResource } from "../../Utility";
import { Move } from "../../Moves/Move";
import { Type } from "../../Pokemon/Types";
import { VersionGroup } from "../versionGroups";
import { PokemonSpecies } from "../../Pokemon/PokemonSpecies";

export interface Generation {
    id: number;
    name: string;
    abilities: NamedAPIResource<Ability>[];
    names: Name[];
    main_region: NamedAPIResource<Region>;
    moves: NamedAPIResource<Move>[];
    pokemon_species: NamedAPIResource<PokemonSpecies>[];
    types: NamedAPIResource<Type>[];
    version_groups: NamedAPIResource<VersionGroup>[];
  }