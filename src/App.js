//import AdminRouter from "./adminRouter";
//import EmployeeRouter from "./employeeRouter";
import HrRouter from "./hrRouter";
//import AdminRouter from "./adminRouter";
//import Auth from "./pages/auth/auth";
//import Login from "./pages/auth/login";
//import ImmediateSupRouter from "./ImmediatSupRouter";
//import { useState } from "react";


function App() {
  //const username = JSON.parse(localStorage.getItem("username"));
  //const [isAuth, setAuth] = useState(false);
  //console.log(username);
  return (
<div>   
        {/* {isAuth ? (
         <div className="col-12 overflow-none bg-white">
        
        <EmployeeRouter/>
          <AdminRouter/>
          <HrRouter/> 
      </div>
       ) : (
            <div className="col-12 ">
               <Auth/>
             </div>  
       )}  */}
       {/* <Auth/> <ImmediateSupRouter/> */}
      {/*   ><EmployeeRouter/>  <AdminRouter/>
     */}
   
   <HrRouter/>
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
//   );
// }
// export default App;
  