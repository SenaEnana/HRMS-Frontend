import TextInput from "../../../components/textInput";
import RadioButton from "../../../components/radioButton";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

function EmployeeInfo({ onNext, formikValues }) {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const genderOptions = [
    { value: "female", label: "Female" },
    { value: "male", label: "Male" },
  ];

  function handleSubmit() {
    navigate("/contactInformation");
  }
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
            HouseNo: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            handleSubmit();
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
              </Box>
              <div className="m-3">
                <input
                  className="btn btn-info col-10 float-end m-2"
                  type="button"
                  value="next"
                  onClick={onNext}
                />
              </div>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
}

export default EmployeeInfo;

// import React, { useState } from "react";
// import { Formik, Form, Field } from "formik";
// import { useNavigate } from "react-router-dom";
// import TextInput from "./TextInput"; // assuming TextInput component is defined
// import RadioButton from "./RadioButton"; // assuming RadioButton component is defined

// // Page 1: Employee Basic Information
// const Step1 = ({ onNext, formikValues }) => (
//   <div>
//     <p className="fs-4 text-dark text-center">Employee Basic Information</p>
//     {/* Form fields for basic information */}
//     {/* Sample TextInput components */}
//     <TextInput
//       type="text"
//       name="Emp_Id"
//       label="Employee Id"
//       placeholder="enter id number"
//       value={formikValues.values.Emp_Id}
//       error={formikValues.errors.Emp_Id}
//       onChange={formikValues.handleChange}
//     />
//     {/* Other fields... */}
//     {/* Next button */}
//     <button onClick={onNext}>Next</button>
//   </div>
// );

// // Page 2: Contact Person Information
// const Step2 = ({ onPrev, onSubmit, formikValues }) => (
//   <div>
//     <p className="fs-4 text-dark text-center">Contact Person Information</p>
//     {/* Form fields for contact person information */}
//     {/* Sample TextInput components */}
//     <TextInput
//       type="text"
//       name="ContactPersonName"
//       label="Contact Person Name"
//       placeholder="Enter contact person name"
//       value={formikValues.values.ContactPersons.ContactPersonName}
//       error={formikValues.errors.ContactPersons?.ContactPersonName}
//       onChange={formikValues.handleChange}
//     />
//     {/* Other fields... */}
//     {/* Previous and Submit buttons */}
//     <button onClick={onPrev}>Previous</button>
//     <button onClick={onSubmit}>Submit</button>
//   </div>
// );

// // MultiStepForm component
// const MultiStepForm = () => {
//   const [step, setStep] = useState(1);
//   const navigate = useNavigate();

//   const handleSubmit = async (values) => {
//     // Call your API for form submission
//     try {
//       const response = await fetch(
//         "https://localhost:7140/Employee/CorrectRegisterEmployee",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify(values),
//         }
//       );
//       if (response.ok) {
//         console.log("Registration successful");
//         // Redirect to success page or perform other actions
//         navigate("/success");
//       } else {
//         console.log("Registration failed");
//       }
//     } catch (error) {
//       console.error("Error registering employee:", error.message);
//     }
//   };

//   const handleNext = () => setStep(step + 1);
//   const handlePrev = () => setStep(step - 1);

//   return (
//     <div>
//       <h1>Multi-Step Registration Form</h1>
//       <Formik
//         initialValues={{
//           Emp_Id: "",
//           // Other initial values...
//         }}
//         onSubmit={handleSubmit}
//       >
//         {(formikProps) => (
//           <Form>
//             {step === 1 && <Step1 onNext={handleNext} formikValues={formikProps} />}
//             {step === 2 && <Step2 onPrev={handlePrev} onSubmit={formikProps.handleSubmit} formikValues={formikProps} />}
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default MultiStepForm;
