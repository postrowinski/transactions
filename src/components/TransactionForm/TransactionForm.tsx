import { Button, Input, Form, Row, Col, message } from "antd";
import { useFormik } from "formik";
import React, { useContext } from "react";
import { Transaction } from "../../types/types";
import { FieldError } from "../FieldError/FIeldError";
import { transactionFormValidationSchema } from "./validationSchema";
import { format } from "date-fns";
import { apiService } from "../../services/ApiService";
import { AppContext } from "../../context/AppContext";

export const TransactionForm: React.FC = () => {
  const { setTransactionsParams, transactionsParams } = useContext(AppContext);
  const [messageApi, contextMessageHolder] = message.useMessage();
  const formik = useFormik<Transaction>({
    validateOnChange: false,
    validateOnBlur: false,
    initialValues: {
      account: "",
      address: "",
      amount: 0,
      beneficiary: "",
      date: "",
      description: "",
    },
    validationSchema: transactionFormValidationSchema,
    onSubmit: (values: Transaction) => {
      const submitValues: Transaction = {
        ...values,
        account: `PL${values.account}`,
        date:
          format(new Date(), "yyyy-MM-dd") +
          "T" +
          format(new Date(), "HH:mm:ss"),
      };
      apiService.postRequest("/transactions", submitValues).then((res) => {
        if (res.ok) {
          formik.resetForm();
          messageApi.success("New transaction was added");
          setTransactionsParams({ ...transactionsParams });
        } else {
          messageApi.error("Adding a new transaction was failed");
        }
      });
    },
  });

  return (
    <>
      {contextMessageHolder}
      <form onSubmit={formik.handleSubmit}>
        <Row gutter={12}>
          <Col md={6} sm={12} xs={24}>
            <Form.Item
              required
              label={"Amount"}
              help={<FieldError message={formik.errors.amount} />}
            >
              <Input
                name={"amount"}
                type="number"
                value={formik.values.amount}
                onChange={formik.handleChange}
                placeholder="Amount"
              />
            </Form.Item>
          </Col>
          <Col md={6} sm={12} xs={24}>
            <Form.Item
              required
              label={"Account"}
              help={<FieldError message={formik.errors.account} />}
            >
              <Input
                name={"account"}
                type="number"
                value={formik.values.account}
                onChange={formik.handleChange}
                placeholder="account"
              />
            </Form.Item>
          </Col>
          <Col md={6} sm={12} xs={24}>
            <Form.Item
              required
              label={"Beneficiary"}
              help={<FieldError message={formik.errors.beneficiary} />}
            >
              <Input
                name={"beneficiary"}
                onChange={formik.handleChange}
                value={formik.values.beneficiary}
                placeholder="beneficiary"
              />
            </Form.Item>
          </Col>
          <Col md={6} sm={12} xs={24}>
            <Form.Item label={"Address"}>
              <Input
                name={"address"}
                value={formik.values.address}
                onChange={formik.handleChange}
                placeholder="address"
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label={"Description"}>
          <Input
            name={"description"}
            value={formik.values.description}
            onChange={formik.handleChange}
            placeholder="description"
          />
        </Form.Item>
        <Button htmlType="submit">Submit</Button>
      </form>
    </>
  );
};
