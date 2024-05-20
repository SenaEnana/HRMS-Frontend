import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function MyAccount() {
  const navigate = useNavigate();
  const [profilePicture, setProfilePicture] = useState(null);
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  function getUserIdFromToken(token) {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    return decodedToken[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];
  }
  function isTokenValid(token) {
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
  }

  useEffect(() => {
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
    fetch(`https://localhost:52339/Account/profile?userId=${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch user profile");
        }
      })
      .then((data) => {
        setUser(data);
        setUsername(data.username);
      })
      .catch((error) => {
        console.error("Profile fetch error:", error);
        // Handle error
      });
  }, []);

  const LogoutHandler = () => {
    sessionStorage.removeItem("token");
    alert("Logout successfully");
    navigate("/");
  };

  useEffect(() => {
    fetch(`https://localhost:7140/Employee/${id}`)
      .then((response) => response.json())
      .then((data) => setEmployee(data))
      .catch((error) =>
        console.error("Error fetching employee details:", error)
      );
  }, [id]);
  if (!employee) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="card" style="width: 18rem;">
        <img
          style={{ width: 100, borderRadius: 100 }}
          src={"https://localhost:7140" + employee.pictureURL}
          alt=""
        />
        <div className="card-body">
          <h5 className="card-title">My profile</h5>
          <p>
            <strong>Name</strong> {employee.name}
          </p>
          <p>
            <strong>Role:</strong> {employee.roles}
          </p>
          <Link to="/changePassword">
            <button className="btn btn-outline-secondary btn-sm mt-3 me-3">
              change password
            </button>
          </Link>
          <Link to="/change profile">
            <button className="btn btn-outline-secondary btn-sm mt-3 me-3 ms-2">
              change profile
            </button>
          </Link>
          <Link to="/">
            <button
              className="btn btn-danger btn-sm mt-3 me-3 ms-2"
              onClick={LogoutHandler}
            >
              log out
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MyAccount;
