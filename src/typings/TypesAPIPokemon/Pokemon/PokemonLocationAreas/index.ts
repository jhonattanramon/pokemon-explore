import { LocationArea } from "../../Locations/LocationAreas";
import { NamedAPIResource, VersionEncounterDetail } from "../../Utility";

export interface LocationAreaEncounter {
    location_area: NamedAPIResource<LocationArea>;
    version_details: VersionEncounterDetail[];
  }