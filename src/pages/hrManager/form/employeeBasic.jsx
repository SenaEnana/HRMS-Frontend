import TextInput from "../../../components/textInput";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import { useState } from "react";
import DropDown from "../../../components/DropDown";
import { employeeValidation } from "./schema";
import { useNavigate } from "react-router-dom";

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

  function handleNext() {
    navigate("/employeeAdditional");
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
            handleNext();
          }}
          validationSchema={employeeValidation}
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
                {/* <TextInput
                  type="date"
                  name="birthDate"
                  label="Birthday"
                  placeholder="enter birthday"
                  value={formikValues.values.birthDate}
                  error={formikValues.errors.birthDate}
                  onChange={formikValues.handleChange}
                /> */}

                {/* <div className="ml-0">
                                    <div >
                                        <p className=" pr-64 mb-3 font-bold text-xl -mt-2"> Childrens information: </p>
                                        {inputFields.map((field, index) => (
                                            <div key={field.id} >
                                                Name :<input type="text" value={field.value}
                                                    onChange={(event) => handleInputChange(index, event)} required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 mt-6 ml-20" /><br></br>
                                                DOB :<input type="date" value={field.value}
                                                    onChange={(event) => handleInputChange(index, event)} required className="w w-80 pl-6 h h-12 rounded-2xl mb-2 ml-24 -mt-8" /><br></br>
        
                                                <button onClick={() => handleDeleteField(index)} className="bg bg-red-400 ml-80 rounded-2xl text-xl h-12 mt-0 w-32 -mb-60 ">Delete child</button>
                                            </div>
                                        ))}
        
                                        <button onClick={handleAddField} className="bg bg-gray-400  rounded-2xl text-xl h-12 mt-4  w-32 ml-80 mb-6">Add child</button>
        
        
                                    </div>
                                </div>
        
                                <Link to="/NextFormTwo">  <button className="bg bg-[#1c4966] text-white  ml-60 rounded-2xl text-xl h-12 w-52 mb-6" type="submit">Next Form</button></Link>
                            </div> */}
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
