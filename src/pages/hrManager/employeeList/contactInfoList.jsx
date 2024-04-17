import { NavLink } from "react-router-dom";
import React, { useState } from "react";

const employees = [
  {
    name: "John",
    region: "Addis Ababa",
    kebele: "01",
    wereda: "Kirkos",
    phoneNumber: "+251912345678",
    houseNumber: "123/A",
    relationship: "Uncle",
  },
  {
    name: "Jane",
    region: "Amhara",
    kebele: "02",
    wereda: "Gondar",
    phoneNumber: "+251987654321",
    houseNumber: "456/B",
    relationship: "Uncle",
  },
  {
    name: "John",
    lastName: "Doe",
    region: "Addis Ababa",
    kebele: "01",
    wereda: "Kirkos",
    phoneNumber: "+251912345678",
    houseNumber: "123/A",
    relationship: "Uncle",
  },
  {
    name: "Jeje",
    region: "Addis Ababa",
    kebele: "01",
    wereda: "Kirkos",
    phoneNumber: "+251912345678",
    houseNumber: "123/A",
    relationship: "Uncle",
  },
];

const ContactInfoList = () => {
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
        <h5 className="text-start ms-2">Employee Contact Person</h5>
      </div>
      <table className="table table-hover text-dark w-100 fs-6">
        <thead className="p-1">
          <tr>
            <th>Name</th>
            <th>Region</th>
            <th>Kebele</th>
            <th>Wereda</th>
            <th>Phone Number</th>
            <th>House Number</th>
            <th>Relationship</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.region}</td>
              <td>{employee.kebele}</td>
              <td>{employee.wereda}</td>
              <td>{employee.relationship}</td>
              <td>{employee.phoneNumber}</td>
              <td>{employee.houseNumber}</td>
              <td className="d-flex m-1">
                <NavLink to={"/updateContactInfo/" + employee.id}>
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

export default ContactInfoList;
