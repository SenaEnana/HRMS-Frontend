import React, { useEffect, useState } from "react";

const EmployeeEvaluationForm = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState("");
  const [evaluationFactors, setEvaluationFactors] = useState([]);
  const [ratings, setRatings] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5100/Employee/ListEmployees")
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching employees:", error));

    fetch("http://localhost:5100/api/EvaluationFactor")
      .then((response) => response.json())
      .then((data) => {
        setEvaluationFactors(data);
        setLoading(false);
      })
      .catch((error) =>
        console.error("Error fetching evaluation factors:", error)
      );
  }, []);

  const handleRatingChange = (factorId, rating) => {
    setRatings({ ...ratings, [factorId]: rating });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const evaluationData = {
      employeeId: selectedEmployeeId,
      evaluations: Object.keys(ratings).map((factorId) => ({
        factorId: parseInt(factorId),
        rating: ratings[factorId],
      })),
    };

    fetch("http://localhost:5100/api/Evaluation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(evaluationData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Evaluation submitted successfully!");
        } else {
          alert("Failed to submit evaluation");
        }
      })
      .catch((error) => console.error("Error submitting evaluation:", error));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="evaluation-container">
      <h1>Employee Evaluation</h1>
      <form onSubmit={handleSubmit}>
        <div className="select-employee">
          <label className="employee-label">Select Employee: </label>
          <select className="employee-select"
            value={selectedEmployeeId}
            onChange={(e) => setSelectedEmployeeId(e.target.value)}
            required
          >
            <option value="" disabled>
              Select an employee
            </option>
            {employees.map((employee) => (
              <option key={employee.id} value={employee.id}>
                {employee.firstName} {employee.lastName}
              </option>
            ))}
          </select>
        </div>
        {selectedEmployeeId && (
          <>
            <table className="evaluation-table">
              <thead>
                <tr>
                  <th>Evaluation Factor</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>
                {evaluationFactors.map((factor) => (
                  <tr key={factor.id}>
                    <td>{factor.name}</td>
                    <td className="rating-container">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <label key={rating} className="rating-label">
                          <input
                            type="radio"
                            name={`rating-${factor.id}`}
                            value={rating}
                            checked={ratings[factor.id] === rating}
                            onChange={() =>
                              handleRatingChange(factor.id, rating)
                            }
                          />
                          <span className="rating-number">{rating}</span>
                        </label>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="submit-button" type="submit">
              Submit Evaluation
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default EmployeeEvaluationForm;
