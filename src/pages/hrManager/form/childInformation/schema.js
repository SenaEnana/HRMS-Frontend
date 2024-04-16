import * as Yup from "yup";

export const childInfoValidation = Yup.object().shape({
    childName:Yup.string().required("this field is required"),
    childGender:Yup.string().required("this field is required"),
    childBirthDate:Yup.date().required("this field is required"),
});
