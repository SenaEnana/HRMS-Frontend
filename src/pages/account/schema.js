import * as Yup from "yup";

export const changePasswordValidation = Yup.object().shape({
    OldPassword:Yup.string().required("this field is required"),
    NewPassword:Yup.string().required("this field is required"),
    ConfirmPassword:Yup.string().required("this field is required"),
});