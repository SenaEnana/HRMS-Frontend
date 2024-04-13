import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import EmployeeDashboard from "./pages/employee/scenes/dashboard/employeeDashboard";
import Team from "./pages/employee/scenes/team";
import Contacts from "./pages/employee/scenes/contacts/contacts";
import Invoices from "./pages/employee/scenes/invoices";
import Form from "./pages/employee/scenes/form";
import FAQ from "./pages/employee/scenes/faq";
import Calendar from "./pages/employee/scenes/calendar/calendar";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./pages/commonPages/sidebar";
import Complaint from "./pages/employee/scenes/form/complaint/complaint";
import LeaveRequest from "./pages/employee/scenes/form/leaveRequest/leaveRequest";
import ResignationRequest from "./pages/employee/scenes/form/resignationRequest/resignationRequest";
import SupervisorFeedback from "./pages/employee/scenes/form/supervisorFeedback";

function EmployeeRouter() {
    const [theme, colorMode] = useMode();
     const [isSidebar, setIsSidebar] = useState(true);
    return(
            <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                  <Sidebar isSidebar={isSidebar} />
                <main className="content">
                  <Routes>
                  <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
                  <Route path="/employeeTeam" element={<Team />} />
                  <Route path="/employeeContacts" element={<Contacts />} />
                  <Route path="/employeeInvoices" element={<Invoices />} />
                  <Route path="/employeeForm" element={<Form />} />
                  <Route path="/employeeFaq" element={<FAQ />} />
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