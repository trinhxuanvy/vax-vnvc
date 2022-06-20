import { TYPE_VACXIN, TYPE_VACXIN_OPTION } from './enum';
import { Dashboard } from './interfaces';

export const DASHBOARD: Dashboard[] = [
  {
    path: '',
    title: 'Mua đặt giữ vắc xin theo yêu cầu',
    typeVacxin: TYPE_VACXIN.Requiment,
    children: [],
  },
  {
    path: '',
    title: 'Vắc xin cho người trưởng thành',
    typeVacxin: TYPE_VACXIN.Adult,
    children: [
      { title: 'Gói 1 - 13 mũi', typeOption: TYPE_VACXIN_OPTION.Packet_1_13 },
      { title: 'Gói 2 - 10 mũi', typeOption: TYPE_VACXIN_OPTION.Packet_2_10 },
      { title: 'Gói 3 - 13 mũi', typeOption: TYPE_VACXIN_OPTION.Packet_3_13 },
    ],
  },
  {
    path: '',
    title: 'Vắc xin cho phụ nữ chuẩn bị trước mang thai',
    typeVacxin: TYPE_VACXIN.Woman,
    children: [
      { title: 'Gói 1 - 11 mũi', typeOption: TYPE_VACXIN_OPTION.Packet_1_11 },
      { title: 'Gói 2 - 8 mũi', typeOption: TYPE_VACXIN_OPTION.Packet_2_8 },
      { title: 'Gói 3 - 11 mũi', typeOption: TYPE_VACXIN_OPTION.Packet_3_11 },
    ],
  },
  {
    path: '',
    title: 'Vắc xin cho trẻ em',
    typeVacxin: TYPE_VACXIN.Child,
    children: [
      { title: '0 - 9 tháng', typeOption: TYPE_VACXIN_OPTION.Month_0_9 },
      { title: '0 - 12 tháng', typeOption: TYPE_VACXIN_OPTION.Month_0_12 },
      { title: '0 - 24 tháng', typeOption: TYPE_VACXIN_OPTION.Month_0_24 },
    ],
  },
  {
    path: '',
    title: 'Vắc xin cho trẻ tiền học đường',
    typeVacxin: TYPE_VACXIN.PreStudent,
    children: [
      { title: '4 tuổi - 6 tuổi', typeOption: TYPE_VACXIN_OPTION.Age_4_6 },
    ],
  },
  {
    path: '',
    title: 'Vắc xin cho tuổi vị thành niên và thanh niên',
    typeVacxin: TYPE_VACXIN.Teenager,
    children: [
      { title: '9 tuổi - 18 tuổi', typeOption: TYPE_VACXIN_OPTION.Age_9_18 },
    ],
  },
];
