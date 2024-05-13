// EmployeeDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Topbar from "../../commonPages/topbar";

const EmployeeDetail = () => {
  const { employeeId } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    fetch(`https://localhost:7140/Employee/${employeeId}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      );
  }, [employeeId]);

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
          <p>Education Degree: {employee.degree}</p>
          <p>Institute: {employee.institute}</p>
          <p>Company Name: {employee.companyName}</p>
          <p>Experience Position: {employee.experiencePosition}</p>
          <p>Education Start Date: {employee.experienceStartDate}</p>
          <p>Experience End Date: {employee.experienceEndDate}</p>
          <p>Contact Person Name: {employee.contactPersonName}</p>
          <p>Relationship: {employee.relationship}</p>
          <p>Contact Phone Number: {employee.contactPhoneNo}</p>
          <p>Contact Region: {employee.contactRegion}</p>
          <p>Contact Woreda: {employee.contactWoreda}</p>
          <p>Contact Kebele: {employee.contactKebele}</p>
          <p>Contact House Number: {employee.contactHouseNo}</p>
          <p>Child Name: {employee.childName}</p>
          <p>Child Date Of Birth: {employee.dateOfBirth}</p>
        </div>
      </div>
    </>
  );
};

export default EmployeeDetail;
