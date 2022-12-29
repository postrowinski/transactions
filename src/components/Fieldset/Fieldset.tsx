import React from "react";
import "./styles.scss";
import { theme } from "antd";

type Props = {
  label: string;
  children: React.ReactNode;
};

export const Fieldset: React.FC<Props> = ({ label, children }) => {
  const { token } = theme.useToken();
  return (
    <fieldset className="fieldset" style={{ borderColor: token.colorPrimary }}>
      <legend className="fieldset__legend">{label}</legend>
      {children}
    </fieldset>
  );
};
