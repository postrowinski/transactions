import React, { useEffect, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { apiService } from "../../services/Api/ApiService";
import { Transaction } from "../../types/types";
import { TransactionListItem } from "../TransactionListItem/TransactionListItem";

import "./styles.scss";

export const TransactionList: React.FC = () => {
  const { transactions, setTransactions } = useContext(AppContext);

  useEffect(() => {
    apiService
      .getRequest("/transactions?_limit=2&_page=2")
      .then((res: Response) => {
        res.json().then((trans: Transaction[]) => setTransactions(trans));
      });
  }, []);

  return (
    <ul className="transaction-list">
      {transactions.map((transaction) => (
        <TransactionListItem key={transaction.id} transaction={transaction} />
      ))}
    </ul>
  );
};
