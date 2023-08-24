import { Name, NamedAPIResource } from "../../Utility";
import { Berry } from "../Berries";

export interface BerryFirmness {
    id: number;
    name: string;
    berries: NamedAPIResource<Berry>;
    names: Name;
  }