import React from "react";
import { Transaction } from "../../types/types";
import { DeleteOutlined } from "@ant-design/icons";
import { format } from "date-fns";
import { Button, Popconfirm } from "antd";

import "./styles.scss";

type Props = {
  transaction: Transaction;
  onDeleteClick: (id?: number) => void;
};

export const TransactionListItem: React.FC<Props> = ({
  transaction,
  onDeleteClick,
}) => {
  const { id, date, amount, beneficiary, description } = transaction;

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
          <Popconfirm
            placement="left"
            title={"Are you sure to delete this transaction?"}
            onConfirm={() => onDeleteClick(id)}
            okText="Yes"
            cancelText="No"
          >
            <Button
              danger
              type="dashed"
              shape="circle"
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
        </div>
      </div>
    </li>
  );
};
