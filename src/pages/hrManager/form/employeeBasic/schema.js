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
    // experiance schema
    companyName:Yup.string().required("this field is required"),
    role:Yup.string().required("this field is required"),
    startDate:Yup.date().required("this field is required"),
    endDate:Yup.date().required("this field is required"),
// additional information schema
    branch:Yup.string().required("this field is required"),
    hireDate:Yup.date().required("this field is required"),
    grade:Yup.number().required("this field is required"),
    position:Yup.string().required("this field is required"),
    department:Yup.string().required("this field is required"),
    salary:Yup.number().required("this field is required"),
    degree:Yup.string().required("this field is required"),
// contact person schema
    contactName:Yup.string().required("this field is required"),
    contactPhoneNumber:Yup.number().required("this field is required"),
    contactRegion:Yup.string().required("this field is required"),
    contactKebele:Yup.string().required("this field is required"),
    contactWereda:Yup.string().required("this field is required"),
    contactHouseNumber:Yup.number().required("this field is required"),
    relationship:Yup.string().required("this field is required"),
// child schema
    childName:Yup.string().required("this field is required"),
    childBirthDate:Yup.date().required("this field is required"),
// education schema
    institution:Yup.string().required("this field is required"),
    educationDegree:Yup.string().required("this field is required"),
});
