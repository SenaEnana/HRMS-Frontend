import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const ShortListedDetail = () => {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://localhost:7140/Employee/${id}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      );
  }, [id]);

  const rejectCandidate = async (employeeId) => {
    try {
      const response = await fetch(
        `https://localhost:7140/Promotion/ShortlistCandidate/${employeeId}`,
        {
          method: "POST",
        }
      );
      if (response.ok) {
        alert("Employee rejected successfully.");
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
      <div className="container mt-5">
        <div className="d-flex justify-content-between text-dark mb-3">
          <h5 className="text-start">Shortlisted Candidate Detail</h5>
        </div>
        <table className="table table-hover text-dark w-100 fs-6">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Mother Name</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.emp_Id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.gender}</td>
                <td>{employee.motherName}</td>
                <td>{employee.phoneNo}</td>
                <td>{employee.role}</td>
                <td>
                  <Link to={`/promoteEmployee/${employee.id}`}>
                    <button className="btn btn-outline-secondary btn-sm me-2">
                      Promote
                    </button>
                  </Link>
                  <button
                    className="btn btn-outline-danger btn-sm float-end"
                    onClick={() => rejectCandidate(employee.id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ShortListedDetail;
