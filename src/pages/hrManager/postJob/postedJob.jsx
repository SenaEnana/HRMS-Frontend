import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PostedJob() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let result = await fetch("https://localhost:52339/Promotion/PostedJobs");
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
            <th>Position</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((job) => (
            <tr key={job.id}>
              <td>{job.jobTitle}</td>
              <td>{job.positionId}</td>
              <td>
                <Link to={`/candidateList/${job.id}`}>
                  <button className="btn btn-outline-secondary btn-sm">
                    Candidates
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PostedJob;
