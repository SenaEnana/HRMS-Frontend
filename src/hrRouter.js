import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Bar from "./pages/hrManager/bar";
import Pie from "./pages/hrManager/pie";
import Line from "./pages/hrManager/line";
import { ColorModeContext, useMode } from "./theme";
import HrDashboard from "./pages/hrManager/dashboard/hrDashboard";
import EmployeeBasic from "./pages/hrManager/form/employeeBasic/employeeBasic";
import EmployeeList from "./pages/hrManager/employeeList/employeeList";
import UpdateEmployeeBasic from "./pages/hrManager/updateEmployee/updateEmployeeBasic";
import EmployeeAddList from "./pages/hrManager/employeeList/employeeAddList";
import ContactInfoList from "./pages/hrManager/employeeList/contactInfoList";
import EmployeeInfo from "./pages/hrManager/form/employeeInfo";
import ContactInformation from "./pages/hrManager/form/contactInformation";
import AddBranch from "./pages/hrManager/dropDownData/addBranch";
import AddPosition from "./pages/hrManager/dropDownData/addPosition";
import AddDegree from "./pages/hrManager/dropDownData/addDegree";
import AddDepartment from "./pages/hrManager/dropDownData/addDepartment";
import AddGrade from "./pages/hrManager/dropDownData/addGrade";
import BranchList from "./pages/hrManager/dropDownData/dropLists/branchList";
import DegreeList from "./pages/hrManager/dropDownData/dropLists/degreeList";
import PositionList from "./pages/hrManager/dropDownData/dropLists/positionList";
import GradeList from "./pages/hrManager/dropDownData/dropLists/gradeList";
import HrSidebar from "./pages/hrManager/hrSidebar/hrSidebar";
import PerformanceManagement from "./pages/hrManager/PerformanceManagement/PerformanceManagement";
import DepartmentList from "./pages/hrManager/dropDownData/dropLists/departmentList";

function HrRouter() {
  const [theme, colorMode] = useMode();
  
  const isAuth = true;
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          {/* <HrSidebar isHrSidebar={isHrSidebar} /> */}
          {isAuth &&
                  <HrSidebar/>
                  }
          <main className="content">
            <Routes>
              <Route path="/hrDashboard" element={<HrDashboard />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/employeeBasic" element={<EmployeeBasic/>}/>
              <Route path="/employeeInfo" element={<EmployeeInfo/>}/>
              <Route path="/contactInformation" element={<ContactInformation/>}/>
              <Route path="/employeeList" element={<EmployeeList/>}/>
              <Route path="/employeeAddList" element={<EmployeeAddList/>}/>
              <Route path="/updateEmployeeBasic" element={<UpdateEmployeeBasic/>}/>
              <Route path="/employeeContactInfoList" element={<ContactInfoList/>}/>
              <Route path="/addBranch" element={<AddBranch/>}/>
              <Route path="/addPosition" element={<AddPosition/>}/>
              <Route path="/addDegree" element={<AddDegree/>}/>
              <Route path="/addDepartment" element={<AddDepartment/>}/>
              <Route path="/addGrade" element={<AddGrade/>}/>
              <Route path="/branchList" element={<BranchList/>}/>
              <Route path="/departmentList" element={<DepartmentList/>}/>
              <Route path="/degreeList" element={<DegreeList/>}/>
              <Route path="/positionList" element={<PositionList/>}/>
              <Route path="/gradeList" element={<GradeList/>}/>
              <Route path="/performanceManagement" element={<PerformanceManagement/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default HrRouter;
