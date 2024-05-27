import { useState, useEffect } from "react";

function ComplaintList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    getData();
  }, []);

  async function addressOperation(complaintId) {
    let result = await fetch(
      `https://localhost:7140/api/Complaint/AddressCompliant/${complaintId}`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
    if (result.ok) {
      getData();
    } else {
      alert("Failed to address complaint");
    }
  }
  async function getData() {
    let result = await fetch(
      "https://localhost:7140/api/Complaint/PendingComplaints"
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
        <h5 className="text-start ms-2">List Of Complaints</h5>
      </div>
      <table className="table table-hover text-dark w-100 fs-6">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Incident</th>
            <th>Remedy</th>
            <th>Date of event</th>
            <th>Submitted Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((complaint) => (
            <tr key={complaint.id}>
              <td>{complaint.employeeId}</td>
              <td>{complaint.employeeName}</td>
              <td>{complaint.incident}</td>
              <td>{complaint.remedy}</td>
              <td>{formatDate(complaint.dateOfEvent)}</td>
              <td>{formatDate(complaint.submittedDate)}</td>
              <td>{complaint.status}</td>
              <td>
                <button
                  onClick={() => addressOperation(complaint.id)}
                  className="btn btn-secondary ms-1 btn-sm"
                  type="button"
                >
                  Address
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ComplaintList;
