import { Filter } from './interfaces';
import { FORMAT_VACXIN } from './enum';

export const FILTERS: Filter[] = [
  {
    code: FORMAT_VACXIN.All,
    title: 'Tất cả',
  },
  {
    code: FORMAT_VACXIN.Package,
    title: 'Vắc xin Gói',
  },
  {
    code: FORMAT_VACXIN.Simple,
    title: 'Vắc xin Lẻ',
  },
];
