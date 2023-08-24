import { Region } from "../../Locations/Regions";
import { MoveLearnMethod } from "../../Moves/MoveLearnMethods";
import { NamedAPIResource } from "../../Utility";
import { Generation } from "../Generations";
import { Pokedex } from "../pokedexes";
import { Version } from "../version";

export interface VersionGroup {
    id: number;
    name: string;
    order: number;
    generation: NamedAPIResource<Generation>;
    move_learn_methods: NamedAPIResource<MoveLearnMethod>[];
    pokedexes: NamedAPIResource<Pokedex>[];
    regions: NamedAPIResource<Region>[];
    versions: NamedAPIResource<Version>[];
  }