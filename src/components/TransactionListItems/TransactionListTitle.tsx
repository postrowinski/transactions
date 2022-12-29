import React from "react";
import { theme } from "antd";

import "./styles.scss";

export const TransactionListTitle: React.FC = () => {
  const { token } = theme.useToken();
  return (
    <div
      className="transaction-list-title"
      style={{ backgroundColor: token.colorPrimary }}
    >
      <div className="transaction-list-row__left-side">
        <div className="transaction-list-row__date">Date</div>
        <div className="transaction-list-row__description">Description</div>
      </div>
      <div className="transaction-list-row__right-side">
        <div className="transaction-list-row__beneficiary">Beneficiary</div>
        <div className="transaction-list-row__amount">Amount</div>
        <div className="transaction-list-row__delete"></div>
      </div>
    </div>
  );
};
