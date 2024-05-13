// EmployeeDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Topbar from "../../commonPages/topbar";

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
      <Topbar />
      <div className="container mt-5 text-dark">
        <h2>Employee Details</h2>
        <div>
          <p>Employee Id: {employee.id}</p>
          <p>First Name: {employee.firstName}</p>
          <p>Last Name: {employee.lastName}</p>
          <p>Gender: {employee.gender}</p>
          <p>Mother Name: {employee.motherName}</p>
          <p>Phone Number: {employee.phoneNo}</p>
          <p>Marital Status: {employee.maritalStatus}</p>
          <p>Region: {employee.region}</p>
          <p>Woreda: {employee.woreda}</p>
          <p>Kebele: {employee.kebele}</p>
          <p>House Number: {employee.houseNo}</p>
          <p>Department: {employee.departmentId}</p>
          <p>Grade: {employee.gradeId}</p>
          <p>Branch: {employee.branchId}</p>
          <p>Degree: {employee.degreeId}</p>
          <p>Hire Date: {employee.hireDate}</p>
          <p>Salary: {employee.salary}</p>
          <p>Roles: {employee.roles}</p>
          <p>Region: {employee.region}</p>
          <p>Woreda: {employee.woreda}</p>
          <p>Kebele: {employee.kebele}</p>
          <p>House Number: {employee.houseNo}</p>
           
          <p>Experience:</p>
          <ul>
            {employee.experiences.map((exp, index) => (
              <li key={index}>
                {exp.position} at {exp.companyName}
                From {exp.experienceStartDate} to {exp.experienceEndDate}
              </li>
            ))}
          </ul>
          <p>Child Information:</p>
          <ul>
            {employee.childInformations.map((child, index) => (
              <li key={index}>
                {child.name} - Date of Birth: {child.dateOfBirth}
              </li>
            ))}
          </ul>
          <p>Contact Person:</p>
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
          <p>Education:</p>
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
