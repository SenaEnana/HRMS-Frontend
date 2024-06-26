import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Complaint from "./pages/employee/form/complaint/complaint";
import LeaveRequest from "./pages/employee/form/leaveRequest/leaveRequest";
import EmployeeDashboard from "./pages/employee/dashboard/employeeDashboard";
import ResignationRequest from "./pages/employee/form/resignationRequest/resignationRequest";
import EmployeeSidebar from "./pages/employee/employeeSidebar/employeeSidebar";
import MyAccount from "./pages/account/myAccount";
import ChangePassword from "./pages/account/changePassword";
import Notifications from "./pages/commonPages/Notification";
import PostedJob from "./pages/employee/form/postedJob";
import JobDetail from "./pages/employee/form/jobDetail";
import UploadImage from "./pages/account/uploadImage";
import EvaluationResult from "./pages/employee/form/evaluationResult";

function EmployeeRouter() {
  const [theme, colorMode] = useMode();
  const isAuth = true;
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {isAuth &&
            <EmployeeSidebar />
          }
          <main className="content">
            <Routes>
              <Route path="/" element={<EmployeeDashboard />} />
              <Route path="/myAccount" element={<MyAccount />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/complaint" element={<Complaint />} />
              <Route path="/leaveRequest" element={<LeaveRequest />} />
              <Route path="/resignationRequest" element={<ResignationRequest />} />
              <Route path="/postedJob" element={<PostedJob />} />
              <Route path="/jobDetail/:id" element={<JobDetail />} />
              <Route path="/changePassword" element={<ChangePassword/>}/>
              <Route path="/uploadImage" element={<UploadImage/>}/>
              <Route path="/evaluationResult" element={<EvaluationResult/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default EmployeeRouter;