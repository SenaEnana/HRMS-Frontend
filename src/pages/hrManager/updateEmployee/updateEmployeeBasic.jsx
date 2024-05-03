import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import TextInput from "../../../components/textInput";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState, useEffect } from "react";
import DropDown from "../../../components/DropDown";
import { useNavigate } from "react-router-dom";

function UpdateEmployeeBasic() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [PositionId, setPositionId] = useState([{ name: "", id: "" }]);
  const [BranchId, setBranchId] = useState([{ name: "", id: "" }]);
  const [DepartmentId, setDepartmentId] = useState([{ name: "", id: "" }]);
  const [DegreeId, setDegreeId] = useState([{ name: "", id: "" }]);
  const [GradeId, setGradeId] = useState([{ name: "", id: "" }]);

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

  async function updateEmployees(values) {
    setLoading(true);
    let result = await fetch("http://127.0.0.1:8000/api/updateTeacher/" + id, {
      method: "PUT",
      body: JSON.stringify(values),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    setLoading(false);
    alert("successfully updated");
  }

  useEffect(() => {
    const asyncFn = async () => {
      let result = await fetch("http://127.0.0.1:8000/api/getTeacher/" + id);
      result = await result.json();
      setData(result);
    };
    asyncFn();
  }, [id]);
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
              Roles: data.Roles,
              Gender: data.Gender,
              MotherName: data.MotherName,
              Region: data.Region,
              Kebele: data.Kebele,
              Woreda: data.Woreda,
              PhoneNo: data.PhoneNo,
              MaritalStatus: data.MaritalStatus,
              HouseNo: data.HouseNo,
              ChildName: data.ChildName,
              DateOfBirth: data.DateOfBirth,
              ContactPersonName: data.ContactPersonName,
              Relationship: data.Relationship,
              ContactRegion: data.ContactRegion,
              ContactKebele: data.ContactKebele,
              ContactWoreda: data.ContactWoreda,
              ContactPhoneNo: data.ContactPhoneNo,
              ContactHouseNo: data.ContactHouseNo,
              HireDate: data.HireDate,
              GradeId: data.GradeId,
              PositionId: data.PositionId,
              DepartmentId: data.DepartmentId,
              Salary: data.Salary,
              BranchId: data.BranchId,
              DegreeId: data.DegreeId,
              ExperiencePosition: data.ExperiencePosition,
              CompanyName: data.CompanyName,
              ExperienceStartDate: data.ExperienceStartDate,
              ExperienceEndDate: data.ExperienceEndDate,
              Institute: data.Institute,
              Degree: data.Degree,
            }}
            onSubmit={(values) => {
              updateEmployees(values);
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
                    type="text"
                    name="Roles"
                    label="Roles"
                    value={formikValues.values.Roles}
                    error={formikValues.errors.Roles}
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
                    name="Kebele"
                    label="Kebele"
                    value={formikValues.values.Kebele}
                    error={formikValues.errors.Kebele}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="Woreda"
                    label="Woreda"
                    value={formikValues.values.Woreda}
                    error={formikValues.errors.Woreda}
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

                  <TextInput
                    type="text"
                    name="MaritalStatus"
                    label="Marital Status"
                    value={formikValues.values.MaritalStatus}
                    error={formikValues.errors.MaritalStatus}
                    onChange={formikValues.handleChange}
                  />
                </Box>

                <p className="fs-4 text-dark text-center">
                  Contact Person Information
                </p>
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
                    value={formikValues.values.ContactPersonName}
                    error={formikValues.errors.ContactPersonName}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="Relationship"
                    label="Relationship"
                    value={formikValues.values.Relationship}
                    error={formikValues.errors.Relationship}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="ContactRegion"
                    label="Contact Person Region"
                    value={formikValues.values.ContactRegion}
                    error={formikValues.errors.ContactRegion}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="ContactWoreda"
                    label="Contact Person Woreda"
                    value={formikValues.values.ContactWoreda}
                    error={formikValues.errors.ContactWoreda}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="number"
                    name="ContactKebele"
                    label="Contact Person Kebele"
                    value={formikValues.values.ContactKebele}
                    error={formikValues.errors.ContactKebele}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="ContactHouseNo"
                    label="Contact Person House Number"
                    value={formikValues.values.ContactHouseNo}
                    error={formikValues.errors.ContactHouseNo}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="ContactPhoneNo"
                    label="Contact Person Phone Number"
                    value={formikValues.values.ContactPhoneNo}
                    error={formikValues.errors.ContactPhoneNo}
                    onChange={formikValues.handleChange}
                  />
                </Box>
                <p className=" pr-64 mb-3 font-bold text-xl -mt-2 fs-4 text-dark text-center">
                  {" "}
                  Children information:{" "}
                </p>
                <TextInput
                  type="text"
                  name="ChildName"
                  label="Child Name"
                  value={formikValues.values.ChildName}
                  error={formikValues.errors.ChildName}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="date"
                  name="DateOfBirth"
                  label="Child Birth Date"
                  value={formikValues.values.DateOfBirth}
                  error={formikValues.errors.DateOfBirth}
                  onChange={formikValues.handleChange}
                />
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
                    value={formikValues.values.Institute}
                    error={formikValues.errors.Institute}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="Degree"
                    label="Degree"
                    value={formikValues.values.Degree}
                    error={formikValues.errors.Degree}
                    onChange={formikValues.handleChange}
                  />
                </Box>
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
                    value={formikValues.values.CompanyName}
                    error={formikValues.errors.CompanyName}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="ExperiencePosition"
                    label="Experience position"
                    value={formikValues.values.ExperiencePosition}
                    error={formikValues.errors.ExperiencePosition}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="date"
                    name="ExperienceStartDate"
                    label="Start Date"
                    value={formikValues.values.ExperienceStartDate}
                    error={formikValues.errors.ExperienceStartDate}
                    onChange={formikValues.handleChange}
                  />

                  <TextInput
                    type="date"
                    name="ExperienceEndDate"
                    label="End Date"
                    value={formikValues.values.ExperienceEndDate}
                    error={formikValues.errors.ExperienceEndDate}
                    onChange={formikValues.handleChange}
                  />
                </Box>
                <Box
                  display="grid"
                  gap="20px"
                  gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextInput
                    type="date"
                    name="HireDate"
                    label="Hire Date"
                    value={formikValues.values.HireDate}
                    error={formikValues.errors.HireDate}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="number"
                    name="Salary"
                    label="Salary"
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
                    label="Branch"
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
                    label="Department"
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
                    label="Degree"
                    name="DegreeId"
                    options={DegreeId}
                    value={formikValues.values.DegreeId}
                    error={formikValues.errors.DegreeId}
                    onChange={(selectedOption) => {
                      const parsedValue = parseInt(selectedOption, 10);
                      formikValues.setFieldValue("DegreeId", parsedValue);
                    }}
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
