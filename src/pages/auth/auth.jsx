import { useState } from "react";
import Login from "./login";
//import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function Auth({setAuth}) {
   const [loginStatus, setLoggedIn] = useState(true);
   return (
    <>
      {loginStatus ? (
        <Login setLoggedIn={setLoggedIn} setAuth={setAuth} />
      ) : null}
      
    </>
  ); 
}
export default Auth;
