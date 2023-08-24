import { Name, NamedAPIResource } from "../../Utility";
import { ItemPocket } from "../ItemPockets";
import { Item } from "../item";

export interface ItemCategory {
    id: number;
    name: string;
    items: NamedAPIResource<Item>[];
    names: Name[];
    pocket: NamedAPIResource<ItemPocket>;
  }