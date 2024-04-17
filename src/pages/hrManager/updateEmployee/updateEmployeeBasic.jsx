import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import TextInput from "../../../components/textInput";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

function UpdateEmployeeBasic() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  //   async function updateTeacher(values) {
  //     setLoading(true);
  //     let result = await fetch("http://127.0.0.1:8000/api/updateTeacher/" + id, {
  //       method: "PUT",
  //       body: JSON.stringify(values),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     });
  //     result = await result.json();
  //     setLoading(false);
  //     alert("successfully updated");
  //   }

  //   useEffect(() => {
  //     const asyncFn = async () => {
  //       let result = await fetch("http://127.0.0.1:8000/api/getTeacher/" + id);
  //       result = await result.json();
  //       setData(result);
  //     };
  //     asyncFn();
  //   }, [id]);
  return (
    <div className="row justify-content-center ">
      <Box m="20px">
        <div>
          <NavLink
            to="/employeeList"
            className="float-end btn btn-outline-info btn-sm mt-3"
          >
            Back
          </NavLink>
        </div>
        {data.name && !loading && (
          <Formik
            initialValues={{
              id: data.id,
              firstName: data.firstName,
              lastName: data.lastName,
              email: data.email,
              profilePhoto: data.profilePhoto,
              gender: data.gender,
              motherName: data.motherName,
              region: data.region,
              kebele: data.kebele,
              wereda: data.wereda,
              phoneNumber: data.phoneNumber,
              maritalStatus: data.maritalStatus,
              houseNumber: data.houseNumber,
            }}
            onSubmit={(values) => {
              // updateTeacher(values);
              console.log("updated successfully");
            }}
          >
            {(formikValues) => (
              <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
                <div className="ms-3">
                  <p className="fs-4 text-dark text-center">Update Employee</p>
                </div>
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
                    type="number"
                    name="id"
                    label="Employee Id"
                    value={formikValues.values.id}
                    error={formikValues.errors.id}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="firstName"
                    label="First Name"
                    value={formikValues.values.firstName}
                    error={formikValues.errors.firstName}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="lastName"
                    label="Last Name"
                    value={formikValues.values.lastName}
                    error={formikValues.errors.lastName}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="email"
                    label="Email"
                    value={formikValues.values.email}
                    error={formikValues.errors.email}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="file"
                    name="profilePhoto"
                    label="Profile Photo"
                    value={formikValues.values.profilePhoto}
                    error={formikValues.errors.profilePhoto}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="gender"
                    label="Gender"
                    value={formikValues.values.gender}
                    error={formikValues.errors.gender}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="motherName"
                    label="Mother Name"
                    value={formikValues.values.motherName}
                    error={formikValues.errors.motherName}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="region"
                    label="Region"
                    value={formikValues.values.region}
                    error={formikValues.errors.region}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="wereda"
                    label="Wereda"
                    value={formikValues.values.wereda}
                    error={formikValues.errors.wereda}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="kebele"
                    label="Kebele"
                    value={formikValues.values.kebele}
                    error={formikValues.errors.kebele}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="number"
                    name="houseNumber"
                    label="House Number"
                    value={formikValues.values.houseNumber}
                    error={formikValues.errors.houseNumber}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="number"
                    name="phoneNumber"
                    label="Phone Number"
                    value={formikValues.values.phoneNumber}
                    error={formikValues.errors.phoneNumber}
                    onChange={formikValues.handleChange}
                  />
                  <div className="m-3">
                    <input
                      className="btn btn-info col-10 float-end"
                      type="button"
                      value="update"
                      onClick={formikValues.handleSubmit}
                    />
                  </div>
                </Box>
              </form>
            )}
          </Formik>
        )}
      </Box>
    </div>
  );
}

export default UpdateEmployeeBasic;

// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { Formik } from "formik";
// import TextInput from "../../../components/TextInput";

// function UpdateTeacher() {
//   let { id } = useParams();
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);

//   async function updateTeacher(values) {
//     setLoading(true);
//     let result = await fetch("http://127.0.0.1:8000/api/updateTeacher/" + id, {
//       method: "PUT",
//       body: JSON.stringify(values),
//       headers: {
//         "Content-Type": "application/json",
//         Accept: "application/json",
//       },
//     });
//     result = await result.json();
//     setLoading(false);
//     alert("successfully updated");
//   }

//   useEffect(() => {
//     const asyncFn = async () => {
//       let result = await fetch("http://127.0.0.1:8000/api/getTeacher/" + id);
//       result = await result.json();
//       setData(result);
//     };
//     asyncFn();
//   }, [id]);
//   return (
//     <div className="row justify-content-center ">
//       <div>
//         <NavLink
//           to="/teachers"
//           className="float-end btn btn-danger btn-sm mt-3"
//         >
//           Back
//         </NavLink>
//       </div>
//       {data.name && !loading && (
//         <Formik
//           initialValues={{
//             name: data.name,
//             phoneNo: data.phoneNo,
//             address: data.address,
//             expert: data.expert,
//             gender: data.gender,
//             educationLevel: data.educationLevel,
//             day: data.day,
//             time: data.time,
//           }}
//           onSubmit={(values) => {
//             updateTeacher(values);
//           }}
//         >
//           {(formikValues) => (
//             <form className="form-group rounded border col-4 pe-3 mt-5 bg-light">
//               <h4>Update Teacher</h4>
//               <TextInput
//                 type="text"
//                 name="name"
//                 label="Name"
//                 value={formikValues.values.name}
//                 error={formikValues.errors.name}
//                 onChange={formikValues.handleChange}
//               />
//               <TextInput
//                 type="number"
//                 name="phoneNo"
//                 label="Phone Number"
//                 value={formikValues.values.phoneNo}
//                 error={formikValues.errors.phoneNo}
//                 onChange={formikValues.handleChange}
//               />
//               <TextInput
//                 type="text"
//                 name="address"
//                 label="Address"
//                 value={formikValues.values.address}
//                 error={formikValues.errors.address}
//                 onChange={formikValues.handleChange}
//               />
//               <TextInput
//                 type="text"
//                 name="expert"
//                 label="Expert"
//                 value={formikValues.values.expert}
//                 error={formikValues.errors.expert}
//                 onChange={formikValues.handleChange}
//               />
//               <TextInput
//                 type="text"
//                 name="gender"
//                 label="Gender"
//                 value={formikValues.values.gender}
//                 error={formikValues.errors.gender}
//                 onChange={formikValues.handleChange}
//               />

//               <TextInput
//                 type="text"
//                 name="educationLevel"
//                 label="EducationLevel"
//                 value={formikValues.values.educationLevel}
//                 error={formikValues.errors.educationLevel}
//                 onChange={formikValues.handleChange}
//               />
//               <TextInput
//                 type="text"
//                 name="day"
//                 label="Day"
//                 value={formikValues.values.day}
//                 error={formikValues.errors.day}
//                 onChange={formikValues.handleChange}
//               />
//               <TextInput
//                 type="time"
//                 name="time"
//                 label="Time"
//                 value={formikValues.values.time}
//                 error={formikValues.errors.time}
//                 onChange={formikValues.handleChange}
//               />

//               <div className="m-3">
//                 <input
//                   className="btn btn-success col-12"
//                   type="button"
//                   value="edit teacher"
//                   onClick={formikValues.handleSubmit}
//                 />
//               </div>
//             </form>
//           )}
//         </Formik>
//       )}
//     </div>
//   );
// }

// export default UpdateTeacher;
