export interface BaseModel {
  _id?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface EntitiesList<T> {
  total: number;
  entities: T[];
}
