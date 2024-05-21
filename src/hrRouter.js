import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Bar from "./pages/hrManager/bar";
import Pie from "./pages/hrManager/pie";
import { ColorModeContext, useMode } from "./theme";
import HrDashboard from "./pages/hrManager/dashboard/hrDashboard";
import EmployeeBasic from "./pages/hrManager/form/employeeBasic/employeeBasic";
import EmployeeList from "./pages/hrManager/employeeList/employeeList";
import UpdateEmployeeBasic from "./pages/hrManager/updateEmployee/updateEmployeeBasic";
import EmployeeInfo from "./pages/hrManager/form/employeeInfo";
import StatusInformation from "./pages/hrManager/form/statusInformation";
import ContactInformation from "./pages/hrManager/form/contactInformation";
import AdditionalInformation from "./pages/hrManager/form/additionalInformation";
import EducationInformation from "./pages/hrManager/form/educationInformation";
import MultiStepForm from "./pages/hrManager/form/multiStepForm";
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
import EmployeeDetail from "./pages/hrManager/employeeList/employeeDetail";
import PostJob from "./pages/hrManager/postJob/postJob";
import PostedJob from "./pages/hrManager/postJob/postedJob";
import CandidateList from "./pages/hrManager/postJob/candidateList";
import CandidateDetail from "./pages/hrManager/postJob/candidateDetail";
import ChangePassword from "./pages/account/changePassword";
import MyAccount from "./pages/account/myAccount";
import UploadImage from "./pages/account/uploadImage";

function HrRouter() {
  const [theme, colorMode] = useMode();
const isAuth = true;

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
                  <HrSidebar/>
          <main className="content">
            <Routes>
              <Route path="/" element={<HrDashboard />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/employeeBasic" element={<EmployeeBasic/>}/>
              <Route path="/employeeInfo" element={<EmployeeInfo/>}/>
              <Route path="/contactInformation" element={<ContactInformation/>}/>
              <Route path="/statusInformation" element={<StatusInformation/>}/>
              <Route path="/multiStepForm" element={<MultiStepForm/>}/>
              <Route path="/educationInformation" element={<EducationInformation/>}/>
              <Route path="/additionalInformation" element={<AdditionalInformation/>}/>
              <Route path="/employeeList" element={<EmployeeList/>}/>
              <Route path="/updateEmployeeBasic/:id" element={<UpdateEmployeeBasic/>}/>
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
              <Route path="/employeeDetail/:id" element={<EmployeeDetail/>}/>
              <Route path="/postJob" element={<PostJob/>}/>
              <Route path="/postedJob" element={<PostedJob/>}/>
              <Route path="/candidateList/:jobId" element={<CandidateList/>}/>
              <Route path="/candidateDetail/:id" element={<CandidateDetail/>}/>
              <Route path="/changePassword" element={<ChangePassword/>}/>
              <Route path="/myAccount" element={<MyAccount/>}/>
              <Route path="/uploadImage" element={<UploadImage/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default HrRouter;
