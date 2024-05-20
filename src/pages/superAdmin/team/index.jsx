import { useEffect, useState } from "react";
import Button from "../../../components/button";

const Team = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let result = await fetch("https://localhost:52339/User");
    result = await result.json();
    setData(result);
  }

  return (
    <>
      <div className="d-flex justify-content-between text-dark mb-3">
        <h5 className="text-start">User Account</h5>
      </div>
      <table className="table table-hover text-dark w-100 fs-6">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Role</th>
            <th>User Photo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.roles}</td>
              <td>
              <img
                style={{ width: 100, borderRadius: 100 }}
                src={
                  "https://localhost:52339" + employee.pictureURL
                }
                alt=""
              />
            </td>
              <td>
                <Button />
                <button className="btn btn-outline-danger btn-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Team;
