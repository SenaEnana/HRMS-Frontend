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
      <div className="card mt-5 me-3 text-dark">
        <div className="card-header bg-primary text-white">
          <h5>{employee.firstName} {employee.lastName}</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p><strong>Employee Id:</strong> {employee.id}</p>
              <p><strong>First Name:</strong> {employee.firstName}</p>
              <p><strong>Last Name:</strong> {employee.lastName}</p>
              <p><strong>Gender:</strong> {employee.gender}</p>
              <p><strong>Mother Name:</strong> {employee.motherName}</p>
              <p><strong>Phone Number:</strong> {employee.phoneNo}</p>
              <p><strong>Marital Status:</strong> {employee.maritalStatus}</p>
            </div>
            <div className="col-md-6">
              <p><strong>Region:</strong> {employee.region}</p>
              <p><strong>Woreda:</strong> {employee.woreda}</p>
              <p><strong>Kebele:</strong> {employee.kebele}</p>
              <p><strong>House Number:</strong> {employee.houseNo}</p>
              <p><strong>Department:</strong> {employee.departmentId}</p>
              <p><strong>Grade:</strong> {employee.gradeId}</p>
              <p><strong>Branch:</strong> {employee.branchId}</p>
              <p><strong>Degree:</strong> {employee.degreeId}</p>
              <p><strong>Hire Date:</strong> {employee.hireDate}</p>
              <p><strong>Salary:</strong> {employee.salary}</p>
              <p><strong>Roles:</strong> {employee.roles}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-5 m-3 text-dark">
        <div className="card-header bg-secondary text-white">
          <h5>Experience</h5>
        </div>
        <div className="card-body">
          <ul>
            {employee.experiences.map((exp, index) => (
              <li key={index}>
                {exp.position} at {exp.companyName} from {exp.experienceStartDate} to {exp.experienceEndDate}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card mt-5 me-3 text-dark">
        <div className="card-header bg-secondary text-white">
          <h5>Child Information</h5>
        </div>
        <div className="card-body">
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
        <div className="card-header bg-secondary text-white">
          <h5>Contact Person</h5>
        </div>
        <div className="card-body">
          <ul>
            {employee.contactPersons.map((contact, index) => (
              <li key={index}>
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Relationship:</strong> {contact.relationship}</p>
                <p><strong>Phone Number:</strong> {contact.contactPhoneNo}</p>
                <p><strong>Region:</strong> {contact.contactRegion}</p>
                <p><strong>Kebele:</strong> {contact.contactKebele}</p>
                <p><strong>House No:</strong> {contact.contactHouseNo}</p>
                <p><strong>Woreda:</strong> {contact.contactWoreda}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card mt-5 me-3 text-dark">
        <div className="card-header bg-secondary text-white">
          <h5>Education</h5>
        </div>
        <div className="card-body">
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
}
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
