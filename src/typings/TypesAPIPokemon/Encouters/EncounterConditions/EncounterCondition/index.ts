import { Name, NamedAPIResource } from "../../../Utility";
import { EncounterConditionValue } from "../../EncounterConditionValue";

export interface EncounterCondition {
    id: number;
    name: string;
    names: Name[];
    values: NamedAPIResource<EncounterConditionValue>[];
  }