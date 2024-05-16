import * as Yup from "yup";

export const employeeBasValidation = Yup.object().shape({
    Emp_Id:Yup.string().required("this field is required"),
    FirstName:Yup.string().required("this field is required"),
    LastName:Yup.string().required("this field is required"),
    Email:Yup.string().email().required("this field is required"),
    Roles:Yup.string().required("this field is required"),
    PhoneNo:Yup.string().required("this field is required"),
    Gender:Yup.string().required("this field is required"),
    MotherName:Yup.string().required("this field is required"),
    Region:Yup.string().required("this field is required"),
    Kebele:Yup.number().required("this field is required"),
    Woreda:Yup.string().required("this field is required"),
    HouseNo:Yup.string().required("this field is required"),
    MaritalStatus:Yup.string().required("this field is required"),
    CompanyName:Yup.string().required("this field is required"),
    ExperiencePosition:Yup.string().required("this field is required"),
    ExperienceStartDate:Yup.date().required("this field is required"),
    ExperienceEndDate:Yup.date().required("this field is required"),
    BranchId:Yup.string().required("this field is required"),
    HireDate:Yup.date().required("this field is required"),
    GradeId:Yup.number().required("this field is required"),
    PositionId:Yup.string().required("this field is required"),
    DepartmentId:Yup.string().required("this field is required"),
    Salary:Yup.number().required("this field is required"),
    DegreeId:Yup.string().required("this field is required"),
    ContactPersonName:Yup.string().required("this field is required"),
    ContactPhoneNo:Yup.string().required("this field is required"),
    ContactRegion:Yup.string().required("this field is required"),
    ContactKebele:Yup.number().required("this field is required"),
    ContactWoreda:Yup.string().required("this field is required"),
    ContactHouseNo:Yup.string().required("this field is required"),
    Relationship:Yup.string().required("this field is required"),
    ChildInformations: Yup.array().of(
        Yup.object().shape({
          ChildName: Yup.string().optional(), // Making ChildName optional
          DateOfBirth: Yup.date().optional(), // Making DateOfBirth optional
        })
      ),
    Institute:Yup.string().required("this field is required"),
    Degree:Yup.string().required("this field is required"),
});