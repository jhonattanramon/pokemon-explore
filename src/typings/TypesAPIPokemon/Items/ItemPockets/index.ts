import { Name, NamedAPIResource } from "../../Utility";
import { ItemCategory } from "../ItemCategories";

export interface ItemPocket {
    id: number;
    name: string;
    categories: NamedAPIResource<ItemCategory>[];
    names: Name[];
  }