import { Description, Name, NamedAPIResource } from "../../Utility";
import { Item } from "../item";

export interface ItemAttribute {
    id: number;
    name: string;
    items: NamedAPIResource<Item>[];
    names: Name[];
    descriptions: Description[];
  }