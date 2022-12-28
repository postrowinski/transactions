import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { Pagination } from "../Pagination/Pagination";
import { TransactionListItem } from "../TransactionListItem/TransactionListItem";

import "./styles.scss";

export const TransactionList: React.FC = () => {
  const {
    transactions,
    transactionsPaging,
    setTransactionsParams,
    transactionsParams,
  } = useContext(AppContext);

  useGetTransactions();

  return (
    <div>
      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <TransactionListItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
      <Pagination
        pageSize={transactionsPaging.pageSize}
        currentPage={transactionsPaging.current}
        totalCount={transactionsPaging.total}
        onPageChange={(val) =>
          setTransactionsParams({ ...transactionsParams, pageNumber: val })
        }
      />
    </div>
  );
};
