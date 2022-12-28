export type Transaction = {
  id?: number;
  amount: number;
  beneficiary: string;
  account: string;
  address: string;
  date: string;
  description: string;
};

export type Pageable = {
  pageNumber?: number;
  filters?: Record<string, string>;
};
