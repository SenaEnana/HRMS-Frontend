import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function MyAccount() {
    const [profilePicture, setProfilePicture] = useState(null);
    const [username, setUsername] = useState('');

    useEffect(() => {
        // Fetch user profile data to get the username
        fetch('https://localhost:7140/Account/profile', {
            method: 'GET',
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch user profile');
                }
            })
            .then(data => {
                setUsername(data.username);
            })
            .catch(error => {
                console.error('Profile fetch error:', error);
                // Handle error
            });
    }, []); // Fetch username only once when component mounts

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfilePicture(reader.result); // Set profile picture as data URL
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSetProfile = () => {
        if (!profilePicture) {
            alert("Please select a profile picture");
            return;
        }

        // Send profile picture to backend API
        const formData = new FormData();
        formData.append('profilePicture', profilePicture);

        fetch('https://localhost:7140/Account/update', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}` // Adjust this according to your authentication mechanism
            },
            body: formData
        })
            .then(response => {
                if (response.ok) {
                    // Profile picture set successfully
                    alert("Profile picture set successfully");
                } else {
                    throw new Error('Failed to set profile picture');
                }
            })
            .catch(error => {
                console.error('Set profile picture error:', error);
                // Handle error
            });
    };

    const LogoutHandler = () => {
        alert("Are you sure you want to log out");
    };

    return (
        <div className="container mt-5 ">
            <h1>My Profile</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h1 className="text-left mt-5 text-black">My Profile</h1>
                    <h3 className="mt-12 text-black text-left">Username: {username}</h3>
                    <input type="file" accept="image/*" onChange={handleProfilePictureChange} className="form-control mt-3" /><br></br>
                    <div className="d-flex justify-content-center">
                        <button className="btn btn-primary btn-lg mt-3 mr-16  " onClick={handleSetProfile}>Set Profile</button>
                        <Link to="/">
                            <button className="btn btn-primary btn-lg mt-3 ml-4" onClick={LogoutHandler}>Log Out</button>
                        </Link>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="d-flex justify-content-center">
                        {profilePicture && (
                            <img
                                src={profilePicture}
                                alt="Profile"
                                className="img-fluid rounded-circle mt-5"
                                style={{ width: "200px", height: "200px" }}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );

}
export default MyAccount;
