import { useState, useEffect } from "react";

function LeaveRequestList(){
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
//Below are not correct link for approved and rejected leave request and also the list of the request
  async function approveOperation(Id) {
    let result = await fetch(
      `https://localhost:7140/Employee/ApproveRequest/${Id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    getData();
    alert("approved successfully");
  }

  async function rejectOperation(Id) {
    let result = await fetch(
      `https://localhost:7140/Employee/RejectRequest/${Id}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    result = await result.json();
    getData();
    alert("rejected successfully");
  }

  async function getData() {
    let result = await fetch("https://localhost:7140/Employee/ListLeaveRequests");
    result = await result.json();
    console.log(result);
    setData(result);
  }
  return(
    <>
    <div className="d-flex justify-content-between mt-5 text-dark">
      <h5 className="text-start ms-2">Leave Request List</h5>
    </div>
    <table className="table table-hover text-dark w-100 fs-6">
      <thead>
        <tr>
          <th>Employee Id</th>
          <th>Leave Type</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Reason</th>
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
                  <button
                  onClick={() => approveOperation(employeeId)}
                  className="btn btn-outline-info btn-sm"
                  type="button"
                >
                  Approve
                </button>
                <button
                  onClick={() => rejectOperation(employeeId)}
                  className="btn btn-outline-danger ms-1 btn-sm"
                  type="button"
                >
                  Reject
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </>
  )
}

export default LeaveRequestList;

