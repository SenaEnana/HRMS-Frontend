import * as Yup from "yup";

export const employeeValidation = Yup.object().shape({
   id:Yup.number().required("this field is required"),
    firstName:Yup.string().required("this field is required"),
    lastName:Yup.string().required("this field is required"),
    email:Yup.string().email().required("this field is required"),
    profilePhoto: Yup.mixed().required('file is required'),
    department:Yup.string().required("this field is required"),
    phoneNumber:Yup.number().required("this field is required"),
    branch:Yup.string().required("this field is required"),
    gender:Yup.string().required("this field is required"),
    motherName:Yup.string().required("this field is required"),
    region:Yup.string().required("this field is required"),
    kebele:Yup.string().required("this field is required"),
    wereda:Yup.string().required("this field is required"),
    houseNumber:Yup.number().required("this field is required"),
    maritalStatus:Yup.string().required("this field is required"),
    hireDate:Yup.date().required("this field is required"),
    grade:Yup.number().required("this field is required"),
    position:Yup.string().required("this field is required"),
    department:Yup.string().required("this field is required"),
    kebele:Yup.string().required("this field is required"),
    salary:Yup.number().required("this field is required"),
    education:Yup.string().required("this field is required"),
    experience:Yup.string().required("this field is required"),
    contactPerson:Yup.string().required("this field is required"),
    degree:Yup.string().required("this field is required"),
    childName:Yup.string().required("this field is required"),
    childGender:Yup.string().required("this field is required"),
    childBirthDate:Yup.date().required("this field is required"),
});