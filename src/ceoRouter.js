import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Bar from "./pages/ceo/bar";
import Pie from "./pages/ceo/pie";
import Line from "./pages/ceo/line";
import { ColorModeContext, useMode } from "./theme";
import CeoDashboard from "./pages/ceo/dashboard/ceoDashboard";
import CeoSidebar from "./pages/ceo/sidebar/ceoSidebar";
import ResignationList from "./pages/ceo/resignation/resignationList";
import PromoteEmployee from "./pages/ceo/promotion/promoteEmployee";
import ShortListed from "./pages/ceo/promotion/shortListed";
import ShortListedDetail from "./pages/ceo/promotion/shortListedDetail";
import ChangePassword from "./pages/account/changePassword";
import MyAccount from "./pages/account/myAccount";
import UploadImage from "./pages/account/uploadImage";

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
                  <Route path="/" element={<CeoDashboard/>} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/resignationList" element={<ResignationList/>}/>
                  <Route path="/promoteEmployee/:id" element={<PromoteEmployee/>}/>
                  <Route path="/shortListed" element={<ShortListed/>}/>
                  <Route path="/shortListedDetail/:id" element={<ShortListedDetail/>}/>
                  <Route path="/myAccount" element={<MyAccount/>}/>
                  <Route path="/changePassword" element={<ChangePassword/>}/>
                  <Route path="/uploadImage" element={<UploadImage/>}/>
                  </Routes>
                </main>
              </div>
            </ThemeProvider>
          </ColorModeContext.Provider>
          );
        }
export default CeoRouter;