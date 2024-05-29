import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const CandidateList = () => {
  const [data, setData] = useState([]);
  const { jobId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let result = await fetch(
      `http://localhost:5100/Promotion/JobCandidates/${jobId}`
    );
    result = await result.json();
    setData(result);
    setLoading(false);
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  
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
                  {
                    <Link to={`/candidateDetail/${employee.id}`}>
                      <button className="btn btn-outline-secondary btn-sm">
                        Detail
                      </button>
                    </Link>
                  }
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
