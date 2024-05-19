import AdminRouter from "./adminRouter";
import EmployeeRouter from "./employeeRouter";
import HrRouter from "./hrRouter";
import SupervisorRouter from "./supervisorRouter";
import LeaveAdminRouter from "./leaveAdminRouter";
import Auth from "./pages/auth/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CeoRouter from "./ceoRouter";

function App() {

  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();
  function isTokenValid(token) {
    if (!token) {
      return false;
    }
    try {
      const decodedToken = JSON.parse(atob(token.split('.')[1]));
      const expirationTime = decodedToken.exp * 1000;
      const currentTime = Date.now();

      return currentTime < expirationTime;
    } catch (error) {
      console.error('Error decoding or validating token:', error);
      return false;
    }
  }
  function getUserRoleFromToken(token) {
    const decodedToken = JSON.parse(atob(token.split('.')[1]));
    return decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
  }
  useEffect(() => {
    try {
      const token = sessionStorage.getItem('token');
      if (token && token.length > 0) {
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
        renderDashboardBasedOnRole()
      ) : (
        <Auth />
      )}

    </div>
  );
   function renderDashboardBasedOnRole() {
     const token = sessionStorage.getItem('token');
     const role = getUserRoleFromToken(token);
     console.log(role)
     switch (role) {
       case 'LeaveAdmin':
         return <LeaveAdminRouter /> ;
       case 'HRManager':
         return <EmployeeRouter /> ;
       case 'Employee':
         return <HrRouter /> ;
         default:
           return <p>You don't have access to any dashboard.</p>;
     }
   }
}
export default App; 
