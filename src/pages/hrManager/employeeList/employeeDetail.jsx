import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const EmployeeDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    fetch(`https://localhost:7140/Employee/${id}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      );
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://localhost:7140/Employee/DeleteEmployee/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        alert("Employee deleted successfully.");
        navigate.push("/employeeList");
      } else {
        alert("Failed to delete the employee.");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
      alert("Error deleting the employee.");
    }
  };
  if (!employee) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <p className="text-dark m-3 fs-5">Employee Detail</p>
      <div className="mb-3 me-3">
        <Link to={`/updateEmployee/${employee.id}`}>
          <button className="btn btn-outline-secondary btn-sm me-2 float-end">
            Update
          </button>
        </Link>
        <button
          className="btn btn-outline-danger btn-sm float-end me-2"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
      <div className="card mt-5 me-3 ms-4 text-dark">
        <div className="card-header">
          <h5>
            {employee.firstName} {employee.lastName}
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong>Employee Id  :</strong> {employee.id}
              </p>
              <p>
                <strong>First Name  :</strong> {employee.firstName}
              </p>
              <p>
                <strong>Last Name  :</strong> {employee.lastName}
              </p>
              <p>
                <strong>Gender  :</strong> {employee.gender}
              </p>
              <p>
                <strong>Mother Name  :</strong> {employee.motherName}
              </p>
              <p>
                <strong>Phone Number  :</strong> {employee.phoneNo}
              </p>
              <p>
                <strong>Marital Status  :</strong> {employee.maritalStatus}
              </p>
              <p>
                <strong>Region  :</strong> {employee.region}
              </p>
              <p>
                <strong>Woreda  :</strong> {employee.woreda}
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong>Kebele  :</strong> {employee.kebele}
              </p>
              <p>
                <strong>House Number  :</strong> {employee.houseNo}
              </p>
              <p>
                <strong>Department  :</strong> {employee.departmentId}
              </p>
              <p>
                <strong>Grade  :</strong> {employee.gradeId}
              </p>
              <p>
                <strong>Branch  :</strong> {employee.branchId}
              </p>
              <p>
                <strong>Degree  :</strong> {employee.degreeId}
              </p>
              <p>
                <strong>Hire Date  :</strong> {formatDate(employee.hireDate)}
              </p>
              <p>
                <strong>Salary  :</strong> {employee.salary}
              </p>
              <p>
                <strong>Roles  :</strong> {employee.roles}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-5 me-3 ms-4 text-dark">
        <div className="card-header">
          <h5>Experience</h5>
        </div>
        <div className="card-body">
          <ul>
            {employee.experiences.map((exp, index) => (
              <li key={index}>
                {exp.position} At {exp.companyName} From{" "}
                {formatDate(exp.experienceStartDate)} to{" "}
                {formatDate(exp.experienceEndDate)}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card mt-5 me-3 ms-4 text-dark">
        <div className="card-header">
          <h5>Child Information</h5>
        </div>
        <div className="card-body">
          <ul>
            {employee.childInformations.map((child, index) => (
              <li key={index}>
                {child.name} - Date of Birth: {formatDate(child.dateOfBirth)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card mt-5 me-3 ms-4 text-dark">
        <div className="card-header">
          <h5>Contact Person</h5>
        </div>
        <div className="card-body">
          <ul>
            {employee.contactPersons.map((contact, index) => (
              <li key={index}>
                <p>
                  <strong>Name  :</strong> {contact.name}
                </p>
                <p>
                  <strong>Relationship  :</strong> {contact.relationship}
                </p>
                <p>
                  <strong>Phone Number  :</strong> {contact.contactPhoneNo}
                </p>
                <p>
                  <strong>Region  :</strong> {contact.contactRegion}
                </p>
                <p>
                  <strong>Kebele  :</strong> {contact.contactKebele}
                </p>
                <p>
                  <strong>House No  :</strong> {contact.contactHouseNo}
                </p>
                <p>
                  <strong>Woreda  :</strong> {contact.contactWoreda}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="card mt-5 me-3 ms-4 text-dark">
        <div className="card-header">
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
};
export default EmployeeDetail;
