import { ContestType } from "../../Contests/ContestTypes";
import { Name, NamedAPIResource } from "../../Utility";
import { Berry } from "../Berries";

export interface BerryFlavor {
    id: number;
    name: string;
    berries: FlavorBerryMap;
    contest_type: NamedAPIResource<ContestType>;
    names: Name;
  }

export interface FlavorBerryMap {
    potency: number;
    berry: NamedAPIResource<Berry>;
  }  