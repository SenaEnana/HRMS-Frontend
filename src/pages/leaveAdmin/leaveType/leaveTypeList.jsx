import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function LeaveTypeList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  }
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="d-flex justify-content-between mt-5 text-dark">
        <h5 className="text-start ms-2">List Of Leave Types</h5>
        <NavLink
          to={"/addLeaveType"}
          className="float-end btn btn-secondary btn-sm mb-2"
        >
          Add new Leave Type
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
          {data.map((leaveType) => {
            const leaveTypeId = leaveType.id;
            return (
              <tr key={leaveTypeId}>
                {Object.values(leaveType).map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
                <td>
                  <button
                    onClick={() => deleteOperation(leaveTypeId)}
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

export default LeaveTypeList;
