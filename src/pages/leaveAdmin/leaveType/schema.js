import * as Yup from "yup";

export const leaveTypeValidation = Yup.object().shape({
    Name:Yup.string().required("this field is required"),
    AllowedDays: Yup.number().required("this field is required"),
});