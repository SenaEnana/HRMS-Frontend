import * as Yup from "yup";

export const educationValidation = Yup.object().shape({
    institution:Yup.string().required("this field is required"),
    degree:Yup.string().required("this field is required"),
});
