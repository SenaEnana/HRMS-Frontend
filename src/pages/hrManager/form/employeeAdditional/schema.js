import * as Yup from "yup";

export const employeeAddValidation = Yup.object().shape({
    branch:Yup.string().required("this field is required"),
    hireDate:Yup.date().required("this field is required"),
    grade:Yup.number().required("this field is required"),
    position:Yup.string().required("this field is required"),
    department:Yup.string().required("this field is required"),
    salary:Yup.number().required("this field is required"),
    degree:Yup.string().required("this field is required"),
    childName:Yup.string().required("this field is required"),
});
