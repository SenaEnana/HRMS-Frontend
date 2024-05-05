import * as Yup from "yup";

export const complaintValidation = Yup.object().shape({
    Name:Yup.string().required("this field is required"),
    Emp_Id:Yup.string().required("this field is required"),
    PositionId:Yup.string().required("this field is required"),
    BranchId:Yup.string().required("this field is required"),
    DateOfEvent:Yup.date().required("this field is required"),
    Incident:Yup.string().required("this field is required"),
    Remedy:Yup.string().required("this field is required"),
});