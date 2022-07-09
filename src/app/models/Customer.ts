import { BaseModel } from './BaseModel';

export interface Customer extends BaseModel {
  name?: string;
  phone?: string;
  email?: string;
  identity?: string;
  province?: string;
  district?: string;
  commute?: string;
  address?: string;
  code?: string;
}
