import { Item } from "../../Items/item";
import { Type } from "../../Pokemon/Types";
import { NamedAPIResource } from "../../Utility";
import { BerryFirmness } from "../BerryFirmnesses";
import { BerryFlavor } from "../BerryFlavor";

export interface Berry{
    id: number;
    name: string;
    growth_time: number;
    max_harvest: number;
    natural_gift_power: number;
    size: number;
    smoothness: number;
    soil_dryness: number;
    firmness: NamedAPIResource<BerryFirmness>;
    flavors: BerryFlavorMap;
    item: NamedAPIResource<Item>;
    natural_gift_type: NamedAPIResource<Type>;
}

export interface BerryFlavorMap {
    potency: number;
    flavor: NamedAPIResource<BerryFlavor>;
  }
  