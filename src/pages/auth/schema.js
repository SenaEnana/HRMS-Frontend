import * as Yup from "yup";

export const signInValidation = Yup.object().shape({
    empId:Yup.number().required("this field is required"),
    password:Yup.string().required("this field is required"),
});