import { VersionGroup } from "../../Games/versionGroups";
import { Description, Name, NamedAPIResource } from "../../Utility";

export interface MoveLearnMethod {
    id: number;
    name: string;
    descriptions: Description[];
    names: Name[];
    version_groups: NamedAPIResource<VersionGroup>[];
  }
  