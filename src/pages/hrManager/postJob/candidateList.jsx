import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const CandidateList = () => {
  const [data, setData] = useState([]);
  const { jobId } = useParams();
  
  // useEffect(() => {
  //   getData();
  // }, []);

  // async function getData() {
  //   let result = await fetch(`https://localhost:7140/Promotion/JobCandidates`);
  //   result = await result.json();
  //   setData(result);
  // }
  useEffect(() => {
    fetch(`https://localhost:7140/Promotion/JobCandidates/${jobId}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      );
  }, [jobId]);
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-between text-dark mb-3">
          <h5 className="text-start">Candidate List</h5>
        </div>
        <table className="table table-hover text-dark w-100 fs-6">
          <thead>
            <tr>
              <th>Status</th>

            </tr>
          </thead>
          <tbody>
            {data.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.status}</td>

                <td>
                  <Link to={`/candidateDetail/${employee.id}`}>
                    <button className="btn btn-outline-secondary btn-sm">
                      Detail
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CandidateList;
