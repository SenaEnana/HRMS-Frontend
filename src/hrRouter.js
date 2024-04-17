import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Team from "./pages/hrManager/team";
import Contacts from "./pages/hrManager/contacts/contacts";
import Invoices from "./pages/hrManager/invoices";
import Bar from "./pages/hrManager/bar";
import Pie from "./pages/hrManager/pie";
import Line from "./pages/hrManager/line";
import FAQ from "./pages/hrManager/faq";
import Calendar from "./pages/hrManager/calendar/calendar";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./pages/commonPages/sidebar";
import Topbar from "./pages/commonPages/topbar";
import HrDashboard from "./pages/hrManager/dashboard/hrDashboard";
import EmployeeBasic from "./pages/hrManager/form/employeeBasic/employeeBasic";
import EmployeeAdditional from "./pages/hrManager/form/employeeAdditional/employeeAdditional";
import ChildInformation from "./pages/hrManager/form/childInformation/childInformation";
import ContactPerson from "./pages/hrManager/form/contactPerson/contactPerson";
import Education from "./pages/hrManager/form/education/education";
import Experience from "./pages/hrManager/form/experience/experience";
import EmployeeList from "./pages/hrManager/employeeList/employeeList";

function HrRouter() {
  const [theme, colorMode] = useMode();
  const [isHrSidebar, setIsHrSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isHrSidebar={isHrSidebar} />
          <main className="content">
            <Topbar setIsHrSidebar={setIsHrSidebar} />
            <Routes>
              <Route path="/hrDashboard" element={<HrDashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/employeeBasic" element={<EmployeeBasic/>}/>
              <Route path="/employeeAdditional" element={<EmployeeAdditional/>}/>
              <Route path="/childInformation" element={<ChildInformation/>}/>
              <Route path="/contactPerson" element={<ContactPerson/>}/>
              <Route path="/education" element={<Education/>}/>
              <Route path="/experience" element={<Experience/>}/>
              <Route path="/employeeList" element={<EmployeeList/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default HrRouter;
