import { Name, NamedAPIResource } from "../../Utility";
import { VersionGroup } from "../versionGroups";

export interface Version {
    id: number;
    name: string;
    names: Name[];
    version_group: NamedAPIResource<VersionGroup>;
  }
  