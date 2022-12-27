import { Button, Input, Form, Row, Col } from "antd";
import { useFormik } from "formik";
import React from "react";
import { Transaction } from "../../types/types";

export const TransactionForm: React.FC = () => {
  const formik = useFormik<Transaction>({
    initialValues: {
      account: 0,
      address: "",
      amount: 0,
      beneficiary: "",
      date: "",
      description: "",
    },
    onSubmit: (values: Transaction) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Form layout="vertical">
        <Row gutter={12}>
          <Col md={6} sm={12} xs={24}>
            <Form.Item required label={"Amount"}>
              <Input
                name={"amount"}
                type="number"
                onChange={formik.handleChange}
                placeholder="Amount"
              />
            </Form.Item>
          </Col>
          <Col md={6} sm={12} xs={24}>
            <Form.Item required label={"Account"}>
              <Input
                name={"account"}
                type="number"
                onChange={formik.handleChange}
                placeholder="account"
              />
            </Form.Item>
          </Col>
          <Col md={6} sm={12} xs={24}>
            <Form.Item required label={"Beneficiary"}>
              <Input
                name={"beneficiary"}
                onChange={formik.handleChange}
                placeholder="beneficiary"
              />
            </Form.Item>
          </Col>
          <Col md={6} sm={12} xs={24}>
            <Form.Item label={"Address"}>
              <Input
                name={"address"}
                onChange={formik.handleChange}
                placeholder="address"
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label={"Description"}>
          <Input
            name={"description"}
            onChange={formik.handleChange}
            placeholder="description"
          />
        </Form.Item>
      </Form>
      <Button htmlType="submit">Submit</Button>
    </form>
  );
};
