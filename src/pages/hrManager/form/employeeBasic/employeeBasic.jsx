import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import { useState } from "react";
import TextInput from "../../../../components/textInput";
import DropDown from "../../../../components/DropDown";
import { useNavigate } from "react-router-dom";
import { employeeBasValidation } from "./schema";
import { useEffect } from "react";
import RadioButton from "../../../../components/radioButton";
// import { formatDate } from "@fullcalendar/core/index.js";
import {format} from 'date-fns'

function EmployeeBasic() {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

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
    { value: "married", label: "Married" },
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

  //   async function userRegistration(values) {

  //     const formData = new FormData();
  //     formData.append("Emp_Id", values.Emp_Id);
  //     formData.append("FirstName", values.FirstName);
  //     formData.append("LastName", values.LastName);
  //     formData.append("Email", values.Email);
  //     formData.append("EmployeePhoto", values.EmployeePhoto);
  //     formData.append("Gender", values.Gender);
  //     formData.append("MaritalStatus", values.MaritalStatus);
  //     formData.append("MotherName", values.MotherName);
  //     formData.append("Region", values.Region);
  //     formData.append("Kebele", values.Kebele);
  //     formData.append("Woreda", values.Woreda);
  //     formData.append("PhoneNo", values.PhoneNo);
  //     formData.append("HouseNo", values.HouseNo);
  //     formData.append("ChildName", values.ChildName);
  //     formData.append("DateOfBirth", format(new Date(values.DateOfBirth), "yyyy-MM-ddThh:mm:ss"));
  //     formData.append("HireDate", values.HireDate);
  //     formData.append("GradeId", values.GradeId);
  //     formData.append("PositionId", values.PositionId);
  //     formData.append("DepartmentId", values.DepartmentId);
  //     formData.append("BranchId", values.BranchId);
  //     formData.append("DegreeId", values.DegreeId);
  //     formData.append("ContactPersonName", values.ContactPersonName);
  //     formData.append("Relationship", values.Relationship);
  //     formData.append("ContactKebele", values.ContactKebele);
  //     formData.append("Roles", values.Roles);
  //     formData.append("ContactWoreda", values.ContactWoreda);
  //     formData.append("ContactPhoneNo", values.ContactPhoneNo);
  //     formData.append("ContactRegion", values.ContactRegion);
  //     formData.append("ContactHouseNo", values.ContactHouseNo);
  //     formData.append("ExperiencePosition", values.ExperiencePosition);
  //     formData.append("CompanyName", values.CompanyName);
  //     formData.append("ExperienceStartDate", values.ExperienceStartDate);
  //     formData.append("ExperienceEndDate", values.ExperienceEndDate);
  //     formData.append("Institute", values.Institute);
  //     formData.append("Degree", values.Degree);

  //     try {
  //       let result = await fetch("https://localhost:7140/Employee/RegisterEmployee", 
  //         {
  //           method: "POST",
  //           body: formData,
  //           headers: {"Content-Type":"multipart/form-data"} 
  //         });

  //       console.log("result", result)

  //       if (result.ok) {
  //         console.log("successful");

  //       } else {
  //         console.log("failed")
  //       }
  //     }
  //     catch (error) {
  //     console.error("Error registering employee:", error.message);
  //   }
  // }

  async function userRegistration(values) {
    try {
      const response = await fetch('https://localhost:7140/Employee/RegisterEmployee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });
      console.log(response)
      if (response.ok) {
                console.log("successful");
              } else {
                console.log("failed")
              }
            }
            catch (error) {
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

  const handleChange = (event) => {
    setGradeId(event.target.value);
  };
  return (
    <div className="row justify-content-center">
      <Box m="20px">
        <Formik
          initialValues={{
            Emp_Id: "",
            FirstName: "",
            LastName: "",
            Email: "",
            Roles:"",
            // EmployeePhoto: {},
            Gender: "",
            MotherName: "",
            Region: "",
            Kebele: "",
            Woreda: "",
            PhoneNo: "",
            MaritalStatus: "",
            HouseNo: "",
            ChildName: "",
            DateOfBirth: "",
            HireDate: "",
            GradeId: "",
            PositionId: "",
            DepartmentId: "",
            Salary: "",
            BranchId: "",
            DegreeId: "",
            ContactPersonName: "",
            Relationship: "",
            ContactRegion: "",
            ContactKebele: "",
            ContactWoreda: "",
            ContactPhoneNo: "",
            ContactHouseNo: "",
            ExperiencePosition: "",
            CompanyName: "",
            ExperienceStartDate: "",
            ExperienceEndDate: "",
            Institute: "",
            Degree: "",
          }}
          onSubmit={(values) => {
            userRegistration(values);
            console.log(values);
          }}
          // validationSchema={employeeBasValidation}
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
                <div>
                <RadioButton
                  title="Gender"
                  options={genderOptions}
                  value={formikValues.values.Gender}
                  onChange={(value) => formikValues.setFieldValue("Gender", value)} 
                 />

               <p>Selected Gender: {formikValues.values.Gender}</p>
                </div>
                <div>
                  <RadioButton
                  title="Marital Status"
                  options={maritalStatusOptions}
                  value={formikValues.values.MaritalStatus}
                  onChange={(value) => formikValues.setFieldValue("MaritalStatus", value)} 
                 />

               <p>Selected Marital Status: {formikValues.values.MaritalStatus}</p>

                </div>
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
                  name="Roles"
                  label="Roles"
                  placeholder="enter role"
                  value={formikValues.values.Roles}
                  error={formikValues.errors.Roles}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="ExperiencePosition"
                  label="Experience position"
                  placeholder="enter position name"
                  value={formikValues.values.ExperiencePosition}
                  error={formikValues.errors.ExperiencePosition}
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
                {/* <TextInput
                  type="file"
                  name="EmployeePhoto"
                  label="Profile Photo"
                  placeholder="enter profile photo"
                  value={formikValues.values.EmployeePhoto}
                  error={formikValues.errors.EmployeePhoto}
                  onChange={formikValues.handleChange}
                /> */}
                {/* <div className="col-10 row">
                  <div>
                    <label className="float-start">Image</label>
                  </div>
                  <div className="form-group">
                    <input
                      className="form-control"
                      id="EmployeePhoto"
                      name="EmployeePhoto"
                      type="file"
                      onChange={(event) =>
                        formikValues.setFieldValue(
                          "EmployeePhoto",
                          event.currentTarget.files[0]
                        )
                      }
                    />
                  </div>
                </div> */}
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
                  name="Degree"
                  label="Degree Name"
                  placeholder="enter degree name"
                  value={formikValues.values.Degree}
                  error={formikValues.errors.Degree}
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
              </Box>

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
                      name="ContactPersonName"
                      label="Contact Person Name"
                      placeholder="enter contact person name"
                      // value={field.value}
                      value={formikValues.values.ContactPersonName}
                      error={formikValues.errors.ContactPersonName}
                      // onChange={(event) => handleInputChange(index, event)}
                      onChange={formikValues.handleChange}
                    />
                    <TextInput
                      type="text"
                      name="Relationship"
                      label="Relationship"
                      placeholder="enter relationship"
                      // value={field.value}
                      value={formikValues.values.Relationship}
                      error={formikValues.errors.Relationship}
                      onChange={formikValues.handleChange}
                      // onChange={(event) => handleInputChange(index, event)}
                    />
                    <TextInput
                      type="text"
                      name="ContactRegion"
                      label="Contact Person Region"
                      placeholder="enter contact person region"
                      // value={field.value}
                      value={formikValues.values.ContactRegion}
                      error={formikValues.errors.ContactRegion}
                      onChange={formikValues.handleChange}
                      // onChange={(event) => handleInputChange(index, event)}
                    />
                    <TextInput
                      type="text"
                      name="ContactWoreda"
                      label="Contact Person Wereda"
                      placeholder="enter contact person wereda"
                      // value={field.value}
                      value={formikValues.values.ContactWoreda}
                      error={formikValues.errors.ContactWoreda}
                      onChange={formikValues.handleChange}
                      // onChange={(event) => handleInputChange(index, event)}
                    />
                    <TextInput
                      type="number"
                      name="ContactKebele"
                      label="Contact Person Kebele"
                      placeholder="enter contact person kebele"
                      // value={field.value}
                      value={formikValues.values.ContactKebele}
                      error={formikValues.errors.ContactKebele}
                      onChange={formikValues.handleChange}
                      // onChange={(event) => handleInputChange(index, event)}
                    />
                    <TextInput
                      type="text"
                      name="ContactHouseNo"
                      label="Contact Person House Number"
                      placeholder="enter contact person house number"
                      // value={field.value}
                      value={formikValues.values.ContactHouseNo}
                      error={formikValues.errors.ContactHouseNo}
                      onChange={formikValues.handleChange}
                      // onChange={(event) => handleInputChange(index, event)}
                    />
                    <TextInput
                      type="text"
                      name="ContactPhoneNo"
                      label="Contact Person Phone Number"
                      placeholder="enter contact person phone number"
                      // value={field.value}
                      value={formikValues.values.ContactPhoneNo}
                      error={formikValues.errors.ContactPhoneNo}
                      onChange={formikValues.handleChange}
                      // onChange={(event) => handleInputChange(index, event)}
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
                      name="ChildName"
                      label="Child Name"
                      placeholder="enter child name"
                      // value={field.value}
                      value={formikValues.values.ChildName}
                      error={formikValues.errors.ChildName}
                      onChange={formikValues.handleChange}
                      // onChange={(event) => handleInputChange(index, event)}
                    />
                    <TextInput
                      type="date"
                      name="DateOfBirth"
                      label="Child Birth Date"
                      placeholder="enter child birth date"
                      // value={field.value}
                      value={formikValues.values.DateOfBirth}
                      error={formikValues.errors.DateOfBirth}
                      onChange={formikValues.handleChange}
                      // onChange={(event) => handleInputChange(index, event)}
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
                      name="Institute"
                      label="Institute"
                      placeholder="enter the Institute"
                      // value={field.value}
                      value={formikValues.values.Institute}
                      error={formikValues.errors.Institute}
                      // onChange={(event) => handleInputChange(index, event)}
                      onChange={formikValues.handleChange}
                    />
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
                      name="CompanyName"
                      label="Company Name"
                      placeholder="enter the name of the company"
                      // value={field.value}
                      value={formikValues.values.CompanyName}
                      error={formikValues.errors.CompanyName}
                      onChange={formikValues.handleChange}
                    />
                    <TextInput
                      type="date"
                      name="ExperienceStartDate"
                      label="Start Date"
                      placeholder="enter the start date in that company"
                      // value={field.value}
                      value={formikValues.values.ExperienceStartDate}
                      error={formikValues.errors.ExperienceStartDate}
                      onChange={formikValues.handleChange}
                    />

                     <TextInput
                      type="date"
                      name="ExperienceEndDate"
                      label="End Date"
                      placeholder="enter the end date in that company"
                      // value={field.value}
                      value={formikValues.values.ExperienceEndDate}
                      error={formikValues.errors.ExperienceEndDate}
                      onChange={formikValues.handleChange}
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
                {GradeId.map((grade, gradeName) => (
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
                ))}
                {PositionId.map((position, name) => (
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
                ))}
                {BranchId.map((branch, name) => (
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
                ))}
                {DepartmentId.map((department, name) => (
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
                ))}
                {DegreeId.map((degree, name) => (
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
                ))}
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
