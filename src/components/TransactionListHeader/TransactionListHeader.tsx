import React from "react";
import { TransactionBalance } from "../TransactionBalance/TransactionBalance";
import { TransactionFilter } from "../TransactionFilter/TransactionFilter";
import { TransactionForm } from "../TransactionForm/TransactionForm";

import "./styles.scss";

export const TransactionListHeader: React.FC = () => {
  return (
    <div className="transaction-list-header">
      <div className="transaction-list-header__balance-and-filter-side">
        <TransactionBalance />
        <TransactionFilter />
      </div>
      <div className="transaction-list-header__form-side">
        <TransactionForm />
      </div>
    </div>
  );
};
