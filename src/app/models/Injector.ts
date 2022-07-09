import { BaseModel } from './BaseModel';

export interface Injector extends BaseModel {
  name?: string;
  phone?: string;
  gender?: string;
  dateOfBirth?: string;
  provice?: string;
  district?: string;
  commute?: string;
  address?: string;
  relationship?: string;
  code?: string;
}
