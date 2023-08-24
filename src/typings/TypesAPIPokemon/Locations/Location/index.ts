import { GenerationGameIndex, Name, NamedAPIResource } from "../../Utility";
import { LocationArea } from "../LocationAreas";
import { Region } from "../Regions";

export interface Location {
    id: number;
    name: string;
    region: NamedAPIResource<Region>;
    names: Name[];
    game_indices: GenerationGameIndex[];
    areas: NamedAPIResource<LocationArea>[];
  }