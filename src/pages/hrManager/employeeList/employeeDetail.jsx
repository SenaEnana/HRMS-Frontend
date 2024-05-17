// EmployeeDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch(`https://localhost:7140/Employee/${id}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      );
  }, [id]);

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="first_card mt-5 me-3 text-dark d-flex">
        <p className="fs-5">{employee.firstName}</p>
        <div className="card_body fs-5 d-flex">
          <div>Employee Id: {employee.id}</div>
          <div>First Name: {employee.firstName}</div>
          <div>Last Name: {employee.lastName}</div>
          <div>Gender: {employee.gender}</div>
          <div>Mother Name: {employee.motherName}</div>
          <div>Phone Number: {employee.phoneNo}</div>
          <div>Marital Status: {employee.maritalStatus}</div>
          <div>Region: {employee.region}</div>
          <div>Woreda: {employee.woreda}</div>
          <div>Kebele: {employee.kebele}</div>
          <div>House Number: {employee.houseNo}</div>
          <div>Department: {employee.departmentId}</div>
          <div>Grade: {employee.gradeId}</div>
          <div>Branch: {employee.branchId}</div>
          <div>Degree: {employee.degreeId}</div>
          <div>Hire Date: {employee.hireDate}</div>
          <div>Salary: {employee.salary}</div>
          <div>Roles: {employee.roles}</div>
          <div>Region: {employee.region}</div>
          <div>Woreda: {employee.woreda}</div>
          <div>Kebele: {employee.kebele}</div>
          <div>House Number: {employee.houseNo}</div>
        </div>
      </div>
      <div className="card mt-5 m-3 text-dark">
        <p className="fs-5">Experience</p>
        <div className="card_body fs-6">
          <ul>
            {employee.experiences.map((exp, index) => (
              <li key={index}>
                {exp.position} at {exp.companyName}
                From {exp.experienceStartDate} to {exp.experienceEndDate}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card mt-5 me-3 text-dark">
        <p className="text-dark fs-5">Child Information</p>
        <div className="card_body fs-6">
          <ul>
            {employee.childInformations.map((child, index) => (
              <li key={index}>
                {child.name} - Date of Birth: {child.dateOfBirth}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card mt-5 me-3 text-dark">
        <p className="text-dark fs-5">Contact Person</p>
        <div className="card_body fs-6">
          <ul>
            {employee.contactPersons.map((contact, index) => (
              <li key={index}>
                Name: {contact.name}
                Relationship: {contact.relationship}
                Phone Number: {contact.contactPhoneNo}
                Region: {contact.contactRegion}
                Kebele: {contact.contactKebele}
                House No: {contact.contactHouseNo}
                Woreda: {contact.contactWoreda}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card mt-5 me-3 text-dark">
        <p className="text-dark fs-5">Education</p>
        <div className="card_body fs-6">
          <ul>
            {employee.educations.map((edu, index) => (
              <li key={index}>
                {edu.degree} - {edu.institute}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetail;
// <div className="card mt-5 me-3">
//   <div className="mb-2 fs-5 fw-bold">Name:-{result.name}</div>
//   <div className="card_body">
//     <div className="ms-1 fw-lighter">Address:-{result.address}</div>
//     <div className="ms-1 fw-lighter">Gender:-{result.gender}</div>
//     {/* <div className="ms-1 fw-lighter">Phone:-{result.phoneNo}</div>
//     <div className="ms-1 fw-lighter">Expert:-{result.expert}</div>
//     <div className="ms-1 fw-lighter">
//       Education Level:-{result.educationLevel}
//     </div>
//     <div className="ms-1 fw-lighter">Days:-{result.day}</div>
//     <div className="ms-1 fw-lighter">Time:-{result.time}</div> */}
//     <div>
//       {/* <button className="btn btn-info" onClick={() =>navigate("/singleTeacher/") }>
//         more
//       </button> */}
//       <NavLink to={"/singleTeacher/" + result.id}>
//         <button className="btn btn-outline-primary btn-sm" type="button">
//           more
//         </button>
//       </NavLink>
//     </div>
//   </div>
// </div>
