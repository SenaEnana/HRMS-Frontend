import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function PostedJob() {
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

  async function applyForJobOperation(Id) {
    let result = await fetch(`https://localhost:7140/LeaveType/${Id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    getData();
  }

  return (
    <>
      <div className="d-flex justify-content-between mt-5 text-dark">
        <h5 className="text-start ms-2">Posted Jobs</h5>
      </div>
      <table className="table table-hover text-dark w-100 fs-6">
        <thead>
          <tr>
            <th>Job Title</th>
            <th>Position</th>
            <th>Description</th>
            <th>Requirement</th>
          </tr>
        </thead>
        <tbody>
          {data.map((job) => {
            const jobId = job.id;
            return (
              <tr key={jobId}>
                {Object.values(job).map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
                <td>
                <button
                    onClick={() => applyForJobOperation(jobId)}
                    className="btn btn-outline-info ms-1 btn-sm"
                    type="button"
                  >
                    Apply
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

export default PostedJob;
