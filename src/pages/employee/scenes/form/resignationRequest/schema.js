import * as Yup from "yup";

export const resignationValidation = Yup.object().shape({
    name:Yup.string().required("this field is required"),
    department:Yup.string().required("this field is required"),
    hireDate:Yup.date().required("this field is required"),
    position:Yup.string().required("this field is required"),
    dutyStation:Yup.string().required("this field is required"),
    separationDate:Yup.date().required("this field is required"),
    reason:Yup.string().required("this field is required"),
    satisfaction:Yup.string().required("this field is required"),
    workRelationship:Yup.string().required("this field is required"),
    recommendation:Yup.string().required("this field is required"),
    comments:Yup.string().required("this field is required"),
});