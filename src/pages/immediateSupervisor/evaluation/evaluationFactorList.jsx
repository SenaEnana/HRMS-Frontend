import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function EvaluationFactorList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(Id) {
    let result = await fetch(`https://localhost:7140/LeaveType/${Id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    getData();
  }
  async function getData() {
    let result = await fetch("https://localhost:7140/LeaveType/GetLeaveTypes");
    result = await result.json();
    console.log(result);
    setData(result);
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
            <th>Leave Type Id</th>
            <th>Name</th>
            <th>Allowed Days</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((evaluationFactor) => {
            const evaluationFactorId = evaluationFactor.id;
            return (
              <tr key={evaluationFactorId}>
                {Object.values(evaluationFactor).map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
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
