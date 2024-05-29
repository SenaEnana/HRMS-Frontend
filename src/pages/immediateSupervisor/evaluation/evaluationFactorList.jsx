import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function EvaluationFactorList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(Id) {
    try {
      let result = await fetch(`http://localhost:5100/api/EvaluationFactor/${Id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (result.ok) {
        getData(); 
      } else {
        console.error("Failed to delete the evaluation factor");
      }
    } catch (error) {
      console.error("Error deleting evaluation factor:", error);
    }
  }

  async function getData() {
    try {
      let result = await fetch("http://localhost:5100/api/EvaluationFactor");
      if (result.ok) {
        let data = await result.json();
        setData(data);
      } else {
        console.error("Failed to fetch evaluation factors");
      }
    } catch (error) {
      console.error("Error fetching evaluation factors:", error);
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between mt-5 text-dark">
        <h5 className="text-start ms-2">Evaluation Factor List</h5>
        <NavLink
          to={"/addEvaluationFactor"}
          className="float-end btn btn-secondary btn-sm mb-2"
        >
          Add Evaluation Factor
        </NavLink>
      </div>
      <table className="table table-hover text-dark w-100 fs-6">
        <thead>
          <tr>
            <th>Evaluation Factor</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((evaluationFactor) => {
            const evaluationFactorId = evaluationFactor.id;
            return (
              <tr key={evaluationFactorId}>
                <td>{evaluationFactor.name}</td>
                <td>
                  <button
                    onClick={() => deleteOperation(evaluationFactorId)}
                    className="btn btn-outline-danger ms-1 btn-sm"
                    type="button"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default EvaluationFactorList;
