import * as Yup from "yup";

export const postJobValidation = Yup.object().shape({
    JobTitle:Yup.string().required("this field is required"),
    PositionId:Yup.number().required("this field is required"),
    Description:Yup.string().required("this field is required"),
    Requirements:Yup.string().required("this field is required"),
});