export interface Dashboard {
  path?: string;
  title?: string;
  typeVacxin?: number;
  children?: OptionDashboard[] | [];
}

export interface OptionDashboard {
  title?: string;
  subTitle?: string;
  typeVacxin?: number;
  typeOption?: number;
}

export interface Filter {
  code?: number;
  title?: string;
}
