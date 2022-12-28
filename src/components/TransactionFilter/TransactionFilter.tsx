import React, { useState, useContext } from "react";
import { Input } from "antd";
import { AppContext } from "../../context/AppContext";

export const TransactionFilter: React.FC = () => {
  const { transactionsParams, setTransactionsParams } = useContext(AppContext);
  const [inputValue, setInputValue] = useState<string>("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setTransactionsParams({
      ...transactionsParams,
      pageNumber: 1,
      filters: {
        ...transactionsParams.filters,
        beneficiary_like: e.target.value,
      },
    });
  };

  return (
    <div>
      <Input value={inputValue} onChange={onInputChange} />
    </div>
  );
};
