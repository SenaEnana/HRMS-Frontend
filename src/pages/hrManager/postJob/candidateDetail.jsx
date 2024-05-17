// CandidateDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const CandidateDetail = () => {
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

export default CandidateDetail;






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
//                   <Link to={`/candidateList`}>
//                     <button className="btn btn-outline-danger btn-sm">
//                       Back
//                     </button>
//                   </Link>
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
