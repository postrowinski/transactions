import React from "react";
import { Layout } from "antd";
import { TransactionList } from "./components/TransactionList/TrabsactuibList";
import { AppProviderWrapper } from "./context/AppContext";
import { TransactionListHeader } from "./components/TransactionListHeader/TransactionListHeader";

const { Header, Footer, Content } = Layout;

export const App: React.FC = () => {
  return (
    <AppProviderWrapper>
      <Layout style={{ minHeight: "100vh" }}>
        <Header>Header</Header>
        <Content className="container">
          <TransactionListHeader />
          <TransactionList />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </AppProviderWrapper>
  );
};
