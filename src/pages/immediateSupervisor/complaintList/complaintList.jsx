import { useState, useEffect } from "react";

function ComplaintList() {
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
    result = await result.json();
    getData();
  }

  async function getData() {
    let result = await fetch("https://localhost:7140/Branch/GetBranches");
    result = await result.json();
    console.log(result);
    setData(result);
  }
  return (
    <>
      <div className="d-flex justify-content-between mt-5 text-dark">
        <h5 className="text-start ms-2">List Of Complaints</h5>
      </div>
      <table className="table table-hover text-dark w-100 fs-6">
        <thead>
          <tr>
            <th>Name</th>
            <th>Employee Id</th>
            <th>Position</th>
            <th>Branch</th>
            <th>Date of event</th>
            <th>Incident</th>
            <th>Remedy</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((complaint) => {
            const complaintId = complaint.id;
            return (
              <tr key={complaintId}>
                {Object.values(complaint).map((item, index) => (
                  <td key={index}>{item}</td>
                ))}
                <td>
                  <button
                    onClick={() => deleteOperation(complaintId)}
                    className="btn btn-outline-info ms-1 btn-sm"
                    type="button"
                  >
                    Address
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

export default ComplaintList;
