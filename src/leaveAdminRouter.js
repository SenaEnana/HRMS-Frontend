import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import LeaveRequestList from "./pages/leaveAdmin/form/leaveRequestList";
import Bar from "./pages/leaveAdmin/bar";
import LeaveAdminDashboard from "./pages/leaveAdmin/dashboard/leaveAdminDashboard";
import LeaveSidebar from "./pages/leaveAdmin/sidebar/leaveSidebar";
import AddLeaveType from "./pages/leaveAdmin/leaveType/addLeaveType";
import LeaveTypeList from "./pages/leaveAdmin/leaveType/leaveTypeList";

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
              <Routes>
              <Route path="/" element={<LeaveAdminDashboard />} />
              <Route path="/leaveRequestList" element={<LeaveRequestList/>} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/addLeaveType" element={<AddLeaveType/>}/>
              <Route path="/leaveTypeList" element={<LeaveTypeList/>}/>
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