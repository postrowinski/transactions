import React, { useContext, useMemo } from "react";
import { AppContext } from "../../context/AppContext";

import "./styles.scss";

export const TransactionBalance: React.FC = () => {
  const { transactions } = useContext(AppContext);

  const balance = useMemo(() => {
    return transactions.reduce((prev, next) => prev + next.amount, 0);
  }, [transactions]);

  const balanceClassColor = useMemo(() => {
    return balance >= 0
      ? "transaction-balance--positive"
      : "transaction-balance--negative";
  }, [balance]);

  return (
    <div className={`transaction-balance ${balanceClassColor}`.trim()}>
      Balance: {`${balance.toFixed(2)}`}
    </div>
  );
};
