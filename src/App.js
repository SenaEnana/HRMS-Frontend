import AdminRouter from "./adminRouter";
import EmployeeRouter from "./employeeRouter";
import HrRouter from "./hrRouter";
import SupervisorRouter from "./supervisorRouter";
import LeaveAdminRouter from "./leaveAdminRouter";
import Auth from "./pages/auth/auth";
import Login from "./pages/auth/login";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom"; 

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const token = sessionStorage.getItem('token');
      if (token && token.length > 0){
        setIsAuth(true);
      } else {
        setIsAuth(false);
        navigate("/login"); 
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }, [navigate]); 
 
  return (
    <div>
      {isAuth ? (
        <SupervisorRouter /> 
      ) : (
        <Auth /> 
      )}
    </div>
  );
}

export default App;


// import { useState } from "react";
// import Sidebar from "./layouts/Sidebar";
// import Router from "./router";
// import NavBar from "./layouts/Navbar";
// import FrontPageRouter from "./frontpagerouter";
// import StudentSidebar from "./layouts/studentSidebar";

// function App() {
//   const role = JSON.parse(localStorage.getItem("role"));
//   return (
    // <div>   
    //    {isAuth ? (
    //     <div className="col-12 overflow-none bg-white">
    //     <NavBar/>
    //        <div className="row col-12">
    //        {role === "Admin" ?
    //             <div className="col-2">
    //             <Sidebar />
    //             </div>
    //           : <>
    //         {role === "student"? 
    //         <div className="col-2">
    //           <StudentSidebar/>
    //         </div>:
    //     null
    //         }
    //      </>
    //      }
    //         <div className="col-10 ">
    //         <Router />
    //         </div> 
    //       </div>
    //     </div>
    //   ) : (
    //        <div className="col-12 ">
    //           <FrontPageRouter/>
    //         </div>  
    //   )} 
    // </div> 
  