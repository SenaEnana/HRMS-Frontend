import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import { useState } from "react";
import TextInput from "../../../../components/textInput";
import DropDown from "../../../../components/DropDown";
import { useNavigate } from "react-router-dom";
import { employeeBasValidation } from "./schema";

function EmployeeBasic() {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [inputFields, setInputFields] = useState([{ value: "" }]);

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

  const [gender, setGender] = useState([
    { values: "female", label: "Female" },
    { values: "male", label: "Male" },
  ]);

  const [maritalStatus, setMaritalStatus] = useState([
    { values: "single", label: "Single" },
    { values: "married", label: "Married" },
    { values: "divorced", label: "Divorced" },
    { values: "widowed", label: "Widowed" },
  ]);

  const [grade, setGrade] = useState([
    { values: "1", label: "First Grade" },
    { values: "2", label: "Second Grade" },
  ]);
  const [branch, setBranch] = useState([
    { values: "chacha", label: "Chacha Branch" },
    { values: "tebase", label: "Tebase Branch" },
  ]);
  const [department, setDepartment] = useState([
    { values: "accounting", label: "Accountant" },
    { values: "finance", label: "Finance" },
  ]);
  const [position, setPosition] = useState([
    { values: "manager", label: "Manager" },
    { values: "employee", label: "Employee" },
  ]);
  const [degree, setDegree] = useState([
    { values: "bsc", label: "Bsc" },
    { values: "msc", label: "Msc" },
  ]);
  const [role, setRole] = useState([
    { values: "manager", label: "Manager" },
    { values: "employee", label: "Employee" },
  ]);

  // const handleDropDownChange = (event, selectedOption) => {
  //   handleInputChange(index, event); // Call your existing function for formik integration
  //   formikValues.setFieldValue("degree", selectedOption); // Update the formik field value
  // };

  return (
    <div className="row justify-content-center">
      <Box m="20px">
        <Formik
          initialValues={{
            id: "",
            firstName: "",
            lastName: "",
            email: "",
            profilePhoto: "",
            gender: "",
            motherName: "",
            region: "",
            kebele: "",
            wereda: "",
            phoneNumber: "",
            maritalStatus: "",
            houseNumber: "",
            childName: "",
            childBirthDate: "",
            // below are the additional information i have added maybe i will change it later
            hireDate: "",
            grade: "",
            position: "",
            department: "",
            salary: "",
            branch: "",
            degree: "",
            childName: "",
            // below are the contact person information i have added maybe i will change it later
            contactName: "",
            relationship: "",
            contactRegion: "",
            contactKebele: "",
            contactWereda: "",
            contactPhoneNumber: "",
            contactHouseNumber: "",
            // exprience information
            role: "",
            companyName: "",
            startDate: "",
            endDate: "",
            // education information
            institution: "",
            educationDegree: "",
          }}
          onSubmit={() => {
            console.log("successful");
            // handle();
          }}
          validationSchema={employeeBasValidation}
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
                gap="20px"
                gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextInput
                  type="number"
                  name="id"
                  label="Employee Id"
                  placeholder="enter id number"
                  value={formikValues.values.id}
                  error={formikValues.errors.id}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="firstName"
                  label="First Name"
                  placeholder="enter first name"
                  value={formikValues.values.firstName}
                  error={formikValues.errors.firstName}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="lastName"
                  label="Last Name"
                  placeholder="enter last name"
                  value={formikValues.values.lastName}
                  error={formikValues.errors.lastName}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="email"
                  label="Email"
                  placeholder="enter email"
                  value={formikValues.values.email}
                  error={formikValues.errors.email}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="file"
                  name="profilePhoto"
                  label="Profile Photo"
                  placeholder="enter profile photo"
                  value={formikValues.values.profilePhoto}
                  error={formikValues.errors.profilePhoto}
                  onChange={formikValues.handleChange}
                />
                <DropDown
                  label="Gender"
                  name="gender"
                  options={gender}
                  value={formikValues.values.gender}
                  error={formikValues.errors.gender}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("gender", selectedOption);
                  }}
                />
                <DropDown
                  label="Marital Status"
                  name="maritalStatus"
                  options={maritalStatus}
                  value={formikValues.values.maritalStatus}
                  error={formikValues.errors.maritalStatus}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("maritalStatus", selectedOption);
                  }}
                />
                <TextInput
                  type="text"
                  name="motherName"
                  label="Mother Name"
                  placeholder="enter mother name"
                  value={formikValues.values.motherName}
                  error={formikValues.errors.motherName}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="region"
                  label="Region"
                  placeholder="enter region"
                  value={formikValues.values.region}
                  error={formikValues.errors.region}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="wereda"
                  label="Wereda"
                  placeholder="enter wereda"
                  value={formikValues.values.wereda}
                  error={formikValues.errors.wereda}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="kebele"
                  label="Kebele"
                  placeholder="enter kebele"
                  value={formikValues.values.kebele}
                  error={formikValues.errors.kebele}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="number"
                  name="houseNumber"
                  label="House Number"
                  placeholder="enter house Number"
                  value={formikValues.values.houseNumber}
                  error={formikValues.errors.houseNumber}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="number"
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder="enter phone number"
                  value={formikValues.values.phoneNumber}
                  error={formikValues.errors.phoneNumber}
                  onChange={formikValues.handleChange}
                />
              </Box>
              {/* Below are the code for employee contact person information and i 
                have added some information maybe i will delete it later */}

              <p className="fs-4 text-dark text-center">
                Contact Person Information
              </p>
              {inputFields.map((field, index) => (
                <div key={field.id}>
                  <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                    sx={{
                      "& > div": {
                        gridColumn: isNonMobile ? undefined : "span 4",
                      },
                    }}
                  >
                    <TextInput
                      type="text"
                      name="contactName"
                      label="Contact Person Name"
                      placeholder="enter contact person name"
                      value={field.value}
                      error={formikValues.errors.contactName}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                    <TextInput
                      type="text"
                      name="relationship"
                      label="Relationship"
                      placeholder="enter relationship"
                      value={field.value}
                      error={formikValues.errors.relationship}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                    <TextInput
                      type="text"
                      name="contactRegion"
                      label="Contact Person Region"
                      placeholder="enter contact person region"
                      value={field.value}
                      error={formikValues.errors.contactRegion}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                    <TextInput
                      type="text"
                      name="contactWereda"
                      label="Contact Person Wereda"
                      placeholder="enter contact person wereda"
                      value={field.value}
                      error={formikValues.errors.contactWereda}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                    <TextInput
                      type="text"
                      name="contactKebele"
                      label="Contact Person Kebele"
                      placeholder="enter contact person kebele"
                      value={field.value}
                      error={formikValues.errors.contactKebele}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                    <TextInput
                      type="number"
                      name="contactHouseNumber"
                      label="Contact Person House Number"
                      placeholder="enter contact person house number"
                      value={field.value}
                      error={formikValues.errors.contactHouseNumber}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                    <TextInput
                      type="number"
                      name="contactPhoneNumber"
                      label="Contact Person Phone Number"
                      placeholder="enter contact person phone number"
                      value={field.value}
                      error={formikValues.errors.contactPhoneNumber}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                  </Box>
                  <button
                    onClick={() => handleDeleteField(index)}
                    className="btn btn-outline-danger btn-small m-1 float-end p-1"
                  >
                    Delete contact person
                  </button>
                </div>
              ))}
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
                {inputFields.map((field, index) => (
                  <div key={field.id}>
                    <TextInput
                      type="text"
                      name="childName"
                      label="Child Name"
                      placeholder="enter child name"
                      value={field.value}
                      error={formikValues.errors.childName}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                    <TextInput
                      type="date"
                      name="childBirthDate"
                      label="Child Birth Date"
                      placeholder="enter child birth date"
                      value={field.value}
                      error={formikValues.errors.childBirthDate}
                      onChange={(event) => handleInputChange(index, event)}
                    />

                    <button
                      onClick={() => handleDeleteField(index)}
                      className="btn btn-outline-danger btn-small m-1 float-end p-1"
                    >
                      Delete child
                    </button>
                  </div>
                ))}
                <button
                  onClick={handleAddField}
                  className="btn btn-outline-info btn-small m-1 float-end p-1"
                >
                  Add child
                </button>
              </div>

              {/* Below are the code for employee education information and i 
                have added some information maybe i will delete it later */}
              <p className="fs-4 text-dark text-center">
                Employee Education Information
              </p>
              {inputFields.map((field, index) => (
                <div key={field.id}>
                  <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                    sx={{
                      "& > div": {
                        gridColumn: isNonMobile ? undefined : "span 4",
                      },
                    }}
                  >
                    <TextInput
                      type="text"
                      name="institution"
                      label="Institution"
                      placeholder="enter the institution"
                      value={field.value}
                      error={formikValues.errors.institution}
                      onChange={(event) => handleInputChange(index, event)}
                    />
                    <DropDown
                      label="Degree"
                      name="degree"
                      options={degree}
                      value={field.value}
                      error={formikValues.errors.degree}
                      //onChange={(event) => handleInputChange(index, event)}
                      onChange={(selectedOption) => {
                        formikValues.setFieldValue("degree", selectedOption);
                      }}
                    />
                    {/* <DropDown
                      label="Degree"
                      name="degree"
                      options={degree}
                      value={field.value}
                      error={formikValues.errors.degree}
                      onChange={(event, selectedOption) =>
                        handleDropDownChange(event, selectedOption)
                      }
                    /> */}
                  </Box>
                  <button
                    onClick={() => handleDeleteField(index)}
                    className="btn btn-outline-danger btn-small m-1 float-end p-1"
                  >
                    Delete education
                  </button>
                </div>
              ))}
              <button
                onClick={handleAddField}
                className="btn btn-outline-info btn-small m-1 float-end p-1"
              >
                Add education
              </button>

              {/* Below are the code for employee experience information and i 
                have added some information maybe i will delete it later */}
              <p className="fs-4 text-dark text-center">
                Employee Experience Information
              </p>
              {inputFields.map((field, index) => (
                <div key={field.id}>
                  <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                    sx={{
                      "& > div": {
                        gridColumn: isNonMobile ? undefined : "span 4",
                      },
                    }}
                  >
                    <TextInput
                      type="text"
                      name="companyName"
                      label="Company Name"
                      placeholder="enter the name of the company"
                      value={field.value}
                      error={formikValues.errors.companyName}
                      onChange={formikValues.handleChange}
                    />
                    <TextInput
                      type="date"
                      name="startDate"
                      label="Start Date"
                      placeholder="enter the start date in that company"
                      vvalue={field.value}
                      error={formikValues.errors.startDate}
                      onChange={formikValues.handleChange}
                    />

                    <TextInput
                      type="date"
                      name="endDate"
                      label="End Date"
                      placeholder="enter the end date in that company"
                      value={field.value}
                      error={formikValues.errors.endDate}
                      onChange={formikValues.handleChange}
                    />
                    <DropDown
                      label="role"
                      name="Role"
                      options={role}
                      value={field.value}
                      error={formikValues.errors.role}
                      onChange={(selectedOption) => {
                        formikValues.setFieldValue("role", selectedOption);
                      }}
                    />
                  </Box>
                  <button
                    onClick={() => handleDeleteField(index)}
                    className="btn btn-outline-danger btn-small m-1 float-end p-1"
                  >
                    Delete experience
                  </button>
                </div>
              ))}
              <button
                onClick={handleAddField}
                className="btn btn-outline-info btn-small m-1 float-end p-1"
              >
                Add experience
              </button>
              {/* Below are the code for employee additional information and i 
                have added some information maybe i will delete it later */}
              <p className="fs-4 text-dark text-center">
                {" "}
                Employee Additional information{" "}
              </p>
              <Box
                display="grid"
                gap="20px"
                gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextInput
                  type="date"
                  name="hireDate"
                  label="Hire Date"
                  placeholder="enter hire date"
                  value={formikValues.values.hireDate}
                  error={formikValues.errors.hireDate}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="number"
                  name="salary"
                  label="Salary"
                  placeholder="enter salary"
                  value={formikValues.values.salary}
                  error={formikValues.errors.salary}
                  onChange={formikValues.handleChange}
                />
                <DropDown
                  label="position"
                  name="position"
                  options={position}
                  value={formikValues.values.position}
                  error={formikValues.errors.position}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("position", selectedOption);
                  }}
                />
                <DropDown
                  label="Branch"
                  name="branch"
                  options={branch}
                  value={formikValues.values.branch}
                  error={formikValues.errors.branch}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("branch", selectedOption);
                  }}
                />
                <DropDown
                  label="Department"
                  name="department"
                  options={department}
                  value={formikValues.values.department}
                  error={formikValues.errors.department}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("department", selectedOption);
                  }}
                />
                <DropDown
                  label="Degree"
                  name="degree"
                  options={degree}
                  value={formikValues.values.degree}
                  error={formikValues.errors.degree}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("degree", selectedOption);
                  }}
                />
                <DropDown
                  label="Grade"
                  name="grade"
                  options={grade}
                  value={formikValues.values.grade}
                  error={formikValues.errors.grade}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("grade", selectedOption);
                  }}
                />
              </Box>
              <div className="m-3">
                <input
                  className="btn btn-info col-10 float-end m-2"
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
