import { useState, useEffect } from "react";

function ResignationList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  //Below are not correct link for approved and rejected request and list
  async function approveOperation(resignationId) {
    let result = await fetch(
      `https://localhost:7140/Resignation/ApproveResignation/${resignationId}`,
      {
        method: "POST",
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

  async function rejectOperation(resignationId) {
    let result = await fetch(
      `https://localhost:7140/Resignation/RejectResignation/${resignationId}`,
      {
        method: "POST",
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
    let result = await fetch(
      "https://localhost:7140/Resignation/ListOfResignationRequests"
    );
    result = await result.json();
    console.log(result);
    setData(result);
  }
  return (
    <>
      <div className="d-flex justify-content-between mt-5 text-dark">
        <h5 className="text-start ms-2">Pending Resignation Requests</h5>
      </div>
      <table className="table table-hover text-dark w-100 fs-6">
        <thead>
          <tr>
            <th>Employee Id</th>
            <th>Full Name</th>
            <th>Department</th>
            <th>Position</th>
            <th>Employee Hire Date</th>
            <th>Separation Date</th>
            <th>Reason</th>
            <th>Satisfaction</th>
            <th>Employee Relationship</th>
            <th>Recommendation</th>
            <th>Comment</th>
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
                    className="btn btn-outline-secondary btn-sm"
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
  );
}

export default ResignationList;
