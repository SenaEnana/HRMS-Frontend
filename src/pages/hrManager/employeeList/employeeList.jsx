import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const employees = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    gender: "Male",
    motherName: "Jane Doe",
    region: "Addis Ababa",
    kebele: "01",
    wereda: "Kirkos",
    maritalStatus: "Single",
    phoneNumber: "+251912345678",
    houseNumber: "123/A",
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    email: "jane.smith@example.com",
    gender: "Female",
    motherName: "Mary Smith",
    region: "Amhara",
    kebele: "02",
    wereda: "Gondar",
    maritalStatus: "Married",
    phoneNumber: "+251987654321",
    houseNumber: "456/B",
  },
  {
    id: 3,
    firstName: "John",
    lastName: "Doe",
    email: "john.doe@example.com",
    gender: "Male",
    motherName: "Jane Doe",
    region: "Addis Ababa",
    kebele: "01",
    wereda: "Kirkos",
    maritalStatus: "Single",
    phoneNumber: "+251912345678",
    houseNumber: "123/A",
  },
];

const EmployeeList = () => {
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
        <h5 className="text-start ms-2">Employee List</h5>
        <NavLink
          to={"/employeeBasic"}
          className="float-end btn btn-info btn-sm mb-2"
        >
          Add new Employee
        </NavLink>
      </div>
      <div className="rounded-2 border w-100">
        <table className="table table-hover text-dark">
          <thead className="p-1">
            <tr>
              <th>Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Mother Name</th>
              <th>Region</th>
              <th>Kebele</th>
              <th>Wereda</th>
              <th>Marital Status</th>
              <th>Phone Number</th>
              <th>House Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employeeData.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.gender}</td>
                <td>{employee.motherName}</td>
                <td>{employee.region}</td>
                <td>{employee.kebele}</td>
                <td>{employee.wereda}</td>
                <td>{employee.maritalStatus}</td>
                <td>{employee.phoneNumber}</td>
                <td>{employee.houseNumber}</td>
                <td>
                  <NavLink to={"/updateEmployee/" + employee.id}>
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
      </div>
    </>
  );
};

export default EmployeeList;
