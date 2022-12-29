import React from "react";
import { ConfigProvider } from "antd";
import { AppProviderWrapper } from "./context/AppContext";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/Home/HomePage";

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
          <HomePage />
        </Layout>
      </ConfigProvider>
    </AppProviderWrapper>
  );
};
