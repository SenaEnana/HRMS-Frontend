import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AdminDashboard from "./pages/superAdmin/dashboard/adminDashboard";
import Team from "./pages/superAdmin/team";
import Form from "./pages/superAdmin/form";
import Bar from "./pages/superAdmin/bar";
import Pie from "./pages/superAdmin/pie";
import Line from "./pages/superAdmin/line";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./pages/commonPages/sidebar";
<<<<<<< HEAD
//import Topbar from "./pages/commonPages/topbar";

function AdminRouter() {
  const [theme, colorMode] = useMode();
  const [isAdminSidebar, setIsAdminSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isAdminSidebar={isAdminSidebar} />
          <main className="content">
            {/* <Topbar setIsAdminSidebar={setIsAdminSidebar} /> */}
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
=======

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
                  <Routes>
                  <Route path="/" element={<AdminDashboard />} />
                  <Route path="/team" element={<Team />} />
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
>>>>>>> c289df35ffab41cfa95041c5996490beebea5635
export default AdminRouter;