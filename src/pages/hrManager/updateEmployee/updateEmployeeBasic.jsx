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
              Emp_Id: data.Emp_Id,
              FirstName: data.FirstName,
              LastName: data.LastName,
              Email: data.Email,
              EmployeePhoto: data.EmployeePhoto,
              Gender: data.Gender,
              MotherName: data.MotherName,
              Region: data.Region,
              Kebele: data.Kebele,
              Woreda: data.Woreda,
              PhoneNo: data.PhoneNo,
              MaritalStatus: data.MaritalStatus,
              HouseNo: data.HouseNo,
              ContactPersonName: data.ContactPersonName,
              ContactRegion: data.ContactRegion,
              ContactKebele: data.ContactKebele,
              ContactWoreda: data.ContactWoreda,
              ContactPhoneNo: data.ContactPhoneNo,
              relationship: data.relationship,
              ContactHouseNo: data.ContactHouseNo,
              HireDate: data.HireDate,
              GradeId: data.GradeId,
              PositionId: data.PositionId,
              DepartmentId: data.DepartmentId,
              Salary: data.Salary,
              BranchId: data.BranchId,
              Degree: data.Degree,
              ChildName: data.ChildName,
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
                    name="Emp_Id"
                    label="Employee Emp_Id"
                    value={formikValues.values.Emp_Id}
                    error={formikValues.errors.Emp_Id}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="FirstName"
                    label="First Name"
                    value={formikValues.values.FirstName}
                    error={formikValues.errors.FirstName}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="LastName"
                    label="Last Name"
                    value={formikValues.values.LastName}
                    error={formikValues.errors.LastName}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="Email"
                    label="Email"
                    value={formikValues.values.Email}
                    error={formikValues.errors.Email}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="file"
                    name="EmployeePhoto"
                    label="Profile Photo"
                    value={formikValues.values.EmployeePhoto}
                    error={formikValues.errors.EmployeePhoto}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="Gender"
                    label="Gender"
                    value={formikValues.values.Gender}
                    error={formikValues.errors.Gender}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="MotherName"
                    label="Mother Name"
                    value={formikValues.values.MotherName}
                    error={formikValues.errors.MotherName}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="Region"
                    label="Region"
                    value={formikValues.values.Region}
                    error={formikValues.errors.Region}
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
                    name="Kebele"
                    label="Kebele"
                    value={formikValues.values.Kebele}
                    error={formikValues.errors.Kebele}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="number"
                    name="HouseNo"
                    label="House Number"
                    value={formikValues.values.HouseNo}
                    error={formikValues.errors.HouseNo}
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
//             PhoneNo: data.PhoneNo,
//             address: data.address,
//             expert: data.expert,
//             Gender: data.Gender,
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
//                 name="PhoneNo"
//                 label="Phone Number"
//                 value={formikValues.values.PhoneNo}
//                 error={formikValues.errors.PhoneNo}
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
//                 name="Gender"
//                 label="Gender"
//                 value={formikValues.values.Gender}
//                 error={formikValues.errors.Gender}
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
