import AdminRouter from "./adminRouter";
import EmployeeRouter from "./employeeRouter";
import HrRouter from "./hrRouter";
import LeaveAdminRouter from "./leaveAdminRouter";
import Auth from "./pages/auth/auth";
import Login from "./pages/auth/login";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const username = JSON.parse(localStorage.getItem("username"));
  const [isAuthenticated, setIsAuthenticated] = useState(true);                                                                          
  
  return (
<div> 
{/* <Routes>
<Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
</Routes> */}
    {isAuthenticated ?(
          <EmployeeRouter />):(
            <Auth setIsAuthenticated={setIsAuthenticated} />
          )
        }
          {/* <AdminRouter/>
          <HrRouter/>  */}
  {/* <HrRouter/>  
  <AdminRouter/> 
   <LeaveAdminRouter/> 
     <EmployeeRouter/>
  <Auth/>*/}

    </div>        
  );
}
export default App;
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
  