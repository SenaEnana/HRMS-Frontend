import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const CandidateDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();
  const [shortListed, setShortListed] = useState(false);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    fetch(`http://localhost:5100/Employee/${id}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      );
    const shortListedCandidates =
      JSON.parse(localStorage.getItem("shortListedCandidates")) || {};
    if (shortListedCandidates[id]) {
      setShortListed(true);
    }
  }, [id]);

  const shortListCandidate = async (employeeId) => {
    try {
      const response = await fetch(
        `http://localhost:5100/Promotion/ShortlistCandidate/${employeeId}`,
        {
          method: "POST",
        }
      );
      if (response.ok) {
        alert("Employee shortlisted successfully.");
        setShortListed(true);
        const shortListedCandidates =
          JSON.parse(localStorage.getItem("shortListedCandidates")) || {};
        shortListedCandidates[employeeId] = true;
        localStorage.setItem(
          "shortListedCandidates",
          JSON.stringify(shortListedCandidates)
        );

        navigate("/postedJob");
      } else {
        alert("Failed to shortlist employee.");
      }
    } catch (error) {
      console.error("Error shortlisting employee:", error);
      alert("Error shortlisting the employee.");
    }
  };

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <p className="text-dark m-3 fs-5">Candidate Detail</p>
      <div className="mb-3 me-3">
        <button
          className="btn btn-outline-secondary btn-sm me-2 float-end"
          onClick={() => shortListCandidate(employee.id)}
          disabled={shortListed}
        >
          {shortListed ? "Shortlisted" : "ShortList"}
        </button>
        <Link to={`/postedJob`}>
          <button className="btn btn-outline-danger btn-sm float-end me-2">
            Back
          </button>
        </Link>
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
                <strong>Marital Status :</strong> {employee.maritalStatus}
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
                  <strong>Name:</strong> {contact.name}
                </p>
                <p>
                  <strong>Relationship:</strong> {contact.relationship}
                </p>
                <p>
                  <strong>Phone Number:</strong> {contact.contactPhoneNo}
                </p>
                <p>
                  <strong>Region:</strong> {contact.contactRegion}
                </p>
                <p>
                  <strong>Kebele:</strong> {contact.contactKebele}
                </p>
                <p>
                  <strong>House No:</strong> {contact.contactHouseNo}
                </p>
                <p>
                  <strong>Woreda:</strong> {contact.contactWoreda}
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

export default CandidateDetail;
