import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import TextInput from "../../../../components/textInput";
import DropDown from "../../../../components/DropDown";
import { useNavigate } from "react-router-dom";
import { employeeBasValidation } from "./schema";
import RadioButton from "../../../../components/radioButton";

function EmployeeBasic() {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [inputFields, setInputFields] = useState([{ value: "" }]);
  const [PositionId, setPositionId] = useState([{ name: "", id: "" }]);
  const [BranchId, setBranchId] = useState([{ name: "", id: "" }]);
  const [DepartmentId, setDepartmentId] = useState([{ name: "", id: "" }]);
  const [DegreeId, setDegreeId] = useState([{ name: "", id: "" }]);
  const [GradeId, setGradeId] = useState([{ name: "", id: "" }]);
  const [loading, setLoading] = useState(true);

  const genderOptions = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
  ];
  const maritalStatusOptions = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
    { value: "divorced", label: "Divorced" },
    { value: "widowed", label: "Widowed" },
  ];
  const roleOptions = [
    { value: "Employee", label: "Employee" },
    { value: "Admin", label: "Admin" },
    { value: "CEO", label: "CEO" },
    { value: "HR Manager", label: "HR Manager" },
    { value: "Leave Admin", label: "Leave Admin" },
    { value: "Immediate Supervisor", label: "Immediate Supervisor" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5100/Branch/GetBranches");
      const newData = await response.json();
      setBranchId(newData);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5100/api/Degree");
      const newData = await response.json();
      setDegreeId(newData);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:5100/Department/GetDepartments"
      );
      const newData = await response.json();
      setDepartmentId(newData);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5100/Position");
      const newData = await response.json();
      setPositionId(newData);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5100/Grade/GetGrades");
      const newData = await response.json();
      setGradeId(newData);
      setLoading(false);
    };
    fetchData();
  }, []);

  async function userRegistration(values) {
    try {
      const response = await fetch(
        "http://localhost:5100/Employee/CorrectRegisterEmployee",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (response.ok) {
        console.log("successful");
        navigate("/employeeList");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.error("Error registering employee:", error.message);
    }
  }

  const handleInputChange = (id, event) => {
    const updatedFields = inputFields.map((field) => {
      if (field.id === id) {
        return { ...field, value: event.target.value };
      }
      return field;
    });
    setInputFields(updatedFields);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="row justify-content-center m-5">
      <Formik
        initialValues={{
          Emp_Id: "",
          FirstName: "",
          LastName: "",
          Email: "",
          Gender: "Female",
          Roles: "Employee",
          MotherName: "",
          Region: "",
          Kebele: "",
          Woreda: "",
          PhoneNo: "",
          MaritalStatus: "Single",
          HouseNo: "",
          ChildInformations: [{ ChildName: "", DateOfBirth: "" }],
          HireDate: "",
          GradeId: "",
          PositionId: "",
          DepartmentId: "",
          Salary: "",
          BranchId: "",
          DegreeId: "",
          ContactPersons: [
            {
              ContactPersonName: "",
              Relationship: "",
              ContactRegion: "",
              ContactKebele: "",
              ContactWoreda: "",
              ContactPhoneNo: "",
              ContactHouseNo: "",
            },
          ],
          Educations: [{ Degree: "", Institute: "" }],
          Experiences: [
            {
              CompanyName: "",
              ExperiencePosition: "",
              ExperienceStartDate: "",
              ExperienceEndDate: "",
            },
          ],
        }}
        validationSchema={employeeBasValidation}
        onSubmit={(values) => {
          values.ChildInformations = values.ChildInformations.filter(
            (child) => child.ChildName !== "" || child.DateOfBirth !== ""
          );
          values.ContactPersons = values.ContactPersons.filter(
            (contact) =>
              contact.ContactPersonName !== "" ||
              contact.Relationship !== "" ||
              contact.ContactPhoneNo !== ""
          );
          values.Educations = values.Educations.filter(
            (education) => education.Degree !== "" || education.Institute !== ""
          );
          values.Experiences = values.Experiences.filter(
            (experience) =>
              experience.CompanyName !== "" ||
              experience.ExperiencePosition !== "" ||
              experience.ExperienceStartDate !== "" ||
              experience.ExperienceEndDate !== ""
          );
          userRegistration(values);
          console.log(values);
        }}
      >
        {(formikProps) => (
          <form className="form-group rounded border col-14 ms-5 ms-4 bg-light">
            <div className="ms-3">
              <p className="fs-4 text-dark text-center fw-bold">
                Employee Basic Information
              </p>
            </div>
            <Box
              display="grid"
              gridTemplateColumns="repeat(2, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextInput
                type="text"
                name="Emp_Id"
                label="Employee Id"
                placeholder="enter id number"
                value={formikProps.values.Emp_Id}
                error={formikProps.errors.Emp_Id}
                onChange={formikProps.handleChange}
              />
              <TextInput
                type="text"
                name="FirstName"
                label="First Name"
                placeholder="enter first name"
                value={formikProps.values.FirstName}
                error={formikProps.errors.FirstName}
                onChange={formikProps.handleChange}
              />
              <TextInput
                type="text"
                name="LastName"
                label="Last Name"
                placeholder="enter last name"
                value={formikProps.values.LastName}
                error={formikProps.errors.LastName}
                onChange={formikProps.handleChange}
              />
              <TextInput
                type="text"
                name="Email"
                label="Email"
                placeholder="enter email"
                value={formikProps.values.Email}
                error={formikProps.errors.Email}
                onChange={formikProps.handleChange}
              />
              <div>
                <RadioButton
                  title="Gender"
                  options={genderOptions}
                  value={formikProps.values.Gender}
                  onChange={(value) =>
                    formikProps.setFieldValue("Gender", value)
                  }
                />
              </div>
              <div className="col-12 row">
                <div>
                  <label
                    className="text-dark float-start mt-1 p-1 fs-5"
                    htmlFor="roleOptions"
                  >
                    Roles
                  </label>
                </div>
                <select
                  id="roleOptions"
                  name="Roles"
                  className="form-control mb-3"
                  value={formikProps.values.Roles}
                  onChange={(event) => {
                    formikProps.setFieldValue("Roles", event.target.value);
                  }}
                >
                  {roleOptions.map((role) => (
                    <option key={role.value} value={role.value}>
                      {role.label}
                    </option>
                  ))}
                </select>
                {formikProps.values.Roles && (
                  <p>Selected option: {formikProps.values.Roles}</p>
                )}
              </div>
              <TextInput
                type="text"
                name="MotherName"
                label="Mother Name"
                placeholder="enter mother name"
                value={formikProps.values.MotherName}
                error={formikProps.errors.MotherName}
                onChange={formikProps.handleChange}
              />
              <TextInput
                type="text"
                name="Region"
                label="Region"
                placeholder="enter region"
                value={formikProps.values.Region}
                error={formikProps.errors.Region}
                onChange={formikProps.handleChange}
              />
              <TextInput
                type="text"
                name="Woreda"
                label="Woreda"
                placeholder="enter woreda"
                value={formikProps.values.Woreda}
                error={formikProps.errors.Woreda}
                onChange={formikProps.handleChange}
              />
              <TextInput
                type="number"
                name="Kebele"
                label="Kebele"
                placeholder="enter kebele"
                value={formikProps.values.Kebele}
                error={formikProps.errors.Kebele}
                onChange={formikProps.handleChange}
              />
              <TextInput
                type="text"
                name="HouseNo"
                label="House Number"
                placeholder="enter house Number"
                value={formikProps.values.HouseNo}
                error={formikProps.errors.HouseNo}
                onChange={formikProps.handleChange}
              />
              <TextInput
                type="text"
                name="PhoneNo"
                label="Phone Number"
                placeholder="enter phone number"
                value={formikProps.values.PhoneNo}
                error={formikProps.errors.PhoneNo}
                onChange={formikProps.handleChange}
              />
              <div>
                <RadioButton
                  title="Marital Status"
                  options={maritalStatusOptions}
                  value={formikProps.values.MaritalStatus}
                  onChange={(value) =>
                    formikProps.setFieldValue("MaritalStatus", value)
                  }
                />
              </div>
            </Box>
            <p className="fs-4 text-dark text-center fw-bold">
              Contact Person Information
            </p>
            {formikProps.values.ContactPersons.map(
              (contactPerson, outerIndex) => (
                <div key={outerIndex}>
                  <Box
                    display="grid"
                    gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                    sx={{
                      "& > div": {
                        gridColumn: isNonMobile ? undefined : "span 4",
                      },
                    }}
                  >
                    <TextInput
                      type="text"
                      name={`ContactPersons[${outerIndex}].ContactPersonName`}
                      label="Contact Person Name"
                      placeholder="Enter contact person name"
                      value={contactPerson.ContactPersonName}
                      error={
                        formikProps.errors.ContactPersons?.[outerIndex]
                          ?.ContactPersonName
                      }
                      onChange={formikProps.handleChange}
                    />
                    <TextInput
                      type="text"
                      name={`ContactPersons[${outerIndex}].Relationship`}
                      label="Relationship"
                      placeholder="Enter relationship"
                      value={contactPerson.Relationship}
                      error={
                        formikProps.errors.ContactPersons?.[outerIndex]
                          ?.Relationship
                      }
                      onChange={formikProps.handleChange}
                    />
                    <TextInput
                      type="text"
                      name={`ContactPersons[${outerIndex}].ContactRegion`}
                      label="Contact Person Region"
                      placeholder="Enter contact person region"
                      value={contactPerson.ContactRegion}
                      error={
                        formikProps.errors.ContactPersons?.[outerIndex]
                          ?.ContactRegion
                      }
                      onChange={formikProps.handleChange}
                    />
                    <TextInput
                      type="text"
                      name={`ContactPersons[${outerIndex}].ContactWoreda`}
                      label="Contact Person Woreda"
                      placeholder="Enter contact person woreda"
                      value={contactPerson.ContactWoreda}
                      error={
                        formikProps.errors.ContactPersons?.[outerIndex]
                          ?.ContactWoreda
                      }
                      onChange={formikProps.handleChange}
                    />
                    <TextInput
                      type="number"
                      name={`ContactPersons[${outerIndex}].ContactKebele`}
                      label="Contact Person Kebele"
                      placeholder="Enter contact person kebele"
                      value={contactPerson.ContactKebele}
                      error={
                        formikProps.errors.ContactPersons?.[outerIndex]
                          ?.ContactKebele
                      }
                      onChange={formikProps.handleChange}
                    />
                    <TextInput
                      type="text"
                      name={`ContactPersons[${outerIndex}].ContactHouseNo`}
                      label="Contact Person House Number"
                      placeholder="Enter contact person house number"
                      value={contactPerson.ContactHouseNo}
                      error={
                        formikProps.errors.ContactPersons?.[outerIndex]
                          ?.ContactHouseNo
                      }
                      onChange={formikProps.handleChange}
                    />
                    <TextInput
                      type="text"
                      name={`ContactPersons[${outerIndex}].ContactPhoneNo`}
                      label="Contact Person Phone Number"
                      placeholder="Enter contact person phone number"
                      value={contactPerson.ContactPhoneNo}
                      error={
                        formikProps.errors.ContactPersons?.[outerIndex]
                          ?.ContactPhoneNo
                      }
                      onChange={formikProps.handleChange}
                    />
                  </Box>
                </div>
              )
            )}
            <div>
            <p className="mb-3 text-xl text-dark text-center fw-bold">
              Children information <p className="text-muted">(Optional)</p>
            </p>
            {formikProps.values.ChildInformations.map((child, outerIndex) => (
              <div key={outerIndex}>
                <TextInput
                  type="text"
                  name={`ChildInformations[${outerIndex}].ChildName`}
                  label="Child Name"
                  placeholder="Enter child name"
                  value={child.ChildName}
                  onChange={formikProps.handleChange}
                />
                <TextInput
                  type="date"
                  name={`ChildInformations[${outerIndex}].DateOfBirth`}
                  label="Child Birth Date"
                  placeholder="Enter child birth date"
                  value={child.DateOfBirth}
                  onChange={formikProps.handleChange}
                />
              </div>
            ))}
          </div>
            <p className=" pr-64 mb-3 font-bold text-xl -mt-2 fs-4 text-dark text-center fw-bold">
              {" "}
              Educations:{" "}
            </p>
            {formikProps.values.Educations.map((education, index) => (
              <div key={index}>
                <TextInput
                  type="text"
                  name={`Educations[${index}].Degree`}
                  label="Degree"
                  placeholder="Enter degree name"
                  value={education.Degree}
                  error={formikProps.errors.Educations?.[index]?.Degree}
                  onChange={(event) => {
                    formikProps.handleChange(event);
                    handleInputChange(index, event);
                  }}
                />
                <TextInput
                  type="text"
                  name={`Educations[${index}].Institute`}
                  label="Institute"
                  placeholder="Enter institute or company name"
                  value={education.Institute}
                  error={formikProps.errors.Educations?.[index]?.Institute}
                  onChange={(event) => {
                    formikProps.handleChange(event);
                    handleInputChange(index, event);
                  }}
                />
              </div>
            ))}
            <p className="fs-4 text-dark text-center fw-bold">
              Employee Experience Information
            </p>
            {formikProps.values.Experiences.map((experience, index) => (
              <div key={index}>
                <TextInput
                  type="text"
                  name={`Experiences[${index}].CompanyName`}
                  label="Company Name"
                  placeholder="Enter company name"
                  value={experience.CompanyName}
                  error={formikProps.errors.Experiences?.[index]?.CompanyName}
                  onChange={(event) => {
                    formikProps.handleChange(event);
                    handleInputChange(index, event);
                  }}
                />
                <TextInput
                  type="text"
                  name={`Experiences[${index}].ExperiencePosition`}
                  label="Position"
                  placeholder="Enter position"
                  value={experience.ExperiencePosition}
                  error={
                    formikProps.errors.Experiences?.[index]?.ExperiencePosition
                  }
                  onChange={(event) => {
                    formikProps.handleChange(event);
                    handleInputChange(index, event);
                  }}
                />
                <TextInput
                  type="date"
                  name={`Experiences[${index}].ExperienceStartDate`}
                  label="Start Date"
                  placeholder="Enter start date"
                  value={experience.ExperienceStartDate}
                  error={
                    formikProps.errors.Experiences?.[index]?.ExperienceStartDate
                  }
                  onChange={(event) => {
                    formikProps.handleChange(event);
                    handleInputChange(index, event);
                  }}
                />
                <TextInput
                  type="date"
                  name={`Experiences[${index}].ExperienceEndDate`}
                  label="End Date"
                  placeholder="Enter end date"
                  value={experience.ExperienceEndDate}
                  error={
                    formikProps.errors.Experiences?.[index]?.ExperienceEndDate
                  }
                  onChange={(event) => {
                    formikProps.handleChange(event);
                    handleInputChange(index, event);
                  }}
                />
              </div>
            ))}
            <p className="fs-4 text-dark text-center fw-bold">
              {" "}
              Employee Additional information{" "}
            </p>
            <Box
              display="grid"
              gridTemplateColumns="repeat(2, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextInput
                type="date"
                name="HireDate"
                label="Hire Date"
                placeholder="enter hire date"
                value={formikProps.values.HireDate}
                error={formikProps.errors.HireDate}
                onChange={formikProps.handleChange}
              />
              <TextInput
                type="number"
                name="Salary"
                label="Salary"
                placeholder="enter Salary"
                value={formikProps.values.Salary}
                error={formikProps.errors.Salary}
                onChange={formikProps.handleChange}
              />

              <DropDown
                type="number"
                label="Position"
                name="PositionId"
                options={PositionId}
                value={formikProps.values.PositionId}
                error={formikProps.errors.PositionId}
                onChange={(selectedOption) => {
                  const parsedValue = parseInt(selectedOption, 10);
                  formikProps.setFieldValue("PositionId", parsedValue);
                }}
              />

              <DropDown
                type="number"
                label="Branch"
                name="BranchId"
                options={BranchId}
                value={formikProps.values.BranchId}
                error={formikProps.errors.BranchId}
                onChange={(selectedOption) => {
                  const parsedValue = parseInt(selectedOption, 10);
                  formikProps.setFieldValue("BranchId", parsedValue);
                }}
              />
              <DropDown
                type="number"
                label="Department"
                name="DepartmentId"
                options={DepartmentId}
                value={formikProps.values.DepartmentId}
                error={formikProps.errors.DepartmentId}
                onChange={(selectedOption) => {
                  const parsedValue = parseInt(selectedOption, 10);
                  formikProps.setFieldValue("DepartmentId", parsedValue);
                }}
              />
              <DropDown
                type="number"
                label="Degree"
                name="DegreeId"
                options={DegreeId}
                value={formikProps.values.DegreeId}
                error={formikProps.errors.DegreeId}
                onChange={(selectedOption) => {
                  const parsedValue = parseInt(selectedOption, 10);
                  formikProps.setFieldValue("DegreeId", parsedValue);
                }}
              />
              <DropDown
                type="number"
                label="Grade"
                name="GradeId"
                options={GradeId}
                error={formikProps.errors.GradeId}
                onChange={(selectedOption) => {
                  const parsedValue = parseInt(selectedOption, 10);
                  formikProps.setFieldValue("GradeId", parsedValue);
                }}
              />
            </Box>
            <div className="m-3">
              <input
                className="btn btn-success col-10 m-2"
                type="button"
                value="submit"
                onClick={formikProps.handleSubmit}
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default EmployeeBasic;
