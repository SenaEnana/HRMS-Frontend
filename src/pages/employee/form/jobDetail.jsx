import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);

  // there is no end point that fetch job by id so i has to be done first before the bellow are not the correct link
  useEffect(() => {
    fetch(`https://localhost:7140/Job/${id}`)
      .then((response) => response.json())
      .then((data) => setJob(data))
      .catch((error) => console.error("Error fetching job details:", error));
  }, [id]);

  if (!job) {
    return <div>Loading...</div>;
  }
  //the button apply should be removed after the employee already applied for that job and we will fix that later
  return (
    <>
      <div className="d-flex justify-content-between mt-5 text-dark">
        <h5 className="text-start ms-2">Posted Job Detail</h5>
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
            <th>Shortlisted Employees</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {job.map((job) => (
            <tr key={job.id}>
              <td>{job.jobTitle}</td>
              <td>{job.positionId}</td>
              <td>{job.position}</td>
              <td>{job.description}</td>
              <td>{job.requirement}</td>
              <td>{job.postingDate}</td>
              <td>{job.shortlistedEmployees}</td>
              <td>
                <button className="btn btn-outline-secondary btn-sm">Apply</button>
                <Link to={`/postedJob`}>
                  <button className="btn btn-outline-danger btn-sm">
                    Back
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
export default JobDetail;
