import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

const CandidateList = () => {
  const [data, setData] = useState([]);
  const { jobId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);
  async function shortListCandidate(employeeId) {
    let result = await fetch(
      `https://localhost:7140/Promotion/ShortlistCandidate/${employeeId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    getData();
    if (result.ok) {
    alert("shortListed successfully");
    }
  }
  async function getData() {
    let result = await fetch(`https://localhost:7140/Promotion/JobCandidates/${jobId}`);
    result = await result.json();
    setData(result);
  }

    // const shortListCandidate = async (employeeId) => {
  //   try {
  //     const response = await fetch(
  //       `https://localhost:7140/Promotion/ShortlistCandidate/${employeeId}`,
  //       {
  //         method: "POST",
  //       }
  //     );
  //     if (response.ok) {
  //       alert("Employee shortListed successfully.");
  //       navigate("/candidateList");
  //     } else {
  //       alert("Failed to delete the employee.");
  //     }
  //   } catch (error) {
  //     console.error("Error shortListing employee:", error);
  //     alert("Error shortListing the employee.");
  //   }
  // };

  // useEffect(() => {
  //   fetch(`https://localhost:7140/Promotion/JobCandidates/${jobId}`)
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((error) => console.error("Error fetching employee:", error));
  // }, [jobId]);

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-between text-dark mb-3">
          <h5 className="text-start">Candidate List</h5>
        </div>
        <table className="table table-hover text-dark w-100 fs-6">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Role</th>
              <th>Phone Number</th>
              <th>Email Address</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.employeeId}</td>
                <td>{employee.employeeName}</td>
                <td>{employee.employeeLastName}</td>
                <td>{employee.employeeRole}</td>
                <td>{employee.employeeNo}</td>
                <td>{employee.employeeEmail}</td>
                <td>
                  {/* <Link to={`/candidateDetail/${employee.id}`}>
                    <button className="btn btn-outline-secondary btn-sm">
                      Detail
                    </button>
                  </Link> */}
                  <button
                    className="btn btn-outline-secondary btn-sm float-end"
                    onClick={() => shortListCandidate(employee.id)}
                  >
                    ShortList
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

export default CandidateList;
