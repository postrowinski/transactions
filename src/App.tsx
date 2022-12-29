import React from "react";
import { ConfigProvider } from "antd";
import { TransactionList } from "./components/TransactionList/TrabsactuibList";
import { AppProviderWrapper } from "./context/AppContext";
import { TransactionListHeader } from "./components/TransactionListHeader/TransactionListHeader";
import { Layout } from "./components/Layout/Layout";

export const App: React.FC = () => {
  return (
    <AppProviderWrapper>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#BC004F",
          },
        }}
      >
        <Layout>
          <TransactionListHeader />
          <TransactionList />
        </Layout>
      </ConfigProvider>
    </AppProviderWrapper>
  );
};
