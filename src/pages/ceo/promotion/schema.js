import * as Yup from "yup";

export const promotionValidation = Yup.object().shape({
    Emp_Id:Yup.string().required("this field is required"),
    NewGradeId:Yup.number().required("this field is required"),
    Reason:Yup.string().required("this field is required"),
    NewSalary:Yup.number().required("this field is required"),
});