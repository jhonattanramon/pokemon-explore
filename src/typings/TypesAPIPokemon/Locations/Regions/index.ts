import { Generation } from "../../Games/Generations";
import { Pokedex } from "../../Games/pokedexes";
import { VersionGroup } from "../../Games/versionGroups";
import { Name, NamedAPIResource } from "../../Utility";

export interface Region {
    id: number;
    locations: NamedAPIResource<Location>[];
    name: string;
    names: Name[];
    main_generation: NamedAPIResource<Generation>;
    pokedexes: NamedAPIResource<Pokedex>[];
    version_groups: NamedAPIResource<VersionGroup>[];
  }