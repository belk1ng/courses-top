export interface PageParamsResponse {
  _id: string;
  tags: string[];
  firstCategory: number;
  secondCategory: string;
  alias: string;
  title: string;
  category: string;
  tagsTitle: string;
  metaTitle: string;
  metaDescription: string;
  advantages?: Advantage[];
  seoText?: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
  hh?: HeadHunterStatistics;
  qas: QA[];
  categoryOn: string;
  blog: Blog;
}

export interface Advantage {
  title: string;
  description: string;
  _id: string;
}

export interface Blog {
  h1: string;
  metaTitle: string;
  metaDescription: string;
  views: number;
  _id: string;
}

export interface HeadHunterStatistics {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
  updatedAt: Date;
  _id: string;
}

export interface QA {
  question: string;
  answer: string;
}
