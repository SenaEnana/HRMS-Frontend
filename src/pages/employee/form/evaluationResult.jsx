import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EvaluationResult = () => {
  const [evaluations, setEvaluations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch employee evaluations from the API
    fetch("https://localhost:7100/api/Evaluation")
      .then((response) => response.json())
      .then((data) => {
        setEvaluations(data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching employee evaluations:", error)
      );
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Employee Evaluations</h1>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Rating</th>
            <th>Feedback</th>
          </tr>
        </thead>
        <tbody>
          {evaluations.map((evaluation) => (
            <tr key={evaluation.id}>
              <td>{evaluation.employeeName}</td>
              <td>{evaluation.rating}</td>
              <td>{evaluation.feedback}</td>
              <td>
                <Link to={`/evaluationDetail/${evaluation.id}`}>
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
  );
};

export default EvaluationResult;
