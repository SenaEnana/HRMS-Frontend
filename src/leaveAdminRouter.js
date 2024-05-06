import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Form from "./pages/leaveAdmin/form/leaveRequestList";
import Bar from "./pages/leaveAdmin/bar";
import Pie from "./pages/leaveAdmin/pie";
import Line from "./pages/leaveAdmin/line";
import Topbar from "./pages/commonPages/topbar";
import LeaveAdminDashboard from "./pages/leaveAdmin/dashboard/leaveAdminDashboard";
import LeaveSidebar from "./pages/leaveAdmin/sidebar/leaveSidebar";

function LeaveAdminRouter(){
    const [theme, colorMode] = useMode();
    const [isLeaveSidebar, setIsLeaveSidebar] = useState(true);

    return(
        <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
              <LeaveSidebar isLeaveSidebar={isLeaveSidebar} />
            <main className="content">
              <Topbar setIsLeaveSidebar={setIsLeaveSidebar} />
              <Routes>
              <Route path="/" element={<LeaveAdminDashboard />} />
              <Route path="/form" element={<Form />} />
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

export default LeaveAdminRouter;


// // import AdminSidebar from "./pages/superAdmin/scenes/global/adminSidebar";


// function AdminRouter() {
//           );
//         }
// export default AdminRouter;