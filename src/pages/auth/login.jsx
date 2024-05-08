import { Formik } from "formik";
import { signInValidation } from "./schema";
import TextInput from "../../components/textInput";
import { useNavigate } from "react-router";
import { useState } from "react";

const Login = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const username = JSON.parse(localStorage.getItem("username"));

  async function handleLogin(values) {
    try {
      const response = await fetch('https://localhost:7140/Account/Login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      });

      if (!response.ok) {
        throw new Error('Failed to login');
      }

      const token = await response.text(); 
      sessionStorage.setItem("token", token);
      navigate("/employeeDashboard");
    } catch (error) {
      setError('Invalid username or password');
      console.error(error);
    }
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
                type="text"
                name="username"
                label="Employee Id"
                placeholder="enter employee id"
                value={formikValues.values.username}
                error={formikValues.errors.username}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="password"
                name="password"
                label="Password"
                placeholder="enter password"
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
              {error && <p>{error}</p>}
            </form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Login;
