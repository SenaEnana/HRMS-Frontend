import { useEffect, useState } from "react";
import Button from "../../../components/button";

const Team = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLock = async (userId) => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("Token not found in session storage");
        return;
      }

      const isValid = isTokenValid(token);
      if (!isValid) {
        console.error("Invalid token");
        return;
      }
      const userId = getUserIdFromToken(token);
      const result = await fetch(
        `http://localhost:5100/User/LockOrUnlockUser?userId=${userId}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (result.ok) {
        alert("User unlocked successfully");
        getData();
      } else {
        console.error("Failed to unlock user");
      }
    } catch (error) {
      console.error("Error unlocking user:", error.message);
    }
  };

  const handleUnlock = async (userId) => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("Token not found in session storage");
        return;
      }

      const isValid = isTokenValid(token);
      if (!isValid) {
        console.error("Invalid token");
        return;
      }
      const userId = getUserIdFromToken(token);
      console.log(userId);
      const result = await fetch(
        `http://localhost:5100/User/LockOrUnlockUser?userId=${userId}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );
      if (result.ok) {
        alert("User locked successfully");
        getData();
      } else {
        console.error("Failed to lock user");
      }
    } catch (error) {
      console.error("Error locking user:", error.message);
    }
  };

  const getUserIdFromToken = (token) => {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    return decodedToken[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];
  };

  const isTokenValid = (token) => {
    if (!token) {
      return false;
    }
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const expirationTime = decodedToken.exp * 1000;
      const currentTime = Date.now();
      return currentTime < expirationTime;
    } catch (error) {
      console.error("Error decoding or validating token:", error);
      return false;
    }
  };
  const getData = async () => {
    try {
      const result = await fetch("http://localhost:5100/User");
      const data = await result.json();
      setData(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  async function handleDelete(userId) {
    
    let result = await fetch(
      `http://localhost:5100/User/DeleteUser?userId=${userId}`,
      {
        method: "POST",
      }
    );
    if (result.ok) {
      console.log("operation is successful");
      alert("user deleted successfully");
    } else {
      console.log("operation failed");
      alert("failed to delete");
    }
    getData();
  }
  if (loading) {
    return <div>Loading...</div>;
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
                  src={"http://localhost:5100" + employee.pictureURL}
                  alt=""
                />
              </td>
              <td>
                <Button
                  userId={employee.id}
                  onLock={() => handleLock(employee.id)}
                  onUnlock={() => handleUnlock(employee.id)}
                />
                {/* <button
                  className="btn btn-outline-danger btn-sm"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Team;
