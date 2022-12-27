import { createContext, useState } from "react";
import { Transaction } from "../types/types";

type AppContextProps = {
  transactions: Transaction[];
  setTransactions: (values: Transaction[]) => void;
};

export const AppContext = createContext<AppContextProps>({} as AppContextProps);

interface Props {
  children: React.ReactNode;
}

export const AppProviderWrapper: React.FC<Props> = ({ children }) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
