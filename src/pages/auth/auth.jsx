import { useState } from "react";
import Login from "./login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Auth() {
  // const [loginStatus, setLoggedIn] = useState(true);
  return (
    <>
    <Routes>
      <Route path="/" element={<Login/>}/>
    </Routes>
      {/* {loginStatus ? (
        <Login />
      ) : null} */}
    </>
  );
}
export default Auth;
