import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const employees = [
  {
    hireDate: "2001/03/02",
    grade: "2",
    position: "Employee",
    department: "Finance",
    salary: "93999",
    branch: "Tebase",
    degree: "Bsc",
    childName: "Kaleb",
  },
  {
    hireDate: "2001/03/02",
    grade: "2",
    position: "Employee",
    department: "Finance",
    salary: "93999",
    branch: "Tebase",
    degree: "Bsc",
    childName: "Kaleb",
  },
  {
    hireDate: "2001/03/02",
    grade: "2",
    position: "Employee",
    department: "Finance",
    salary: "93999",
    branch: "Tebase",
    degree: "Bsc",
    childName: "Kaleb",
  },
  {
    hireDate: "2001/03/02",
    grade: "2",
    position: "Employee",
    department: "Finance",
    salary: "93999",
    branch: "Tebase",
    degree: "Bsc",
    childName: "Kaleb",
  },
];

const EmployeeAddList = () => {
  const [employeeData, setEmployeeData] = useState(employees);

  const handleDelete = (id) => {
    const filteredEmployees = employeeData.filter(
      (employee) => employee.id !== id
    );
    setEmployeeData(filteredEmployees);
  };

  const handleEdit = (id) => {
    console.log(`Edit employee with ID: ${id}`);
  };

  return (
    <>
      <div className="d-flex justify-content-between mt-5 text-dark">
        <h5 className="text-start ms-2">Additional Information</h5>
      </div>
      <table className="table table-hover text-dark w-100 fs-6">
        <thead className="p-1">
          <tr>
            <th>Hire Date</th>
            <th>Grade</th>
            <th>Position</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Branch</th>
            <th>Degree</th>
            <th>ChildName</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.hireDate}</td>
              <td>{employee.grade}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
              <td>{employee.branch}</td>
              <td>{employee.degree}</td>
              <td>{employee.childName}</td>
              <td className="d-flex m-1">
                <NavLink to={"/updateEmployeeAdd/" + employee.id}>
                  <button
                    onClick={() => handleEdit(employee.id)}
                    className="btn btn-outline-info btn-sm"
                    type="button"
                  >
                    Edit
                  </button>
                </NavLink>
                <button
                  onClick={() => handleDelete(employee.id)}
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

export default EmployeeAddList;
