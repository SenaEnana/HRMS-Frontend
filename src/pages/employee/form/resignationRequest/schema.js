import * as Yup from "yup";

export const resignationValidation = Yup.object().shape({
    Emp_Id:Yup.string().required("this field is required"),
    FullName:Yup.string().required("this field is required"),
    DepartmentId:Yup.string().required("this field is required"),
    PositionId:Yup.string().required("this field is required"),
    EmployeeHireDate:Yup.date().required("this field is required"),
    SeparationDate:Yup.date().required("this field is required"),
    Reason:Yup.string().required("this field is required"),
    Satisfaction:Yup.string().required("this field is required"),
    EmployeeRelationship:Yup.string().required("this field is required"),
    Recommendation:Yup.string().required("this field is required"),
    Comment:Yup.string().required("this field is required"),
});