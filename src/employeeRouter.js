import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import EmployeeDashboard from "./pages/employee/scenes/dashboard/employeeDashboard";
import Team from "./pages/employee/scenes/team";
import Contacts from "./pages/employee/scenes/contacts/contacts";
import Invoices from "./pages/employee/scenes/invoices";
import Form from "./pages/employee/scenes/form";
import Bar from "./pages/employee/scenes/bar";
import Pie from "./pages/employee/scenes/pie";
import Line from "./pages/employee/scenes/line";
import FAQ from "./pages/employee/scenes/faq";
import Calendar from "./pages/employee/scenes/calendar/calendar";
import Geography from "./pages/employee/scenes/geography";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./pages/commonPages/sidebar";

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
                  {/* <Topbar setIsSidebar={setIsSidebar} /> */}
                  <Routes>
                  <Route path="/employeeDashboard" element={<EmployeeDashboard />} />
                  <Route path="/employeeTeam" element={<Team />} />
                  <Route path="/employeeContacts" element={<Contacts />} />
                  <Route path="/employeeInvoices" element={<Invoices />} />
                  <Route path="/employeeForm" element={<Form />} />
                  <Route path="/employeeBar" element={<Bar />} />
                  <Route path="/employeePie" element={<Pie />} />
                  <Route path="/employeeLine" element={<Line />} />
                  <Route path="/employeeFaq" element={<FAQ />} />
                  <Route path="/employeeCalendar" element={<Calendar />} />
                  <Route path="/employeeGeography" element={<Geography />} /> 
                  </Routes>
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
          );
        }
export default EmployeeRouter;