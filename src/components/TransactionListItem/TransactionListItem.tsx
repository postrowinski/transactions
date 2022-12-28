import React from "react";
import { Transaction } from "../../types/types";
import { DeleteOutlined } from "@ant-design/icons";
import { format } from "date-fns";
import { Button } from "antd";

import "./styles.scss";

type Props = {
  transaction: Transaction;
};

export const TransactionListItem: React.FC<Props> = ({ transaction }) => {
  const { id, date, amount, beneficiary, description } = transaction;

  const onDeleteClick = () => {
    console.log("detete: ", id);
  };

  return (
    <li className="transaction-list-item">
      <div className="transaction-list-item__left-side">
        <div className="transaction-list-item__date">
          {format(new Date(date).valueOf(), "dd-MM-yyyy")}
        </div>
        <div className="transaction-list-item__description">{description}</div>
      </div>
      <div className="transaction-list-item__right-side">
        <div className="transaction-list-item__beneficiary">{beneficiary}</div>
        <div className="transaction-list-item__amount">{amount}</div>
        <div className="transaction-list-item__delete">
          <Button
            danger
            type="dashed"
            shape="circle"
            icon={<DeleteOutlined />}
            onClick={onDeleteClick}
          />
        </div>
      </div>
    </li>
  );
};
