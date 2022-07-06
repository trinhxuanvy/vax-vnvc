import { BaseModel } from './BaseModel';

export interface Vacxin extends BaseModel {
  madeIn?: string;
  price?: number;
  description?: string;
  isChoose?: boolean;
  isUpdating?: boolean;
  typeVacxin?: number;
  typeOption?: number;
  vaccineName?: string;
  categoryId?: string;
  source?: string;
  summary?: string;
  prevention?: string;
  preventionDescription?: string;
  sellType?: string;
  status?: string;
}
