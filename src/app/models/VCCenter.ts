import { BaseModel } from './BaseModel';

export interface VCCenter extends BaseModel {
  VCCenterName?: string;
  province?: string;
  district?: string;
  commute?: string;
  address?: string;
  name?: string;
}
