import { Description, NamedAPIResource } from "../../Utility";
import { Stat } from "../stats";

export interface Characteristic{
    id: number;
    gene_modulo: number;
    possible_values: number
    heighest_stat: NamedAPIResource<Stat>;
    descriptions: Description;
}



