import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let result = await fetch(`https://localhost:7140/Promotion/${id}`);
    result = await result.json();
    setData(result);
  }

  async function applyOperation(jobId) {
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
      let result = await fetch(
        `https://localhost:7140/Promotion/ApplyForJob/${jobId}?userId=${userId}`,
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
      alert("applied successfully");
    } catch (error) {
      console.error("Error applying:", error.message);
    }
  }
  function getUserIdFromToken(token) {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    return decodedToken[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];
  }
  function isTokenValid(token) {
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
  }
  //the button apply should be removed after the employee already applied for that job and we will fix that later
  return (
    <>
      <div className="d-flex justify-content-between mt-5 text-dark">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Job Detail</h5>
            <table className="table table-hover text-dark w-100 fs-6">
              <thead>
                <tr>
                  <th>Job Title</th>
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
                    <td>{job.position}</td>
                    <td>{job.description}</td>
                    <td>{job.requirement}</td>
                    <td>{job.postingDate}</td>
                    <td>
                      <button
                        onClick={() => applyOperation(job.id)}
                        className="btn btn-outline-secondary btn-sm"
                        type="button"
                      >
                        Apply
                      </button>
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
          </div>
        </div>
      </div>
    </>
  );
}
export default JobDetail;
