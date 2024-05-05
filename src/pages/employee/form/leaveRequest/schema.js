import * as Yup from "yup";

export const leaveValidation = Yup.object().shape({
    Emp_Id:Yup.string().required("this field is required"),
    StartDate:Yup.date().required("this field is required"),
    EndDate:Yup.date().required("this field is required"),
    LeaveTypeId:Yup.string().required("this field is required"),
    Reason:Yup.string().required("this field is required"),
});
