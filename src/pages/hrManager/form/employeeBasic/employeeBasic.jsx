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
    { value: "employee", label: "Employee" },
    { value: "admin", label: "Admin" },
    { value: "ceo", label: "CEO" },
    { value: "hrManager", label: "HRManager" },
    { value: "leaveAdmin", label: "LeaveAdmin" },
    { value: "immediateSupervisor", label: "ImmediateSupervisor" },
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

  const handleInputChangeChild = (id, event) => {
    const updatedChildInformations = inputFields.map((field) => {
      if (field.id === id) {
        return { ...field, value: event.target.value };
      }
      return field;
    });
    setInputFields(updatedChildInformations);
  };

  const handleAddContactPerson = (formikProps) => {
    formikProps.setValues({
      ...formikProps.values,
      ContactPersons: [
        ...formikProps.values.ContactPersons,
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
    });

    setInputFields([...inputFields, { value: "" }]);
  };

  const handleDeleteContactPerson = (formikProps, index) => {
    const updatedContactPersons = [...formikProps.values.ContactPersons];
    updatedContactPersons.splice(index, 1);
    formikProps.setValues({
      ...formikProps.values,
      ContactPersons: updatedContactPersons,
    });
  };

  const handleAddChildInformations = (formikProps) => {
    formikProps.setValues({
      ...formikProps.values,
      ChildInformations: [
        ...formikProps.values.ChildInformations,
        {
          ChildName: "",
          DateOfBirth: "",
        },
      ],
    });

    setInputFields([...inputFields, { value: "" }]);
  };

  const handleDeleteChildInformations = (formikProps, index) => {
    const updatedChildInformations = [...formikProps.values.ChildInformations];
    updatedChildInformations.splice(index, 1);
    formikProps.setValues({
      ...formikProps.values,
      ChildInformations: updatedChildInformations,
    });
  };

  const handleAddEducations = (formikProps) => {
    formikProps.setValues({
      ...formikProps.values,
      Educations: [
        ...formikProps.values.Educations,
        {
          Degree: "",
          Institute: "",
        },
      ],
    });

    setInputFields([...inputFields, { value: "" }]);
  };

  const handleDeleteEducations = (formikProps, index) => {
    const updatedEducations = [...formikProps.values.Educations];
    updatedEducations.splice(index, 1);
    formikProps.setValues({
      ...formikProps.values,
      Educations: updatedEducations,
    });
  };

  const handleAddExperiences = (formikProps) => {
    formikProps.setValues({
      ...formikProps.values,
      Experiences: [
        ...formikProps.values.Experiences,
        {
          CompanyName: "",
          ExperiencePosition: "",
          ExperienceStartDate: "",
          ExperienceEndDate: "",
        },
      ],
    });

    setInputFields([...inputFields, { value: "" }]);
  };

  const handleDeleteExperiences = (formikProps, index) => {
    const updatedExperiences = [...formikProps.values.Experiences];
    updatedExperiences.splice(index, 1);
    formikProps.setValues({
      ...formikProps.values,
      Experiences: updatedExperiences,
    });
  };

  return (
    <div className="row justify-content-center m-5">
      <Formik
        initialValues={{
          Emp_Id: "",
          FirstName: "",
          LastName: "",
          Email: "",
          Gender: "female",
          Roles: "employee",
          MotherName: "",
          Region: "",
          Kebele: "",
          Woreda: "",
          PhoneNo: "",
          MaritalStatus: "single",
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
        validationSchema={employeeBasValidation}
      >
        {(formikProps) => (
          <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
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
            {inputFields.map((field, index) => (
              <div key={field.id}>
                {formikProps.values.ContactPersons.map(
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
                        <TextInput
                          type="text"
                          name={`ContactPersons[${index}].ContactPersonName`}
                          label="Contact Person Name"
                          placeholder="Enter contact person name"
                          value={`${formikProps.values.ContactPersons[index].ContactPersonName} ${field.value}`}
                          error={
                            formikProps.errors.ContactPersons?.[index]
                              ?.ContactPersonName
                          }
                          onChange={(event) => {
                            formikProps.handleChange(event);
                            handleInputChange(index, event);
                          }}
                        />
                        <TextInput
                          type="text"
                          name={`ContactPersons[${index}].Relationship`}
                          label="Relationship"
                          placeholder="Enter relationship"
                          value={`${formikProps.values.ContactPersons[index].Relationship} ${field.value}`}
                          error={
                            formikProps.errors.ContactPersons?.[index]
                              ?.Relationship
                          }
                          onChange={(event) => {
                            formikProps.handleChange(event);
                            handleInputChange(index, event);
                          }}
                        />
                        <TextInput
                          type="text"
                          name={`ContactPersons[${index}].ContactRegion`}
                          label="Contact Person Region"
                          placeholder="Enter contact person region"
                          value={`${formikProps.values.ContactPersons[index].ContactRegion} ${field.value}`}
                          error={
                            formikProps.errors.ContactPersons?.[index]
                              ?.ContactRegion
                          }
                          onChange={(event) => {
                            formikProps.handleChange(event);
                            handleInputChange(index, event);
                          }}
                        />
                        <TextInput
                          type="text"
                          name={`ContactPersons[${index}].ContactWoreda`}
                          label="Contact Person Woreda"
                          placeholder="Enter contact person woreda"
                          value={`${formikProps.values.ContactPersons[index].ContactWoreda} ${field.value}`}
                          error={
                            formikProps.errors.ContactPersons?.[index]
                              ?.ContactWoreda
                          }
                          onChange={(event) => {
                            formikProps.handleChange(event);
                            handleInputChange(index, event);
                          }}
                        />
                        <TextInput
                          type="number"
                          name={`ContactPersons[${index}].ContactKebele`}
                          label="Contact Person Kebele"
                          placeholder="Enter contact person kebele"
                          value={`${formikProps.values.ContactPersons[index].ContactKebele} ${field.value}`}
                          error={
                            formikProps.errors.ContactPersons?.[index]
                              ?.ContactKebele
                          }
                          onChange={(event) => {
                            formikProps.handleChange(event);
                            handleInputChange(index, event);
                          }}
                        />
                        <TextInput
                          type="text"
                          name={`ContactPersons[${index}].ContactHouseNo`}
                          label="Contact Person House Number"
                          placeholder="Enter contact person house number"
                          value={`${formikProps.values.ContactPersons[index].ContactHouseNo} ${field.value}`}
                          error={
                            formikProps.errors.ContactPersons?.[index]
                              ?.ContactHouseNo
                          }
                          onChange={(event) => {
                            formikProps.handleChange(event);
                            handleInputChange(index, event);
                          }}
                        />
                        <TextInput
                          type="text"
                          name={`ContactPersons[${index}].ContactPhoneNo`}
                          label="Contact Person Phone Number"
                          placeholder="Enter contact person phone number"
                          value={`${formikProps.values.ContactPersons[index].ContactPhoneNo} ${field.value}`}
                          error={
                            formikProps.errors.ContactPersons?.[index]
                              ?.ContactPhoneNo
                          }
                          onChange={(event) => {
                            formikProps.handleChange(event);
                            handleInputChange(index, event);
                          }}
                        />
                      </Box>
                    </div>
                  )
                )}
                <button
                  onClick={() => handleDeleteContactPerson(formikProps, index)}
                  className="btn btn-outline-danger btn-small m-1 float-end p-1"
                >
                  Delete contact Person
                </button>
              </div>
            ))}
            <button
              onClick={() => handleAddContactPerson(formikProps)}
              className="btn btn-outline-secondary btn-small m-1 float-end p-1"
            >
              Add contact person
            </button>
            <div>
              <p className="pr-64 mb-3 font-bold text-xl -mt-2 fs-4 text-dark text-center fw-bold">
                Children information
              </p>

              {formikProps.values.ChildInformations.map((child, outerIndex) => (
                <div key={outerIndex}>
                  <TextInput
                    type="text"
                    name={`ChildInformations[${outerIndex}].ChildName`}
                    label="Child Name"
                    placeholder="Enter child name"
                    value={child.ChildName}
                    error={
                      formikProps.errors.ChildInformations?.[outerIndex]
                        ?.ChildName
                    }
                    onChange={formikProps.handleChange}
                  />
                  <TextInput
                    type="date"
                    name={`ChildInformations[${outerIndex}].DateOfBirth`}
                    label="Child Birth Date"
                    placeholder="Enter child birth date"
                    value={child.DateOfBirth}
                    error={
                      formikProps.errors.ChildInformations?.[outerIndex]
                        ?.DateOfBirth
                    }
                    onChange={formikProps.handleChange}
                  />
                  <button
                    onClick={() =>
                      handleDeleteChildInformations(formikProps, outerIndex)
                    }
                    className="btn btn-outline-danger btn-small m-1 float-end p-1"
                  >
                    Delete child
                  </button>
                </div>
              ))}
              <button
                onClick={() => handleAddChildInformations(formikProps)}
                className="btn btn-outline-secondary btn-small m-1 float-end p-1"
              >
                Add child
              </button>
            </div>

            <p className=" pr-64 mb-3 font-bold text-xl -mt-2 fs-4 text-dark text-center fw-bold">
              {" "}
              Educations:{" "}
            </p>
            {inputFields.map((field, index) => (
              <div key={field.id}>
                {formikProps.values.Educations.map((education, index) => (
                  <div key={index}>
                    <TextInput
                      type="text"
                      name={`Educations[${index}].Degree`}
                      label="Degree"
                      placeholder="Enter degree name"
                      value={`${formikProps.values.Educations[index].Degree} ${field.value}`}
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
                      value={`${formikProps.values.Educations[index].Institute} ${field.value}`}
                      error={formikProps.errors.Educations?.[index]?.Institute}
                      onChange={(event) => {
                        formikProps.handleChange(event);
                        handleInputChange(index, event);
                      }}
                    />
                  </div>
                ))}
                <button
                  onClick={() => handleDeleteEducations(formikProps, index)}
                  className="btn btn-outline-danger btn-small m-1 float-end p-1"
                >
                  Delete education
                </button>
              </div>
            ))}
            <button
              onClick={() => handleAddEducations(formikProps)}
              className="btn btn-outline-secondary btn-small m-1 float-end p-1"
            >
              Add education
            </button>
            <p className="fs-4 text-dark text-center fw-bold">
              Employee Experience Information
            </p>
            {inputFields.map((field, index) => (
              <div key={field.id}>
                {formikProps.values.Experiences.map((experience, index) => (
                  <div key={index}>
                    <TextInput
                      type="text"
                      name={`Experiences[${index}].CompanyName`}
                      label="Company Name"
                      placeholder="Enter company name"
                      value={`${formikProps.values.Experiences[index].CompanyName} ${field.value}`}
                      error={
                        formikProps.errors.Experiences?.[index]?.CompanyName
                      }
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
                      value={`${formikProps.values.Experiences[index].ExperiencePosition} ${field.value}`}
                      error={
                        formikProps.errors.Experiences?.[index]
                          ?.ExperiencePosition
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
                      value={`${formikProps.values.Experiences[index].ExperienceStartDate} ${field.value}`}
                      error={
                        formikProps.errors.Experiences?.[index]
                          ?.ExperienceStartDate
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
                      value={`${formikProps.values.Experiences[index].ExperienceEndDate} ${field.value}`}
                      error={
                        formikProps.errors.Experiences?.[index]
                          ?.ExperienceEndDate
                      }
                      onChange={(event) => {
                        formikProps.handleChange(event);
                        handleInputChange(index, event);
                      }}
                    />
                  </div>
                ))}
                <button
                  onClick={() => handleDeleteExperiences(formikProps, index)}
                  className="btn btn-outline-danger btn-small m-1 float-end p-1"
                >
                  Delete experience
                </button>
              </div>
            ))}
            <button
              onClick={() => handleAddExperiences(formikProps)}
              className="btn btn-outline-secondary btn-small m-1 float-end p-1"
            >
              Add experience
            </button>

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
