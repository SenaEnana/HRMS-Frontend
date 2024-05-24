import * as Yup from "yup";

export const promotionValidation = Yup.object().shape({
  EmpId: Yup.string().required("This field is required"),
  NewGradeId: Yup.number().required("This field is required"),
  Reason: Yup.string().required("This field is required"),
  NewSalary: Yup.number().required("This field is required"),
});
