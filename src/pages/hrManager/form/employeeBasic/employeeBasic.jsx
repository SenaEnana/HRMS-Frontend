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

  const [selectedRoles, setSelectedRoles] = useState("");

  const Roles = [
    { label: "Employee", value: "employee" },
    { label: "Super Admin", value: "superAdmin" },
    { label: "Ceo", value: "ceo" },
    { label: "Hr Manager", value: "hrManager" },
    { label: "Leave Admin", value: "leaveAdmin" },
    { label: "Immediate Supervisor", value: "immediateSupervisor" },
  ];

  const handleChange = (event) => {
    setSelectedRoles(event.target.value);
  };
  const [inputFields, setInputFields] = useState([{ value: "" }]);
  const [PositionId, setPositionId] = useState([{ name: "", id: "" }]);
  const [BranchId, setBranchId] = useState([{ name: "", id: "" }]);
  const [DepartmentId, setDepartmentId] = useState([{ name: "", id: "" }]);
  const [DegreeId, setDegreeId] = useState([{ name: "", id: "" }]);
  const [GradeId, setGradeId] = useState([{ name: "", id: "" }]);

  const [Gender, setGender] = useState("female");
  const [MaritalStatus, setMaritalStatus] = useState("single");
  const handleGenderChange = (value) => setGender(value);
  const handleMaritalStatusChange = (value) => setMaritalStatus(value);

  const genderOptions = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
  ];
  const maritalStatusOptions = [
    { value: "single", label: "Single" },
    { value: "Hr Manager", label: "Married" },
    { value: "divorced", label: "Divorced" },
    { value: "widowed", label: "Widowed" },
  ];

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7140/Branch/GetBranches");
      const newData = await response.json();
      setBranchId(newData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7140/api/Degree");
      const newData = await response.json();
      setDegreeId(newData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://localhost:7140/Department/GetDepartments"
      );
      const newData = await response.json();
      setDepartmentId(newData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7140/Position");
      const newData = await response.json();
      setPositionId(newData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7140/Grade/GetGrades");
      const newData = await response.json();
      setGradeId(newData);
    };
    fetchData();
  }, []);

  async function userRegistration(values) {
    try {
      const response = await fetch(
        "https://localhost:7140/Employee/CorrectRegisterEmployee",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      console.log(response);
      if (response.ok) {
        console.log("successful");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.error("Error registering employee:", error.message);
    }
  }

  const handleAddField = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  const handleInputChange = (id, event) => {
    const updatedFields = inputFields.map((field) => {
      if (field.id === id) {
        return { ...field, value: event.target.value };
      }
      return field;
    });
    setInputFields(updatedFields);
  };
  const handleDeleteField = (index) => {
    const updatedFields = [...inputFields];
    updatedFields.splice(index, 1);
    setInputFields(updatedFields);
  };

  const [choice, setChoice] = useState(null);

  const handleChoiceChange = (event) => {
    setChoice(event.target.value);
  };
  const [choiceMS, setChoiceMS] = useState(null);

  const handleChoiceChangeMS = (event) => {
    setChoiceMS(event.target.value);
  };

  return (
    <div className="row justify-content-center">
      <Box className="m-2">
        <Formik
          initialValues={{
            Emp_Id: "",
            FirstName: "",
            LastName: "",
            Email: "",
            Gender: "",
            Roles: "",
            MotherName: "",
            Region: "",
            Kebele: "",
            Woreda: "",
            PhoneNo: "",
            MaritalStatus: "",
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
          onSubmit={(values) => {
            // Ensure that ChildInformations, ContactPersons, Educations, and Experiences are removed if they are empty before submitting
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
              (education) =>
                education.Degree !== "" || education.Institute !== ""
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
          {(formikValues) => (
            <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">
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
                  value={formikValues.values.Emp_Id}
                  error={formikValues.errors.Emp_Id}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="FirstName"
                  label="First Name"
                  placeholder="enter first name"
                  value={formikValues.values.FirstName}
                  error={formikValues.errors.FirstName}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="LastName"
                  label="Last Name"
                  placeholder="enter last name"
                  value={formikValues.values.LastName}
                  error={formikValues.errors.LastName}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="Email"
                  label="Email"
                  placeholder="enter email"
                  value={formikValues.values.Email}
                  error={formikValues.errors.Email}
                  onChange={formikValues.handleChange}
                />
                <div>
                  <RadioButton
                    title="Gender"
                    options={genderOptions}
                    value={formikValues.values.Gender}
                    onChange={(value) =>
                      formikValues.setFieldValue("Gender", value)
                    }
                  />
                </div>
                {/* <TextInput
                  type="text"
                  name="Roles"
                  label="Roles"
                  placeholder="enter role"
                  value={formikValues.values.Roles}
                  error={formikValues.errors.Roles}
                  onChange={formikValues.handleChange}
                /> */}
                <div className="col-12 row">
                  <div>
                    <label
                      className="text-dark float-start mt-1 p-1 fs-5"
                      htmlFor="Roles"
                    >
                      Roles
                    </label>
                  </div>
                  <select
                    id="Roles"
                    className="form-control mb-3"
                    value={selectedRoles}
                    onChange={handleChange}
                  >
                    <option value="">Select...</option>
                    {Roles.map((role) => (
                      <option key={role.value} value={role.value}>
                        {role.label}
                      </option>
                    ))}
                  </select>
                  {selectedRoles && <p>Selected option: {selectedRoles}</p>}
                </div>
                <TextInput
                  type="text"
                  name="MotherName"
                  label="Mother Name"
                  placeholder="enter mother name"
                  value={formikValues.values.MotherName}
                  error={formikValues.errors.MotherName}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="Region"
                  label="Region"
                  placeholder="enter region"
                  value={formikValues.values.Region}
                  error={formikValues.errors.Region}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="Woreda"
                  label="Woreda"
                  placeholder="enter wereda"
                  value={formikValues.values.Woreda}
                  error={formikValues.errors.Woreda}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="number"
                  name="Kebele"
                  label="Kebele"
                  placeholder="enter kebele"
                  value={formikValues.values.Kebele}
                  error={formikValues.errors.Kebele}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="HouseNo"
                  label="House Number"
                  placeholder="enter house Number"
                  value={formikValues.values.HouseNo}
                  error={formikValues.errors.HouseNo}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="PhoneNo"
                  label="Phone Number"
                  placeholder="enter phone number"
                  value={formikValues.values.PhoneNo}
                  error={formikValues.errors.PhoneNo}
                  onChange={formikValues.handleChange}
                />
                <div>
                  <RadioButton
                    title="Marital Status"
                    options={maritalStatusOptions}
                    value={formikValues.values.MaritalStatus}
                    onChange={(value) =>
                      formikValues.setFieldValue("MaritalStatus", value)
                    }
                  />
                  {/* <p>
                    Selected Marital Status: {formikValues.values.MaritalStatus}
                  </p> */}
                </div>
              </Box>

              <p className="fs-4 text-dark text-center">
                Contact Person Information
              </p>
              {formikValues.values.ContactPersons.map(
                (contactPerson, index) => (
                  <div key={index}>
                    <Box
                      display="grid"
                      gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                      sx={{
                        "& > div": {
                          gridColumn: isNonMobile ? undefined : "span 4",
                        },
                      }}
                    >
                      {/* Contact Person TextInput Fields */}
                      <TextInput
                        type="text"
                        name={`ContactPersons[${index}].ContactPersonName`}
                        label="Contact Person Name"
                        placeholder="Enter contact person name"
                        value={
                          formikValues.values.ContactPersons[index]
                            .ContactPersonName
                        }
                        error={
                          formikValues.errors.ContactPersons?.[index]
                            ?.ContactPersonName
                        }
                        onChange={formikValues.handleChange}
                      />
                      <TextInput
                        type="text"
                        name={`ContactPersons[${index}].Relationship`}
                        label="Relationship"
                        placeholder="Enter relationship"
                        value={
                          formikValues.values.ContactPersons[index].Relationship
                        }
                        error={
                          formikValues.errors.ContactPersons?.[index]
                            ?.Relationship
                        }
                        onChange={formikValues.handleChange}
                      />
                      <TextInput
                        type="text"
                        name={`ContactPersons[${index}].ContactRegion`}
                        label="Contact Person Region"
                        placeholder="Enter contact person region"
                        value={
                          formikValues.values.ContactPersons[index]
                            .ContactRegion
                        }
                        error={
                          formikValues.errors.ContactPersons?.[index]
                            ?.ContactRegion
                        }
                        onChange={formikValues.handleChange}
                      />
                      <TextInput
                        type="text"
                        name={`ContactPersons[${index}].ContactWoreda`}
                        label="Contact Person Woreda"
                        placeholder="Enter contact person wereda"
                        value={
                          formikValues.values.ContactPersons[index]
                            .ContactWoreda
                        }
                        error={
                          formikValues.errors.ContactPersons?.[index]
                            ?.ContactWoreda
                        }
                        onChange={formikValues.handleChange}
                      />
                      <TextInput
                        type="number"
                        name={`ContactPersons[${index}].ContactKebele`}
                        label="Contact Person Kebele"
                        placeholder="Enter contact person kebele"
                        value={
                          formikValues.values.ContactPersons[index]
                            .ContactKebele
                        }
                        error={
                          formikValues.errors.ContactPersons?.[index]
                            ?.ContactKebele
                        }
                        onChange={formikValues.handleChange}
                      />
                      <TextInput
                        type="text"
                        name={`ContactPersons[${index}].ContactHouseNo`}
                        label="Contact Person House Number"
                        placeholder="Enter contact person house number"
                        value={
                          formikValues.values.ContactPersons[index]
                            .ContactHouseNo
                        }
                        error={
                          formikValues.errors.ContactPersons?.[index]
                            ?.ContactHouseNo
                        }
                        onChange={formikValues.handleChange}
                      />
                      <TextInput
                        type="text"
                        name={`ContactPersons[${index}].ContactPhoneNo`}
                        label="Contact Person Phone Number"
                        placeholder="Enter contact person phone number"
                        value={
                          formikValues.values.ContactPersons[index]
                            .ContactPhoneNo
                        }
                        error={
                          formikValues.errors.ContactPersons?.[index]
                            ?.ContactPhoneNo
                        }
                        onChange={formikValues.handleChange}
                      />
                    </Box>
                    {/* Delete Button for Contact Person */}
                  </div>
                )
              )}
              {/* Add Contact Person Button */}
              <button
                onClick={handleAddField}
                className="btn btn-outline-info btn-small m-1 float-end p-1"
              >
                Add contact person
              </button>
              <div>
                <p className=" pr-64 mb-3 font-bold text-xl -mt-2 fs-4 text-dark text-center">
                  {" "}
                  Children information:{" "}
                </p>
                {formikValues.values.ChildInformations.map((child, index) => (
                  <div key={index}>
                    {/* Child TextInput Fields */}
                    <TextInput
                      type="text"
                      name={`ChildInformations[${index}].ChildName`}
                      label="Child Name"
                      placeholder="Enter child name"
                      value={
                        formikValues.values.ChildInformations[index].ChildName
                      }
                      error={
                        formikValues.errors.ChildInformations?.[index]
                          ?.ChildName
                      }
                      onChange={formikValues.handleChange}
                    />
                    <TextInput
                      type="date"
                      name={`ChildInformations[${index}].DateOfBirth`}
                      label="Child Birth Date"
                      placeholder="Enter child birth date"
                      value={
                        formikValues.values.ChildInformations[index].DateOfBirth
                      }
                      error={
                        formikValues.errors.ChildInformations?.[index]
                          ?.DateOfBirth
                      }
                      onChange={formikValues.handleChange}
                    />
                    {/* Delete Button for Child */}
                  </div>
                ))}
                {/* Add Child Button */}
                <button
                  onClick={handleAddField}
                  className="btn btn-outline-info btn-small m-1 float-end p-1"
                >
                  Add child
                </button>
              </div>
              <p className=" pr-64 mb-3 font-bold text-xl -mt-2 fs-4 text-dark text-center">
                {" "}
                Children information:{" "}
              </p>
              {formikValues.values.ChildInformations.map((child, index) => (
                <div key={index}>
                  {/* Child TextInput Fields */}
                  <TextInput
                    type="text"
                    name={`ChildInformations[${index}].ChildName`}
                    label="Child Name"
                    placeholder="Enter child name"
                    value={
                      formikValues.values.ChildInformations[index].ChildName
                    }
                    error={
                      formikValues.errors.ChildInformations?.[index]?.ChildName
                    }
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="date"
                    name={`ChildInformations[${index}].DateOfBirth`}
                    label="Child Birth Date"
                    placeholder="Enter child birth date"
                    value={
                      formikValues.values.ChildInformations[index].DateOfBirth
                    }
                    error={
                      formikValues.errors.ChildInformations?.[index]
                        ?.DateOfBirth
                    }
                    onChange={formikValues.handleChange}
                  />
                  {/* Delete Button for Child */}
                </div>
              ))}
              {/* Add Education Button */}
              <button
                onClick={handleAddField}
                className="btn btn-outline-info btn-small m-1 float-end p-1"
              >
                Add education
              </button>
              <p className="fs-4 text-dark text-center">
                Employee Experience Information
              </p>
              {formikValues.values.Experiences.map((experience, index) => (
                <div key={index}>
                  {/* Experience TextInput Fields */}
                  <TextInput
                    type="text"
                    name={`Experiences[${index}].CompanyName`}
                    label="Company Name"
                    placeholder="Enter company name"
                    value={formikValues.values.Experiences[index].CompanyName}
                    error={
                      formikValues.errors.Experiences?.[index]?.CompanyName
                    }
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name={`Experiences[${index}].ExperiencePosition`}
                    label="Position"
                    placeholder="Enter position"
                    value={
                      formikValues.values.Experiences[index].ExperiencePosition
                    }
                    error={
                      formikValues.errors.Experiences?.[index]
                        ?.ExperiencePosition
                    }
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="date"
                    name={`Experiences[${index}].ExperienceStartDate`}
                    label="Start Date"
                    placeholder="Enter start date"
                    value={
                      formikValues.values.Experiences[index].ExperienceStartDate
                    }
                    error={
                      formikValues.errors.Experiences?.[index]
                        ?.ExperienceStartDate
                    }
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="date"
                    name={`Experiences[${index}].ExperienceEndDate`}
                    label="End Date"
                    placeholder="Enter end date"
                    value={
                      formikValues.values.Experiences[index].ExperienceEndDate
                    }
                    error={
                      formikValues.errors.Experiences?.[index]
                        ?.ExperienceEndDate
                    }
                    onChange={formikValues.handleChange}
                  />
                  {/* Delete Button for Experience */}
                </div>
              ))}
              {/* Add Experience Button */}
              <button
                onClick={handleAddField}
                className="btn btn-outline-info btn-small m-1 float-end p-1"
              >
                Add experience
              </button>

              <p className="fs-4 text-dark text-center">
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
                  value={formikValues.values.HireDate}
                  error={formikValues.errors.HireDate}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="number"
                  name="Salary"
                  label="Salary"
                  placeholder="enter Salary"
                  value={formikValues.values.Salary}
                  error={formikValues.errors.Salary}
                  onChange={formikValues.handleChange}
                />

                <DropDown
                  type="number"
                  label="Grade"
                  name="GradeId"
                  options={GradeId}
                  error={formikValues.errors.GradeId}
                  onChange={(selectedOption) => {
                    const parsedValue = parseInt(selectedOption, 10);
                    formikValues.setFieldValue("GradeId", parsedValue);
                  }}
                />

                <DropDown
                  type="number"
                  label="PositionId"
                  name="PositionId"
                  options={PositionId}
                  value={formikValues.values.PositionId}
                  error={formikValues.errors.PositionId}
                  onChange={(selectedOption) => {
                    const parsedValue = parseInt(selectedOption, 10);
                    formikValues.setFieldValue("PositionId", parsedValue);
                  }}
                />

                <DropDown
                  type="number"
                  label="BranchId"
                  name="BranchId"
                  options={BranchId}
                  value={formikValues.values.BranchId}
                  error={formikValues.errors.BranchId}
                  onChange={(selectedOption) => {
                    const parsedValue = parseInt(selectedOption, 10);
                    formikValues.setFieldValue("BranchId", parsedValue);
                  }}
                />

                <DropDown
                  type="number"
                  label="DepartmentId"
                  name="DepartmentId"
                  options={DepartmentId}
                  value={formikValues.values.DepartmentId}
                  error={formikValues.errors.DepartmentId}
                  onChange={(selectedOption) => {
                    const parsedValue = parseInt(selectedOption, 10);
                    formikValues.setFieldValue("DepartmentId", parsedValue);
                  }}
                />

                <DropDown
                  type="number"
                  label="DegreeId"
                  name="DegreeId"
                  options={DegreeId}
                  value={formikValues.values.DegreeId}
                  error={formikValues.errors.DegreeId}
                  onChange={(selectedOption) => {
                    const parsedValue = parseInt(selectedOption, 10);
                    formikValues.setFieldValue("DegreeId", parsedValue);
                  }}
                />

                <DropDown
                  label="Grade"
                  name="GradeId"
                  options={GradeId}
                  error={formikValues.errors.GradeId}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("GradeId", selectedOption);
                  }}
                />
                <DropDown
                  label="Position"
                  name="PositionId"
                  options={PositionId}
                  value={formikValues.values.PositionId}
                  error={formikValues.errors.PositionId}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("PositionId", selectedOption);
                  }}
                />
                <DropDown
                  label="Branch"
                  name="BranchId"
                  options={BranchId}
                  value={formikValues.values.BranchId}
                  error={formikValues.errors.BranchId}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("BranchId", selectedOption);
                  }}
                />
                <DropDown
                  label="Department"
                  name="DepartmentId"
                  options={DepartmentId}
                  value={formikValues.values.DepartmentId}
                  error={formikValues.errors.DepartmentId}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("DepartmentId", selectedOption);
                  }}
                />
                <DropDown
                  label="Degree"
                  name="DegreeId"
                  options={DegreeId}
                  value={formikValues.values.DegreeId}
                  error={formikValues.errors.DegreeId}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("DegreeId", selectedOption);
                  }}
                />
              </Box>
              <div className="m-3">
                <input
                  className="btn btn-success col-10 float-end m-2"
                  type="button"
                  value="submit"
                  onClick={formikValues.handleSubmit}
                />
              </div>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
}

export default EmployeeBasic;
