import { useEffect, useState } from "react";
import Button from "../../../components/button";

const Team = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    let result = await fetch("https://localhost:7140/User");
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
            <th>Employee Id</th>
            <th>Role</th>
            <th>User Photo</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.emp_Id}</td>
              <td>{employee.roles}</td>
              <td>
<<<<<<< HEAD
                <img
                  style={{ width: 100, borderRadius: 100 }}
                  src={
                    "https://localhost:7140/Data/images/" + employee.pictureURL
                  }
                  alt=""
                />
              </td>
=======
              <img
                style={{ width: 100, borderRadius: 100 }}
                src={
                  "https://localhost:7140" + employee.pictureURL
                }
                alt=""
              />
            </td>
>>>>>>> 183cead2cbd1e960d5aa32a841e08c82d5d1f5a9
              <td>
                <Button />
                <button className="btn btn-outline-danger btn-sm">
                  Delate
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

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Profile() {
//   const [userData, setUserData] = useState([]);
//   const navigate = useNavigate();
//   useEffect(() => {
//     getUser();
//   }, []);

//   async function getUser() {
//     let result = await fetch("http://127.0.0.1:8000/api/list");
//     result = await result.json();
//     setUserData(result);
//   }

//   return (
//     <div className="float-end">
//       <table className="table table-hover">
//         <tr>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Role</th>
//           <th>Image</th>
//         </tr>

//         {userData.map((user) => (
//           <tr key={user.id}>
//             <td>{user.name}</td>
//             <td>{user.email}</td>
//             <td>{user.role}</td>
// <td>
//   <img
//     style={{ width: 100, borderRadius: 100 }}
//     src={
//       "http://127.0.0.1:8000/storage/users_image/" + user.file_path
//     }
//     alt=""
//   />
// </td>
//             <td>
//               <button
//                 className="btn btn-sm btn-outline-info"
//                 onClick={() => {
//                   navigate("/updateProfile");
//                 }}
//               >
//                 update profile
//               </button>
//             </td>
//           </tr>
//         ))}
//       </table>
//     </div>
//   );
// }
// export default Profile;
