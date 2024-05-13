import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
function GradeList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function deleteOperation(Id) {
    let result = await fetch(`https://localhost:7140/Grade/${Id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    getData();
  }

  async function getData() {
    let result = await fetch("https://localhost:7140/Grade/GetGrades");
    result = await result.json();
    setData(result);
  }
  return (
    <>
      <div className="d-flex justify-content-between mt-5 text-dark">
        <h5 className="text-start ms-2">List Of Grades</h5>
        <NavLink
          to={"/addGrade"}
          className="float-end btn btn-secondary btn-sm mb-2"
        >
          Add new Grade
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
          {data.map((grade) => {
            const gradeId = grade.id;
            return (
              <tr key={gradeId}>
                {Object.values(grade).map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
                <td>
                  <button
                    onClick={() => deleteOperation(gradeId)}
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

export default GradeList;
