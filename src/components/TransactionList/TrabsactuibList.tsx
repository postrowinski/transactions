import { message } from "antd";
import _ from "lodash";
import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { apiService } from "../../services/ApiService";
import { Pagination } from "../Pagination/Pagination";
import { TransactionListItem } from "../TransactionListItems/TransactionListItem";
import { TransactionListTitle } from "../TransactionListItems/TransactionListTitle";

import "./styles.scss";

export const TransactionList: React.FC = () => {
  const [messageApi, contextMessageHolder] = message.useMessage();
  const {
    transactions,
    transactionsPaging,
    setTransactionsParams,
    transactionsParams,
  } = useContext(AppContext);

  useGetTransactions();

  const onDeleteClick = (id?: number) => {
    if (!_.isNil(id)) {
      apiService.deleteRequest(`/transactions/${id}`).then((res) => {
        if (res.ok) {
          setTransactionsParams({ ...transactionsParams });
          messageApi.success("Transaction deleted successfully");
        } else {
          messageApi.error("Deleted transaction failed");
        }
      });
    }
  };

  return (
    <div>
      {contextMessageHolder}
      <TransactionListTitle />
      <ul className="transaction-list">
        {transactions.map((transaction) => (
          <TransactionListItem
            key={transaction.id}
            transaction={transaction}
            onDeleteClick={onDeleteClick}
          />
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
