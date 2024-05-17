import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function PostedJob() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let result = await fetch("https://localhost:7140/Promotion/PostedJobs");
    result = await result.json();
    setData(result);
  }
  async function applyOperation(jobId) {
    try {
      const token = sessionStorage.getItem('token');
      if (!token) {
        console.error('Token not found in session storage');
        return;
      }

      const isValid = isTokenValid(token);
      if (!isValid) {
        console.error('Invalid token');
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
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    return decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  }
  function isTokenValid(token) {
    if (!token) {
      return false;
    }

    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = decodedToken.exp * 1000;
      const currentTime = Date.now();

      return currentTime < expirationTime;
    } catch (error) {
      console.error('Error decoding or validating token:', error);
      return false;
    }
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((job) => (
            <tr key={job.id}>
              <td>{job.jobTitle}</td>
              <td>{job.positionId}</td>
              <td>{job.position}</td>
              <td>
                <button
                  onClick={() => applyOperation(job.id)}
                  className="btn btn-outline-secondary btn-sm"
                  type="button"
                >
                  Apply
                </button>
                {/* <Link to={`/jobDetail/${job.id}`}>
                  <button className="btn btn-outline-secondary btn-sm">
                    Detail
                  </button>
                </Link> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default PostedJob;
