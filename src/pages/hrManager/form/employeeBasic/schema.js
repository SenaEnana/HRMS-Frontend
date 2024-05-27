import * as Yup from "yup";

export const employeeBasValidation = Yup.object().shape({
  Emp_Id: Yup.string().required("This field is required"),
  FirstName: Yup.string().required("This field is required"),
  LastName: Yup.string().required("This field is required"),
  Email: Yup.string().email("Invalid email format").required("This field is required"),
  Roles: Yup.string().required("This field is required"),
  PhoneNo: Yup.string().required("This field is required"),
  Gender: Yup.string().required("This field is required"),
  MotherName: Yup.string().required("This field is required"),
  Region: Yup.string().required("This field is required"),
  Kebele: Yup.number().required("This field is required"),
  Woreda: Yup.string().required("This field is required"),
  HouseNo: Yup.string().required("This field is required"),
  MaritalStatus: Yup.string().required("This field is required"),
  BranchId: Yup.string().required("This field is required"),
  HireDate: Yup.date().required("This field is required"),
  GradeId: Yup.number().required("This field is required"),
  PositionId: Yup.string().required("This field is required"),
  DepartmentId: Yup.string().required("This field is required"),
  Salary: Yup.number().required("This field is required"),
  DegreeId: Yup.string().required("This field is required"),
  ChildInformations: Yup.array().of(
    Yup.object().shape({
      ChildName: Yup.string().optional(),
      DateOfBirth: Yup.date().optional(),
    })
  ),
  ContactPersons: Yup.array().of(
    Yup.object().shape({
      ContactPersonName: Yup.string().required("This field is required"),
      ContactPhoneNo: Yup.string().required("This field is required"),
      ContactRegion: Yup.string().required("This field is required"),
      ContactKebele: Yup.number().required("This field is required"),
      ContactWoreda: Yup.string().required("This field is required"),
      ContactHouseNo: Yup.string().required("This field is required"),
      Relationship: Yup.string().required("This field is required"),
    })
  ),
  Educations: Yup.array().of(
    Yup.object().shape({
      Institute: Yup.string().required("This field is required"),
      Degree: Yup.string().required("This field is required"),
    })
  ),
  Experiences: Yup.array().of(
    Yup.object().shape({
      CompanyName: Yup.string().required("This field is required"),
      ExperiencePosition: Yup.string().required("This field is required"),
      ExperienceStartDate: Yup.date().required("This field is required"),
      ExperienceEndDate: Yup.date().required("This field is required"),
    })
  ),
});
