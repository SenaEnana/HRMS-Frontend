import * as Yup from "yup";

export const experienceValidation = Yup.object().shape({
    companyName:Yup.string().required("this field is required"),
    position:Yup.string().required("this field is required"),
    startDate:Yup.date().required("this field is required"),
    endDate:Yup.date().required("this field is required"),
});
