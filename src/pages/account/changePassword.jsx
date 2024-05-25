import { NavLink, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { useMediaQuery } from "@mui/material";
import TextInput from "../../components/textInput";
import { useState } from "react";
import { changePasswordValidation } from "./schema";

function ChangePassword() {
  const [error, setError] = useState(null);
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  async function changePassword(values) {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("Token not found in session storage");
        return;
      }
      const isValid = isTokenValid(token);
      if (!isValid) {
        console.error("Invalid token");
        return;
      }
      const userId = getUserIdFromToken(token);
      const result = await fetch(
        `https://localhost:7100/Account/ChangePassword?userId=${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (result.ok) {
        alert("Password changed successfully");
        navigate("/myAccount");
      } else {
        const errorText = await result.text();
        throw new Error(`Failed to change password: ${errorText}`);
      }
    } catch (error) {
      console.error("Change password:", error);
      alert(`Change password error: ${error.message}`);
    }
  }
  const getUserIdFromToken = (token) => {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    return decodedToken[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];
  };
  const isTokenValid = (token) => {
    if (!token) {
      return false;
    }
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const expirationTime = decodedToken.exp * 1000;
      const currentTime = Date.now();
      return currentTime < expirationTime;
    } catch (error) {
      console.error("Error decoding or validating token:", error);
      return false;
    }
  };
  return (
    <>
      <NavLink
        to={"/myAccount"}
        className="float-end btn btn-outline-danger btn-md mb-3 mt-3 me-2"
      >
        Back
      </NavLink>
      <div className="row justify-content-center mt-5">
        <Formik
          initialValues={{
            OldPassword: "",
            NewPassword: "",
            ConfirmPassword: "",
          }}
          onSubmit={(values) => {
            changePassword(values);
            console.log(values);
          }}
          validationSchema={changePasswordValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-6 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">Change Password</p>
              </div>
              <TextInput
                type="password"
                name="OldPassword"
                label="Old Password"
                placeholder="enter old password"
                value={formikValues.values.OldPassword}
                error={formikValues.errors.OldPassword}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="password"
                name="NewPassword"
                label="New Password"
                placeholder="enter new password"
                value={formikValues.values.NewPassword}
                error={formikValues.errors.NewPassword}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="password"
                name="ConfirmPassword"
                label="Confirm Password"
                placeholder="confirm password"
                value={formikValues.values.ConfirmPassword}
                error={formikValues.errors.ConfirmPassword}
                onChange={formikValues.handleChange}
              />
              {error && <p className="text-danger">{error}</p>}
              <div className="m-3">
                <input
                  className="btn btn-success col-10 float-end m-2"
                  type="button"
                  value="change"
                  onClick={formikValues.handleSubmit}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default ChangePassword;
