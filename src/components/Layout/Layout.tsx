import React from "react";
import { Layout as AntdLayout, theme } from "antd";

import "./styles.scss";

type Props = {
  children: React.ReactNode;
};

const { Header, Footer, Content } = AntdLayout;

export const Layout: React.FC<Props> = ({ children }) => {
  const { token } = theme.useToken();
  return (
    <AntdLayout className="app-layout" style={{ minHeight: "100vh" }}>
      <Header className="app-layout__header" style={{ color: "white" }}>
        Header
      </Header>
      <Content className="app-layout__content">{children}</Content>
      <Footer
        className="app-layout__footer"
        style={{ backgroundColor: token.colorPrimary, color: "white" }}
      >
        Footer
      </Footer>
    </AntdLayout>
  );
};
