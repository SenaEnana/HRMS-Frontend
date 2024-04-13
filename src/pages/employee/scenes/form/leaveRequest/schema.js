import * as Yup from "yup";

export const leaveValidation = Yup.object().shape({
    date:Yup.date().required("this field is required"),
    name:Yup.string().required("this field is required"),
    idNo:Yup.number().required("this field is required"),
    department:Yup.string().required("this field is required"),
    branch:Yup.string().required("this field is required"),
    jobTitle:Yup.string().required("this field is required"),
    leaveRequested:Yup.number().required("this field is required"),
    leaveType:Yup.string().required("this field is required"),
    placeDuringLeave:Yup.string().required("this field is required"),
    phoneNumber:Yup.number().required("this field is required"),
    email:Yup.string().required("this field is required"),
});
