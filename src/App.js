import AdminRouter from "./adminRouter";
import EmployeeRouter from "./employeeRouter";
import Auth from "./pages/auth/auth";

function App() {
  const username = JSON.parse(localStorage.getItem("username"));
  console.log(username);
  return (
    <div>
      {/* <AdminRouter/> */}
      <EmployeeRouter/>
      {/* <Auth/> */}
    </div>
  );
}

export default App;
