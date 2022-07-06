export interface Dashboard {
  _id?: string;
  categoryName?: string;
  childrens?: Dashboard[] | [];
}

export interface Filter {
  code?: string;
  title?: string;
}

export interface QuerySearchObject {
  type?: string | null;
  categoryId?: string | null;
  search?: string | null;
}
