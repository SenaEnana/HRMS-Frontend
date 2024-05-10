import AdminRouter from "./adminRouter";
import EmployeeRouter from "./employeeRouter";
import HrRouter from "./hrRouter";
import SupervisorRouter from "./supervisorRouter";
import LeaveAdminRouter from "./leaveAdminRouter";
import Auth from "./pages/auth/auth";
import { useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom"; 
import CeoRouter from "./ceoRouter";

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
        <EmployeeRouter /> 
        
      ) : (
        <Auth /> 
      )}
    </div>
  );
}

export default App;

  