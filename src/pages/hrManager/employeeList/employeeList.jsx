import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from "react";

const EmployeeList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(id) {
    let result = await fetch("http://127.0.0.1:8000/api/deleteTeacher/" + id, {
      method: "DELETE",
    });

    result = await result.json();
    getData();
  }
  async function getData() {
    let result = await fetch("http://127.0.0.1:8000/api/listTeachers");
    result = await result.json();
    setData(result);
  }

  return (
    <>
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
            <tr key={employee.id}>
              {Object.values(employee).map((item, index) => (
                <td key={index}>{item}</td>
              ))}
              <td>
                <NavLink to={"/updateEmployeeBasic/" + employee.id}>
                  <button className="btn btn-outline-info btn-sm" type="button">
                    Edit
                  </button>
                </NavLink>
                <button
                  onClick={() => deleteOperation(employee.id)}
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
