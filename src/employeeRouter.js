import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Calendar from "./pages/employee/calendar/calendar";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./pages/commonPages/sidebar";
import Complaint from "./pages/employee/form/complaint/complaint";
import LeaveRequest from "./pages/employee/form/leaveRequest/leaveRequest";
import EmployeeDashboard from "./pages/employee/dashboard/employeeDashboard";
import SupervisorFeedback from "./pages/employee/form/supervisorFeedback";
import ResignationRequest from "./pages/employee/form/resignationRequest/resignationRequest";

function EmployeeRouter() {
    const [theme, colorMode] = useMode();
const isAuth = true;
    return(
            <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div>
                {isAuth &&
                  <Sidebar/>
                  }
                <main className="content">
                  <Routes>
                  <Route path="/employeeDashboard" element={<EmployeeDashboard/>} />
                  <Route path="/employeeCalendar" element={<Calendar />} />
                  <Route path="/complaint" element={<Complaint/>}/>
                  <Route path="/leaveRequest" element={<LeaveRequest/>}/>
                  <Route path="/resignationRequest" element={<ResignationRequest/>}/>
                  <Route path="/supervisorFeedback" element={<SupervisorFeedback/>}/>
                  </Routes>
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
          );
        }
export default EmployeeRouter;