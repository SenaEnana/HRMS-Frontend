import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Bar from "./pages/immediateSupervisor/bar";
import SupervisorSidebar from "./pages/immediateSupervisor/sidebar/supervisorSidebar";
import SupervisorDashboard from "./pages/immediateSupervisor/dashboard/supervisorDashboard";
import SendFeedback from "./pages/immediateSupervisor/sendFeedback/sendFeedback";
import ComplaintList from "./pages/immediateSupervisor/complaintList/complaintList";
import MyAccount from "./pages/account/myAccount";
import ChangePassword from "./pages/account/changePassword";
import UploadImage from "./pages/account/uploadImage";

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
              <Route path="/sendFeedback" element={<SendFeedback/>} />
              <Route path="/complaintList" element={<ComplaintList/>}/>
              <Route path="/bar" element={<Bar />} />
              <Route path="/changePassword" element={<ChangePassword/>}/>
              <Route path="/myAccount" element={<MyAccount/>}/>
              <Route path="/uploadImage" element={<UploadImage/>}/>
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    );
}

export default SupervisorRouter;


// // import AdminSidebar from "./pages/superAdmin/scenes/global/adminSidebar";


// function AdminRouter() {
//           );
//         }
// export default AdminRouter;