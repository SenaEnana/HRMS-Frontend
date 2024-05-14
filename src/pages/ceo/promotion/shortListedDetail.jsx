import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ShortListedDetail = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let result = await fetch("https://localhost:7140/Employee/ListEmployees");
    result = await result.json();
    setData(result);
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
                  <Link to={`/promoteEmployee`}>
                    <button className="btn btn-outline-secondary btn-sm">
                      Promote
                    </button>
                  </Link>
                  <button className="btn btn-outline-danger btn-sm">
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
