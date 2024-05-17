import { useState, useEffect } from "react";

function PostedJob() {
  const [data, setData] = useState([]);

  async function applyForJob(jobId) {
    let result = await fetch(
      `https://localhost:7140/Promotion/ApplyForJob/${jobId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    getData();
    alert("applied successfully");
    console.log(result)
  }
  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let result = await fetch("https://localhost:7140/Promotion/PostedJobs");
    result = await result.json();
    setData(result);
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
            <th>Position Id</th>
            <th>Position</th>
            <th>Description</th>
            <th>Requirement</th>
            <th>Posting Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((job) => (
            <tr key={job.id}>
              <td>{job.jobTitle}</td>
              <td>{job.positionId}</td>
              <td>{job.position}</td>
              <td>{job.description}</td>
              <td>{job.requirement}</td>
              <td>{job.postingDate}</td>
              <td>
                <button
                  onClick={() => applyForJob(job.id)}
                  className="btn btn-outline-secondary btn-sm"
                  type="button"
                >
                  Apply
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PostedJob;

// <table className="table table-hover text-dark w-100 fs-6">
// <thead>
//   <tr>
//     <th>Employee Id</th>
//     <th>Leave Type</th>
//     <th>Start Date</th>
//     <th>End Date</th>
//     <th>Reason</th>
//     <th></th>
//   </tr>
// </thead>
// <tbody>
//   {data.map((employee) => {
//     const employeeId = employee.id;
//     return (
//       <tr key={employeeId}>
//         {Object.values(employee).map((item, index) => (
//           <td key={index}>{item}</td>
//         ))}
//         <td>
//   <button
//   onClick={() => approveOperation(employeeId)}
//   className="btn btn-outline-secondary btn-sm"
//   type="button"
// >
//   Approve
// </button>
//           <button
//             onClick={() => rejectOperation(employeeId)}
//             className="btn btn-outline-danger ms-1 btn-sm"
//             type="button"
//           >
//             Reject
//           </button>
//         </td>
//       </tr>
//     );
//   })}
// </tbody>
// </table>
