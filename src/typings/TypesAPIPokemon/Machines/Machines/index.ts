import { VersionGroup } from "../../Games/versionGroups";
import { Item } from "../../Items/item";
import { Move } from "../../Moves/Move";
import { NamedAPIResource } from "../../Utility";

export interface Machine {
    id: number;
    item: NamedAPIResource<Item>;
    move: NamedAPIResource<Move>;
    version_group: NamedAPIResource<VersionGroup>;
  }