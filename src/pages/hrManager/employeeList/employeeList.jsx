import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Topbar from "../../commonPages/topbar";

const EmployeeList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(id) {
    let result = await fetch(
      "https://localhost:7140/Employee/DeleteEmployee/" + id,
      {
        method: "DELETE",
      }
    );
    console.log(result);
    result = await result.json();
    getData();
  }
  async function getData() {
    let result = await fetch("https://localhost:7140/Employee/ListEmployees");
    result = await result.json();
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
        <tr>
          <th>Employee Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Gender</th>
          <th>Mother Name</th>
          <th>Phone Number</th>
          <th></th>
        </tr>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.emp_Id}>
              {Object.values(employee).map((item, index) => (
                <td key={index}>{item}</td>
              ))}
              <td>
                <NavLink to={"/updateEmployeeBasic/" + employee.emp_Id}>
                  <button className="btn btn-outline-info btn-sm" type="button">
                    Detail
                  </button>
                </NavLink>
                <button
                  onClick={() => deleteOperation(employee.emp_Id)}
                  className="btn btn-outline-danger ms-1 btn-sm"
                  type="button"
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default EmployeeList;
