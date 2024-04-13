import * as Yup from "yup";

export const signInValidation = Yup.object().shape({
    username:Yup.string().required("this field is required"),
    password:Yup.string().required("this field is required"),
});