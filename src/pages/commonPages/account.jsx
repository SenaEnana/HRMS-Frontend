import { Link } from "react-router-dom";
import SideBar from "../../CommonPages/SideBar";
import { useState } from "react";

const Account = () => {
    const [profilePicture, setProfilePicture] = useState(null);

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

    const LogoutHandler = () => {
        alert("Are you sure you want to log out");
    };

    return (
        <div className="flex">~
            <div>
                <SideBar />
            </div>

            <div className="flex w-3/5 h-full   min-h-screen bg-gray-200 rounded-3xl ml-96 mt-16 mr-16 -mb-64">
                <div>
                    <h2 className="text-4xl mt-16 ml-12">My Profile</h2>
                    <input type="file" accept="image/*" onChange={handleProfilePictureChange} className="w-72 h-12 rounded-2xl pl-5 ml-8 mt-2  mb-4" /><br></br>

                    <div className="flex ">
                        <button className="bg-[#1c4966] text-white  w-40 rounded-xl text-2xl h-12 mt-8 ml-12 mb-12" onClick={() => alert("Set Profile")}>Set Profile</button>
                        <Link to="/"> <button className="bg-[#1c4966]  text-white w-40 rounded-xl text-2xl h-12 mt-8 ml-4 mb-12" onClick={LogoutHandler}>Log Out</button></Link>
                    </div>
                </div>

                <div className="ml-20 mt-40 flex">
                    <div>
                        {profilePicture && (
                            <img
                                src={profilePicture}
                                alt="Profile"
                                className="w-52 h-52 rounded-full object-cover ml-12 mb-4"
                            />
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Account;
