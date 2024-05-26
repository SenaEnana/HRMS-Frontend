import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Bar from "./pages/immediateSupervisor/bar";
import SupervisorSidebar from "./pages/immediateSupervisor/sidebar/supervisorSidebar";
import SupervisorDashboard from "./pages/immediateSupervisor/dashboard/supervisorDashboard";
import ComplaintList from "./pages/immediateSupervisor/complaintList/complaintList";
import MyAccount from "./pages/account/myAccount";
import ChangePassword from "./pages/account/changePassword";
import UploadImage from "./pages/account/uploadImage";
import EvaluationDetail from "./pages/immediateSupervisor/evaluation/evaluationDetail";
import EmployeeEvaluationList from "./pages/immediateSupervisor/evaluation/employeeEvaluationList";
import EmployeeEvaluationForm from "./pages/immediateSupervisor/evaluation/employeeEvaluationForm";

function SupervisorRouter(){
    const [theme, colorMode] = useMode();

    return(
        <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
              <SupervisorSidebar /> 
            <main className="content">
              <Routes>
              <Route path="/" element={<SupervisorDashboard />} />
              <Route path="/employeeEvaluationList" element={<EmployeeEvaluationList/>} />
              <Route path="/employeeEvaluationForm" element={<EmployeeEvaluationForm/>} />
              <Route path="/complaintList" element={<ComplaintList/>}/>
              <Route path="/bar" element={<Bar />} />
              <Route path="/changePassword" element={<ChangePassword/>}/>
              <Route path="/myAccount" element={<MyAccount/>}/>
              <Route path="/uploadImage" element={<UploadImage/>}/>
              <Route path="/evaluationDetail/:employeeId" element={<EvaluationDetail/>}/>
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
}

export default SupervisorRouter;
