import * as Yup from "yup";

export const dropDownValidation = Yup.object().shape({
    Name:Yup.string().required("this field is required"),
});