import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Topbar from "../../commonPages/topbar";

const EmployeeList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(Id) {
    let result = await fetch(
      `https://localhost:7140/Employee/DeleteEmployee/${Id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    getData();
  }

  async function getData() {
    let result = await fetch("https://localhost:7140/Employee/ListEmployees");
    result = await result.json();
    console.log(result);
    setData(result);
  }

  return (
    <>
      <Topbar />
      <div className="d-flex justify-content-between mt-5 text-dark">
        <h5 className="text-start ms-2">Employee List</h5>
        <NavLink
          to={"/employeeBasic"}
          className="float-end btn btn-info btn-sm mb-2"
        >
          Add new Employee
        </NavLink>
      </div>
      <table className="table table-hover text-dark w-100 fs-6">
        <thead>
          <tr>
            <th>Id</th>
            <th>Employee Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Mother Name</th>
            <th>Phone Number</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => {
            const employeeId = employee.id;
            return (
              <tr key={employeeId}>
                {Object.values(employee).map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
                <td>
                  <NavLink to={"/updateEmployeeBasic/" + employeeId}>
                    <button
                      className="btn btn-outline-info btn-sm"
                      type="button"
                    >
                      Detail
                    </button>
                  </NavLink>
                  <button
                    onClick={() => deleteOperation(employeeId)}
                    className="btn btn-outline-danger ms-1 btn-sm"
                    type="button"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
