import * as Yup from "yup";

export const applyForJobValidation = Yup.object().shape({
    JobId:Yup.number().required("this field is required"),
});