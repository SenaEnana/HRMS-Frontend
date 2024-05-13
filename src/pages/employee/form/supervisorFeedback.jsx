import { useState, useEffect } from "react";

function SupervisorFeedback() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  //Below are not correct link for posted jobs
  async function getData() {
    let result = await fetch(
      "https://localhost:7140/api/Leave/GetPendingLeaveRequests"
    );
    result = await result.json();
    console.log(result);
    setData(result);
  }
  return (
    <>
      <div className="d-flex justify-content-between mt-5 text-dark">
        <h5 className="text-start ms-2">Supervisor Feedback</h5>
      </div>
      <table className="table table-hover text-dark w-100 fs-6">
        <thead>
          <tr>
            <th>Improvement Point</th>
            <th>Recommended Action</th>
            <th>Work Expectation</th>
            <th>Problem Faced</th>
            <th>Comments</th>
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default SupervisorFeedback;
