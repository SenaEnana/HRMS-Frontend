import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const ShortListedDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  const [disabledButtons, setDisabledButtons] = useState({
    promote: false,
    reject: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://localhost:7140/Employee/${id}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      );

    const storedDisabledButtons = JSON.parse(
      localStorage.getItem(`disabledButtons-${id}`)
    ) || {
      promote: false,
      reject: false,
    };
    setDisabledButtons(storedDisabledButtons);
  }, [id]);

  const updateDisabledButtons = (action) => {
    const updatedDisabledButtons = {
      ...disabledButtons,
      [action]: true,
    };
    setDisabledButtons(updatedDisabledButtons);
    localStorage.setItem(
      `disabledButtons-${id}`,
      JSON.stringify(updatedDisabledButtons)
    );
  };

  const rejectEmployee = async (employeeId) => {
    try {
      const response = await fetch(
        `https://localhost:7140/Promotion/RejectCandidate/${employeeId}`,
        {
          method: "POST",
        }
      );
      if (response.ok) {
        alert("Employee rejected successfully.");
        updateDisabledButtons("reject");
        navigate("/shortListed");
      } else {
        alert("Failed to reject employee.");
      }
    } catch (error) {
      console.error("Error rejecting employee:", error);
      alert("Error rejecting employee.");
    }
  };

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <p className="text-dark m-3 fs-5">ShortListed Candidate Detail</p>
      <div className="mt-1 me-3">
        <Link to={`/promoteEmployee/${employee.id}`}>
          <button
            className="btn btn-secondary btn-sm me-2 float-end mb-3"
            onClick={() => updateDisabledButtons("promote")}
            disabled={disabledButtons.promote}
          >
            Promote
          </button>
        </Link>
        <button
          className="btn btn-danger btn-sm me-2 float-end mb-3"
          onClick={() => rejectEmployee(employee.id)}
          disabled={disabledButtons.reject}
        >
          Reject
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
                <strong>Employee Id : </strong> {employee.id}
              </p>
              <p>
                <strong>First Name : </strong> {employee.firstName}
              </p>
              <p>
                <strong>Last Name : </strong> {employee.lastName}
              </p>
              <p>
                <strong>Gender : </strong> {employee.gender}
              </p>
              <p>
                <strong>Mother Name : </strong> {employee.motherName}
              </p>
              <p>
                <strong>Phone Number : </strong> {employee.phoneNo}
              </p>
              <p>
                <strong>Marital Status : </strong> {employee.maritalStatus}
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong>Region : </strong> {employee.region}
              </p>
              <p>
                <strong>Woreda : </strong> {employee.woreda}
              </p>
              <p>
                <strong>Kebele : </strong> {employee.kebele}
              </p>
              <p>
                <strong>House Number:</strong> {employee.houseNo}
              </p>
              <p>
                <strong>Hire Date :</strong> {formatDate(employee.hireDate)}
              </p>
              <p>
                <strong>Salary :</strong> {employee.salary}
              </p>
              <p>
                <strong>Roles :</strong> {employee.roles}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mt-5 me-3 ms-4 text-dark">
        <div className="card-header">
          <h5>Experience </h5>
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
          <h5>Child Information </h5>
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
                  <strong className="fs-5">Name:</strong> {contact.name}
                </p>
                <p>
                  <strong>Relationship :</strong> {contact.relationship}
                </p>
                <p>
                  <strong>Phone Number :</strong> {contact.contactPhoneNo}
                </p>
                <p>
                  <strong>Region :</strong> {contact.contactRegion}
                </p>
                <p>
                  <strong>Kebele :</strong> {contact.contactKebele}
                </p>
                <p>
                  <strong>House No :</strong> {contact.contactHouseNo}
                </p>
                <p>
                  <strong>Woreda :</strong> {contact.contactWoreda}
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
                {edu.degree} In {edu.institute}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShortListedDetail;
