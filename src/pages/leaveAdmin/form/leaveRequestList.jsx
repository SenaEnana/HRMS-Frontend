import { useState, useEffect } from "react";

function LeaveRequestList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    getData();
  }, []);

  async function approveOperation(leaveId) {
    let result = await fetch(
      `https://localhost:7140/api/Leave/ApproveLeave/${leaveId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (result.ok) {
      getData();
      alert("Approved successfully");
    } else {
      alert("Failed to approve leave request");
    }
  }
  async function rejectOperation(leaveId) {
    let result = await fetch(
      `https://localhost:7140/api/Leave/RejectLeave/${leaveId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (result.ok) {
      getData();
      alert("Rejected successfully");
    } else {
      alert("Failed to reject leave request");
    }
  }
  async function getData() {
    let result = await fetch(
      "https://localhost:7140/api/Leave/GetPendingLeaveRequests"
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
        <h5 className="text-start ms-2">Pending Leave Requests</h5>
      </div>
      <table className="table table-hover text-dark w-100 fs-6">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.employeeId}</td>
              <td>{formatDate(employee.startDate)}</td>
              <td>{formatDate(employee.endDate)}</td>
              <td>{employee.reason}</td>
              <td>{employee.status}</td>
              <td>
                <button
                  onClick={() => approveOperation(employee.id)}
                  className="btn btn-outline-secondary btn-sm"
                  type="button"
                >
                  Approve
                </button>
                <button
                  onClick={() => rejectOperation(employee.id)}
                  className="btn btn-outline-danger ms-1 btn-sm"
                  type="button"
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

export default LeaveRequestList;
