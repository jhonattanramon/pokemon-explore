import { NamedAPIResource } from "../../Utility";

export interface NamedAPIResourceList{
    count: number;
    next: string;
    previous: string;
    results: Array<NamedAPIResource<unknown>>
}