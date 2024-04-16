import * as Yup from "yup";

export const contactPersonValidation = Yup.object().shape({
    name:Yup.string().required("this field is required"),
    phoneNumber:Yup.number().required("this field is required"),
    region:Yup.string().required("this field is required"),
    kebele:Yup.string().required("this field is required"),
    wereda:Yup.string().required("this field is required"),
    houseNumber:Yup.number().required("this field is required"),
    relationship:Yup.string().required("this field is required"),

});
