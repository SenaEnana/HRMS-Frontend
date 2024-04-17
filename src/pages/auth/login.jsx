import { Formik } from "formik";
import { signInValidation } from "./schema";
import TextInput from "../../components/textInput";
import { useNavigate } from "react-router";
import { useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  function handleLogin(values) {
    localStorage.setItem("username", JSON.stringify(values.username));
    navigate("/adminDashboard");
  }

  return (
    <>
      <div className="row justify-content-center">
        <Formik
          initialValues={{
            username: "",
            password: "",
          }}
          onSubmit={(values) => {
            console.log("successful");
            handleLogin(values);
          }}
          validationSchema={signInValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-4 pe-3 mt-5 bg-light">
              <div className="mt-3">
                <p className="fs-4 text-dark text-center">Login</p>
              </div>
              <TextInput
                type="username"
                name="username"
                label="Username"
                placeholder="enter your username"
                value={formikValues.values.username}
                error={formikValues.errors.username}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="password"
                name="password"
                label="Password"
                placeholder="enter your password"
                value={formikValues.values.password}
                error={formikValues.errors.password}
                onChange={formikValues.handleChange}
              />

              <div className="m-3">
                <input
                  className="btn btn-info col-12"
                  type="button"
                  value="login"
                  onClick={formikValues.handleSubmit}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
