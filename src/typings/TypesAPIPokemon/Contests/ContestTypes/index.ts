import { BerryFlavor } from "../../Berries/BerryFlavor";
import { Language, NamedAPIResource } from "../../Utility";

export interface ContestType {
    id: number;
    name: string;
    berry_flavor: NamedAPIResource<BerryFlavor>;
    names: ContestName;
  }

export interface ContestName {
    name: string;
    color: string;
    language: NamedAPIResource<Language>;
  }