import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const EmployeeEvaluationList = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5100/api/Evaluation/EmployeeEvaluations")
      .then((response) => response.json())
      .then((data) => {
        setEvaluations(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching employee evaluations:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      <h1>Employee Evaluations</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Total Rating</th>
            <th>Evaluation Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {evaluations.map((evaluation, index) => (
            <tr key={index}>
              <td>{evaluation.employeeName}</td>
              <td>{evaluation.totalRating}</td>
              <td>
                {new Date(evaluation.evaluationDate).toLocaleDateString()}
              </td>
              <td>
                <Link
                  to={`/evaluationDetail/${evaluation.employeeId}`}
                  className="btn btn-primary"
                >
                  Detail
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeEvaluationList;
