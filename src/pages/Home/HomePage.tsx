import React from "react";
import { TransactionList } from "../../components/TransactionList/TrabsactuibList";
import { TransactionListHeader } from "../../components/TransactionListHeader/TransactionListHeader";

export const HomePage: React.FC = () => {
  return (
    <>
      <TransactionListHeader />
      <TransactionList />
    </>
  );
};
