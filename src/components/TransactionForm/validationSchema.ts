import * as Yup from "yup";

export const transactionFormValidationSchema = Yup.object({
  account: Yup.number().required().positive(),
  amount: Yup.number().required().positive(),
  beneficiary: Yup.string().required(),
});
