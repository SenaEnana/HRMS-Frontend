import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Form from "./pages/ceo/form";
import Bar from "./pages/ceo/bar";
import Pie from "./pages/ceo/pie";
import Line from "./pages/ceo/line";
import { ColorModeContext, useMode } from "./theme";
import CeoDashboard from "./pages/ceo/dashboard/ceoDashboard";
import CeoSidebar from "./pages/ceo/sidebar/ceoSidebar";
import ResignationList from "./pages/ceo/resignation/resignationList";
import PromoteEmployee from "./pages/ceo/promotion/promoteEmployee";

function CeoRouter() {
    const [theme, colorMode] = useMode();
    const [isCeoSidebar, setIsCeoSidebar] = useState(true);
    return(
            <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <div className="app">
                  <CeoSidebar isCeoSidebar={isCeoSidebar} />
                <main className="content">
                  <Routes>
                  <Route path="/ceoDashboard" element={<CeoDashboard/>} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/resignationList" element={<ResignationList/>}/>
                  <Route path="/promoteEmployee" element={<PromoteEmployee/>}/>
                  </Routes>
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
          );
        }
export default CeoRouter;