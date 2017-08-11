
import { EntryStatusEnum } from "app/calculations/calculations-entry/calculations-edit/enums";

export class Parenteral {
  id: number;
  calEntryId: number;
  dextrose: number;
  amino: number;
  lipid: number;
  volume: number;
  type: string;
  isNew: boolean;
  displayId: number;
  displayName: string;
  status: EntryStatusEnum;  
}