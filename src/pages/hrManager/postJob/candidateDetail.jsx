// CandidateDetail.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const CandidateDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://localhost:52339/Employee/${id}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      );
  }, [id]);

  const shortListCandidate = async (employeeId) => {
    try {
      const response = await fetch(
        `https://localhost:52339/Promotion/ShortlistCandidate/${employeeId}`,
        {
          method: "POST",
        }
      );
      if (response.ok) {
        alert("Employee shortListed successfully.");
        navigate("/candidateList");
      } else {
        alert("Failed to shortlist employee.");
      }
    } catch (error) {
      console.error("Error shortListing employee:", error);
      alert("Error shortListing the employee.");
    }
  };

  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="card mt-5 me-3 text-dark">
        <div className="card-header text-white">
          <h5>
            {employee.firstName} {employee.lastName}
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong>Employee Id:</strong> {employee.id}
              </p>
              <p>
                <strong>First Name:</strong> {employee.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {employee.lastName}
              </p>
              <p>
                <strong>Gender:</strong> {employee.gender}
              </p>
              <p>
                <strong>Mother Name:</strong> {employee.motherName}
              </p>
              <p>
                <strong>Phone Number:</strong> {employee.phoneNo}
              </p>
              <p>
                <strong>Marital Status:</strong> {employee.maritalStatus}
              </p>
              <p>
                <strong>Region:</strong> {employee.region}
              </p>
              <p>
                <strong>Woreda:</strong> {employee.woreda}
              </p>
            </div>
            <div className="col-md-6">
              <p>
                <strong>Kebele:</strong> {employee.kebele}
              </p>
              <p>
                <strong>House Number:</strong> {employee.houseNo}
              </p>
              <p>
                <strong>Department:</strong> {employee.departmentId}
              </p>
              <p>
                <strong>Grade:</strong> {employee.gradeId}
              </p>
              <p>
                <strong>Branch:</strong> {employee.branchId}
              </p>
              <p>
                <strong>Degree:</strong> {employee.degreeId}
              </p>
              <p>
                <strong>Hire Date:</strong> {employee.hireDate}
              </p>
              <p>
                <strong>Salary:</strong> {employee.salary}
              </p>
              <p>
                <strong>Roles:</strong> {employee.roles}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="card mt-5 m-3 text-dark">
        <div className="card-header text-white">
          <h5>Experience</h5>
        </div>
        <div className="card-body">
          <ul>
            {employee.experiences.map((exp, index) => (
              <li key={index}>
                {exp.position} at {exp.companyName} from{" "}
                {exp.experienceStartDate} to {exp.experienceEndDate}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card mt-5 me-3 text-dark">
        <div className="card-header text-white">
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
        <div className="card-header text-white">
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
      <div className="card mt-5 me-3 text-dark">
        <div className="card-header text-white">
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
      <div>
        <Link to={`/candidateList`}>
          <button className="btn btn-outline-danger btn-sm">Back</button>
        </Link>
        <button
          className="btn btn-outline-secondary btn-sm float-end"
          onClick={() => shortListCandidate(employee.id)}
        >
          ShortList
        </button>
      </div>
    </>
  );
};

export default CandidateDetail;

// <button
// onClick={() => applyOperation(job.id)}
// className="btn btn-outline-secondary btn-sm"
// type="button"
// >
// Apply
// </button>
// <Link to={`/postedJob`}>
// <button className="btn btn-outline-danger btn-sm">
//   Back
// </button>
// </Link>

// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// const CandidateDetail = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     getData();
//   }, []);

//   async function getData() {
//     let result = await fetch("https://localhost:7140/Employee/ListEmployees");
//     result = await result.json();
//     setData(result);
//   }

//   return (
//     <>
//       <div className="container mt-5">
//         <div className="d-flex justify-content-between text-dark mb-3">
//           <h5 className="text-start">Candidate List</h5>
//         </div>
//         <table className="table table-hover text-dark w-100 fs-6">
//           <thead>
//             <tr>
//               <th>Employee Id</th>
//               <th>First Name</th>
//               <th>Last Name</th>
//               <th>Gender</th>
//               <th>Mother Name</th>
//               <th>Phone Number</th>
//               <th>Role</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((employee) => (
//               <tr key={employee.id}>
//                 <td>{employee.emp_Id}</td>
//                 <td>{employee.firstName}</td>
//                 <td>{employee.lastName}</td>
//                 <td>{employee.gender}</td>
//                 <td>{employee.motherName}</td>
//                 <td>{employee.phoneNo}</td>
//                 <td>{employee.role}</td>
//                 <td>
//                   <button className="btn btn-outline-secondary btn-sm">
//                     ShortList
//                   </button>
// <Link to={`/candidateList`}>
//   <button className="btn btn-outline-danger btn-sm">
//     Back
//   </button>
// </Link>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default CandidateDetail;
