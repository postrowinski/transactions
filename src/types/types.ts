export type Transaction = {
  id?: number;
  amount: number;
  beneficiary: string;
  account: string;
  address: string;
  date: string;
  description: string;
};

export type Sort = {
  by: string;
  order: "asc" | "desc";
};

export type Pageable = {
  pageNumber?: number;
  sort?: Sort;
  filters?: Record<string, string>;
};
