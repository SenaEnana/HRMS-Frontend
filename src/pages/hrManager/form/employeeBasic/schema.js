import * as Yup from "yup";

export const employeeBasValidation = Yup.object().shape({
   id:Yup.number().required("this field is required"),
    firstName:Yup.string().required("this field is required"),
    lastName:Yup.string().required("this field is required"),
    email:Yup.string().email().required("this field is required"),
    profilePhoto: Yup.mixed().required('file is required'),
    phoneNumber:Yup.number().required("this field is required"),
    gender:Yup.string().required("this field is required"),
    motherName:Yup.string().required("this field is required"),
    region:Yup.string().required("this field is required"),
    kebele:Yup.string().required("this field is required"),
    wereda:Yup.string().required("this field is required"),
    houseNumber:Yup.number().required("this field is required"),
    maritalStatus:Yup.string().required("this field is required"),
});
