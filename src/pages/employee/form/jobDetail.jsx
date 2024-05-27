import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [hasApplied, setHasApplied] = useState(false);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };
  
  useEffect(() => {
    fetch(`http://localhost:5100/Promotion/${id}`)
      .then((response) => response.json())
      .then((data) => setJob(data))
      .catch((error) => console.error("Error fetching job details:", error));
    const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || {};
    if (appliedJobs[id]) {
      setHasApplied(true);
    }
  }, [id]);
  const applyOperation = async (jobId) => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("Token not found in session storage");
        return;
      }
      const isValid = isTokenValid(token);
      if (!isValid) {
        console.error("Invalid token");
        return;
      }
      const userId = getUserIdFromToken(token);
      const result = await fetch(
        `http://localhost:5100/Promotion/ApplyForJob/${jobId}?userId=${userId}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (result.ok) {
        alert("Applied successfully");
        setHasApplied(true);
        const appliedJobs = JSON.parse(localStorage.getItem("appliedJobs")) || {};
        appliedJobs[jobId] = true;
        localStorage.setItem("appliedJobs", JSON.stringify(appliedJobs));
      } else {
        console.error("Failed to apply for job");
      }
    } catch (error) {
      console.error("Error applying:", error.message);
    }
  };

  const getUserIdFromToken = (token) => {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    return decodedToken[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];
  };

  const isTokenValid = (token) => {
    if (!token) {
      return false;
    }
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const expirationTime = decodedToken.exp * 1000;
      const currentTime = Date.now();
      return currentTime < expirationTime;
    } catch (error) {
      console.error("Error decoding or validating token:", error);
      return false;
    }
  };

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="d-flex text-dark w-100">
        <div className="card ms-4 me-4 mt-5">
          <div className="card-body">
            <h5 className="card-title bg-secondary p-2 rounded text-light">
              Job Detail
            </h5>
            <table className="table table-hover text-dark fs-6">
              <div className="row">
                <div className="col-md-10">
                  <div>
                    <strong>Job Title: </strong> {job.jobTitle}
                  </div>
                  <div>
                    <strong>Position:</strong> {job.positionName}
                  </div>
                  <div>
                    <strong>Description:</strong> {job.description}
                  </div>
                  <div>
                    <strong>Requirement:</strong> {job.requirements}
                  </div>
                  <div>
                    <strong>Posting Date:</strong> {formatDate(job.postingDate)}
                    
                  </div>
                </div>
              </div>
              <tbody>
                <td>
                  <button
                    onClick={() => applyOperation(job.id)}
                    className="btn btn-outline-secondary btn-sm float-end ms-2"
                    type="button"
                    disabled={hasApplied}
                  >
                    {hasApplied ? "Applied" : "Apply"}
                  </button>
                  <Link to={`/postedJob`}>
                    <button className="btn btn-outline-danger btn-sm float-end me-2 p-2">
                      Back
                    </button>
                  </Link>
                </td>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default JobDetail;
