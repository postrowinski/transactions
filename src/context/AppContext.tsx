import { createContext, useState } from "react";
import { Pageable, Transaction } from "../types/types";

type TransactionsPaging = {
  total: number;
  current: number;
  pageSize: number;
};

type AppContextProps = {
  transactions: Transaction[];
  setTransactions: (values: Transaction[]) => void;
  transactionsPaging: TransactionsPaging;
  setTransactionsPaging: (value: TransactionsPaging) => void;
  transactionsParams: Pageable;
  setTransactionsParams: (value: Pageable) => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

interface Props {
  children: React.ReactNode;
}

export const AppProviderWrapper: React.FC<Props> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [transactionsPaging, setTransactionsPaging] =
    useState<TransactionsPaging>({
      current: 0,
      pageSize: 0,
      total: 0,
    });
  const [transactionsParams, setTransactionsParams] = useState<Pageable>({});

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        transactionsPaging,
        setTransactionsPaging,
        transactionsParams,
        setTransactionsParams,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
