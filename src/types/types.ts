export type Transaction = {
  id?: number;
  amount: number;
  beneficiary: string;
  //TODO: add PL at front
  account: number;
  address: string;
  date: string;
  description: string;
};
