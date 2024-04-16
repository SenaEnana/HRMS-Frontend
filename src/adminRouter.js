import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
// import AdminSidebar from "./pages/admin/scenes/global/adminSidebar";
//import Topbar from "./pages/admin/scenes/global/topbar";
import AdminDashboard from "./pages/admin/scenes/dashboard/adminDashboard";
import Team from "./pages/admin/scenes/team";
import Contacts from "./pages/admin/scenes/contacts/contacts";
import Invoices from "./pages/admin/scenes/invoices";
import Form from "./pages/admin/scenes/form";
import Bar from "./pages/admin/scenes/bar";
import Pie from "./pages/admin/scenes/pie";
import Line from "./pages/admin/scenes/line";
import FAQ from "./pages/admin/scenes/faq";
import Calendar from "./pages/admin/scenes/calendar/calendar";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./pages/commonPages/sidebar";
import Topbar from "./pages/commonPages/topbar";

function AdminRouter() {
    const [theme, colorMode] = useMode();
    const [isAdminSidebar, setIsAdminSidebar] = useState(true);
    return(
            <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                  <Sidebar isAdminSidebar={isAdminSidebar} />
                <main className="content">
                  <Topbar setIsAdminSidebar={setIsAdminSidebar} />
                  <Routes>
                  <Route path="/adminDashboard" element={<AdminDashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/calendar" element={<Calendar />} />
                  </Routes>
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
          );
        }
export default AdminRouter;