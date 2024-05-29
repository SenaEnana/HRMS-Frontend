import React, { useState, useEffect } from "react";

function ResignationList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [disabledButtons, setDisabledButtons] = useState({});
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    getData();
    const storedDisabledButtons = JSON.parse(localStorage.getItem("disabledButtons")) || {};
    setDisabledButtons(storedDisabledButtons);
  }, []);
  const updateDisabledButtons = (resignationId, action) => {
    const updatedDisabledButtons = {
      ...disabledButtons,
      [resignationId]: {
        ...(disabledButtons[resignationId] || {}),
        [action]: true,
      },
    };
    setDisabledButtons(updatedDisabledButtons);
    localStorage.setItem("disabledButtons", JSON.stringify(updatedDisabledButtons));
  };
  async function approveOperation(resignationId) {
    let result = await fetch(
      `http://localhost:5100/Resignation/ApproveResignation/${resignationId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (result.ok) {
      alert("Approved successfully");
      updateDisabledButtons(resignationId, "approve");
      getData();
    } else {
      alert("Failed to approve");
    }
  }
  async function rejectOperation(resignationId) {
    let result = await fetch(
      `http://localhost:5100/Resignation/RejectResignation/${resignationId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (result.ok) {
      alert("Rejected successfully");
      updateDisabledButtons(resignationId, "reject");
      getData();
    } else {
      alert("Failed to reject");
    }
  }
  async function getData() {
    let result = await fetch(
      "http://localhost:5100/Resignation/ListOfResignationRequests"
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
      <div className="d-flex justify-content-between mt-5 text-dark">
        <h5 className="text-start ms-2">Pending Resignation Requests</h5>
      </div>
      <table className="table table-hover text-dark w-100 fs-6">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Hire Date</th>
            <th>Resign Date</th>
            <th>Reason</th>
            <th>Satisfaction</th>
            <th>Relationship</th>
            <th>Recommendation</th>
            <th>Comment</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.employeeId}</td>
              <td>{employee.fullName}</td>
              <td>{employee.positionId}</td>
              <td>{employee.departmentId}</td>
              <td>{formatDate(employee.employeeHireDate)}</td>
              <td>{formatDate(employee.separationDate)}</td>
              <td>{employee.reason}</td>
              <td>{employee.satisfaction}</td>
              <td>{employee.employeeRelationship}</td>
              <td>{employee.recommendation}</td>
              <td>{employee.comment}</td>
              <td>
                <button
                  onClick={() => approveOperation(employee.id)}
                  className="btn btn-outline-secondary btn-sm float-end m-1 p-1"
                  type="button"
                  disabled={disabledButtons[employee.id]?.approve}
                >
                  Approve
                </button>
                <button
                  onClick={() => rejectOperation(employee.id)}
                  className="btn btn-outline-danger btn-sm float-end m-1 p-1"
                  type="button"
                  disabled={disabledButtons[employee.id]?.reject}
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ResignationList;
