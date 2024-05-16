import {Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import AdminDashboard from "./pages/superAdmin/dashboard/adminDashboard";
import Team from "./pages/superAdmin/team";
import Bar from "./pages/superAdmin/bar";
import { ColorModeContext, useMode } from "./theme";
import AdminSidebar from "./pages/superAdmin/sidebar/adminSidebar";

function AdminRouter() {
    const [theme, colorMode] = useMode();
    return(
            <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                  <AdminSidebar />
                <main className="content">
                  <Routes>
                  <Route path="/" element={<AdminDashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/bar" element={<Bar />} />
                  </Routes>
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
          );
        }
export default AdminRouter;