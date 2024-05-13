import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function BranchList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(Id) {
    let result = await fetch(`https://localhost:7140/Branch/${Id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    getData();
  }

  async function getData() {
    let result = await fetch("https://localhost:7140/Branch/GetBranches");
    result = await result.json();
    setData(result);
  }
  return (
    <>
      <div className="d-flex justify-content-between mt-5 text-dark">
        <h5 className="text-start ms-3">List Of Branches</h5>
        <NavLink
          to={"/addBranch"}
          className="float-end btn btn-info btn-sm mb-2"
        >
          Add new Branch
        </NavLink>
      </div>
      <table className="table table-hover text-dark w-100 fs-6">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((branch) => {
            const branchId = branch.id;
            return (
              <tr key={branchId}>
                {Object.values(branch).map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
                <td>
                  <NavLink to={"/updateEmployeeBasic/" + branchId}>
                    <button
                      className="btn btn-outline-info btn-sm"
                      type="button"
                    >
                      Edit
                    </button>
                  </NavLink>
                  <button
                    onClick={() => deleteOperation(branchId)}
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

export default BranchList;
