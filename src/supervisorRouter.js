import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Bar from "./pages/immediateSupervisor/bar";
import Pie from "./pages/immediateSupervisor/pie";
import Line from "./pages/immediateSupervisor/line";
import SupervisorSidebar from "./pages/immediateSupervisor/sidebar/supervisorSidebar";
import SupervisorDashboard from "./pages/immediateSupervisor/dashboard/supervisorDashboard";
import SendFeedback from "./pages/immediateSupervisor/sendFeedback/sendFeedback";
import ComplaintList from "./pages/immediateSupervisor/complaintList/complaintList";

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
              <Route path="/supervisorDashboard" element={<SupervisorDashboard />} />
              <Route path="/sendFeedback" element={<SendFeedback/>} />
              <Route path="/complaintList" element={<ComplaintList/>}/>
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
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