import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function EvaluationDetail() {
  const { id } = useParams();
  const [evaluation, setEvaluation] = useState(null);

  //the following are not the correct url for the evaluation detail
  useEffect(() => {
    fetch(`https://localhost:7140/Employee/${id}`)
      .then((response) => response.json())
      .then((data) => setEvaluation(data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      );
  }, [id]);
  if (!evaluation) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="card mt-5 me-3 ms-4 text-dark">
        <div className="card-header">
          <h5>{evaluation.employeeName}</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-6">
              <p>
                <strong>evaluation Id :</strong> {evaluation.id}
              </p>
              <p>
                <strong>Employee Name :</strong> {evaluation.employeeName}
              </p>
              <p>
                <strong>Rating :</strong> {evaluation.rating}
              </p>
              <p>
                <strong>Feedback :</strong> {evaluation.feedback}
              </p>
              {/* the following needs modification for the page to list the detail*/}
              <p>
                <strong>Mother Name :</strong> {evaluation.motherName}
              </p>
              <p>
                <strong>Phone Number :</strong> {evaluation.phoneNo}
              </p>
              <p>
                <strong>Marital Status :</strong> {evaluation.maritalStatus}
              </p>
              <p>
                <strong>Region :</strong> {evaluation.region}
              </p>
              <p>
                <strong>Woreda :</strong> {evaluation.woreda}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EvaluationDetail;
