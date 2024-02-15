export type SubmenuRequestParams = {
  firstCategory: number;
};

export interface MenuResponse {
  _id: ID;
  pages: Page[];
}

export interface ID {
  secondCategory: string;
}

export interface Page {
  alias: string;
  title: string;
  _id: string;
  category: string;
}
