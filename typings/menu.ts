export type SubCategoryRequestParams = {
  firstCategory: number;
};

export interface SubCategory {
  _id: ID;
  pages: Endpoint[];
}

export interface SubCategoryExtended extends SubCategory {
  isOpen: boolean;
}

export interface ID {
  secondCategory: string;
}

export interface Endpoint {
  alias: string;
  title: string;
  _id: string;
  category: string;
}
