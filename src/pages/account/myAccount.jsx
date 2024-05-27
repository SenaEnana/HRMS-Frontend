import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function MyAccount() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 

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
      setLoading(false); 
      return;
    }
    const isValid = isTokenValid(token);
    if (!isValid) { 
      console.error("Invalid token");
      setLoading(false); 
      return;
    }
    const userId = getUserIdFromToken(token);
    console.log(userId);
    fetch(`http://localhost:5100/Account/profile?userId=${userId}`, { 
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
        setUsername(data.name);
        setLoading(false); 
      })
      .catch((error) => {
        console.error("Profile fetch error:", error);
        setLoading(false); 
       
      });
  }, []);

  const LogoutHandler = () => {
    sessionStorage.removeItem("token");
    alert("Logout successfully");
    navigate("/login");
  };
  if (loading) {
    return <div>Loading...</div>; 
  }
  if (!user) {
    return <div>Error loading user data</div>; 
  }
  return (
    <div className="profile-wrapper">
      <div className="card profile-card">
        <div className="profile-header">
          <img
            className="profile-picture"
            src={"http://localhost:5100" + user.pictureURL}
            alt="Profile"
          />
          <h2 className="profile-username">{user.name}</h2>
        </div>
        <div className="profile-details">
          <p><strong>Name:</strong> {user.name}</p>
        </div>
        <div className="profile-actions">
          <Link to="/changePassword">
            <button className="btn btn-outline-secondary btn-sm mt-3 me-1">
              Change Password
            </button>
          </Link>
          <Link to="/uploadImage">
            <button className="btn btn-outline-secondary btn-sm mt-3 me-1">
              Change Profile
            </button>
          </Link>
          <Link to="/">
            <button
              className="btn btn-danger btn-sm mt-3 me-3"
              onClick={LogoutHandler}
            >
              Log Out
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MyAccount;
