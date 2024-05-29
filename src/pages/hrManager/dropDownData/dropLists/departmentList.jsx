import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function DepartmentList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(Id) {
    let result = await fetch(`http://localhost:5100/Department/${Id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    getData();
  }

  async function getData() {
    let result = await fetch(
      "http://localhost:5100/Department/GetDepartments"
    );
    result = await result.json();
    setData(result);
    setLoading(false);
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="d-flex justify-content-between mt-5 text-dark">
        <h5 className="text-start ms-2">List Of Departments</h5>
        <NavLink
          to={"/addDepartment"}
          className="float-end btn btn-secondary btn-sm mb-2"
        >
          Add new Department
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
          {data.map((department) => {
            const departmentId = department.id;
            return (
              <tr key={departmentId}>
                {Object.values(department).map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
                <td>
                  <button
                    onClick={() => deleteOperation(departmentId)}
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

export default DepartmentList;
