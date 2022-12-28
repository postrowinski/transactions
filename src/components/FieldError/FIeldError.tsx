import React from "react";

import "./styles.scss";

type Props = {
  message?: string;
};

export const FieldError: React.FC<Props> = ({ message }) => {
  return <div className="field-error">{message}</div>;
};
