import { BaseModel } from './BaseModel';

export interface CustomVaccine {
  vaccineId?: string;
  vaccineName?: string;
  source?: string;
  summary?: string;
  prevention?: string;
  injectedDate?: Date | string;
}

export interface VCSignup extends BaseModel {
  injectorId?: string;
  vcCenterId?: string;
  listVaccine?: CustomVaccine[];
  status?: string;
}
