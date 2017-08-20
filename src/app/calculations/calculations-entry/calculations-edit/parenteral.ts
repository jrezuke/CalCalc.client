
import { EntryStatusEnum } from "app/calculations/calculations-entry/calculations-edit/entryStatusEnum";

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
  previousStatus: EntryStatusEnum; 
}