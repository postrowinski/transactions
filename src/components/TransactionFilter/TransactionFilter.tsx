import React, { useState } from "react";
import { Button, Input } from "antd";

export const TransactionFilter: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>("");

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const onFilterClick = () => {
    console.log(inputValue);
  };

  const onCleanFilterClick = () => {
    setInputValue("");
    console.log(inputValue);
  };

  return (
    <div>
      <Input value={inputValue} onChange={onInputChange} />
      <Button type="primary" onClick={onFilterClick}>
        Filter
      </Button>
      <Button danger type="primary" onClick={onCleanFilterClick}>
        Clean
      </Button>
    </div>
  );
};
