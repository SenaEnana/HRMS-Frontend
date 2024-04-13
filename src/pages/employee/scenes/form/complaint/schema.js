import * as Yup from "yup";

export const complaintValidation = Yup.object().shape({
    name:Yup.string().required("this field is required"),
    position:Yup.string().required("this field is required"),
    branch:Yup.string().required("this field is required"),
    department:Yup.string().required("this field is required"),
    complaintEventDate:Yup.date().required("this field is required"),
    complaint:Yup.string().required("this field is required"),
    specificFacts:Yup.string().required("this field is required"),
    complaintRemedy:Yup.string().required("this field is required"),
    submissionDate:Yup.date().required("this field is required"),
});