import { Name, NamedAPIResource } from "../../Utility";
import { EncounterCondition } from "../EncounterConditions/EncounterCondition";

export interface EncounterConditionValue {
    id: number;
    name: string;
    condition: NamedAPIResource<EncounterCondition>;
    names: Name[];
  }