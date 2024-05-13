import * as Yup from "yup";

export const dropDownValidation = Yup.object().shape({
    Name:Yup.string().required("this field is required"),
    Description:Yup.string().required("this field is required"),
    Salary: Yup.number().required("this field is required"),
});