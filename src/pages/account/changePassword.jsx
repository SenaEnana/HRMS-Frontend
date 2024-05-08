import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import { Box, useMediaQuery } from "@mui/material";
import TextInput from "../../components/textInput";

function ChangePassword() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  async function changePassword(values) {
    try {
      const response = await fetch(
        "https://localhost:7140/LeaveType/AddLeaveTypes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      console.log(response);
      if (response.ok) {
        console.log("successful");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.error("Error adding new branch:", error.message);
    }
  }

  return (
    <div className="row justify-content-center">
      <NavLink to={"/myAccount"} className="float-end btn btn-info btn-sm mb-2">
        Back
      </NavLink>
      <Box className="m-2">
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
          validationSchema={leaveTypeValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">Change Password</p>
              </div>
              <Box
                display="grid"
                gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
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
              </Box>
              <div className="m-3">
                <input
                  className="btn btn-info col-10 float-end m-2"
                  type="button"
                  value="add"
                  onClick={formikValues.handleSubmit}
                />
              </div>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
}

export default ChangePassword;
