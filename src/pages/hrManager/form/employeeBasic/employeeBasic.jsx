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

  function handle() {
    navigate("/employeeAdditional");
    console.log("hello");
  }
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
          }}
          onSubmit={() => {
            console.log("successful");
            handle();
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
                gap="30px"
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
                <div className="m-3">
                  <input
                    className="btn btn-info col-10 float-end"
                    type="button"
                    value="next"
                    onClick={formikValues.handleSubmit}
                  />
                </div>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
}

export default EmployeeBasic;
