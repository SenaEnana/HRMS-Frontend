import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function PositionList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(Id) {
    let result = await fetch(`https://localhost:7140/Position/${Id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    getData();
  }

  async function getData() {
    let result = await fetch("https://localhost:7140/Position");
    result = await result.json();
    setData(result);
  }
  return (
    <>
      <div className="d-flex justify-content-between mt-5 text-dark">
        <h5 className="text-start ms-2">List Of Position</h5>
        <NavLink
          to={"/addPosition"}
          className="float-end btn btn-info btn-sm mb-2"
        >
          Add new Position
        </NavLink>
      </div>
      <table className="table table-hover text-dark w-100 fs-6">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Salary</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((position) => {
            const positionId = position.id;
            return (
              <tr key={positionId}>
                {Object.values(position).map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
                <td>
                  <NavLink to={"/updatePosition/" + positionId}>
                    <button
                      className="btn btn-outline-info btn-sm"
                      type="button"
                    >
                      Edit
                    </button>
                  </NavLink>
                  <button
                    onClick={() => deleteOperation(positionId)}
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

export default PositionList;
