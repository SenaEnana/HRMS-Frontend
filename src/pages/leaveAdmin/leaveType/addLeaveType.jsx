import { NavLink } from "react-router-dom";
import { leaveTypeValidation } from "./schema";
import TextInput from "../../../components/textInput";
import { Formik } from "formik";
import {Box, useMediaQuery} from "@mui/material";

function AddLeaveType() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  async function addNewLeaveType(values) {
    try {
      const response = await fetch("https://localhost:7140/LeaveType/AddLeaveTypes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
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
      <NavLink
        to={"/leaveTypeList"}
        className="float-end btn btn-info btn-sm mb-2"
      >
        Leave Type List
      </NavLink>
      <Box className="m-2">
        <Formik
          initialValues={{
            Name: "",
            AllowedDays: "",
          }}
          onSubmit={(values) => {
            addNewLeaveType(values);
            console.log(values);
          }}
          validationSchema={leaveTypeValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">Add New Leave Type</p>
              </div>
              <Box
                display="grid"
                gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextInput
                  type="text"
                  name="Name"
                  label="Leave Type Name"
                  placeholder="enter leave type name"
                  value={formikValues.values.Name}
                  error={formikValues.errors.Name}
                  onChange={formikValues.handleChange}
                />
                                <TextInput
                  type="number"
                  name="AllowedDays"
                  label="Allowed Days"
                  placeholder="enter allowed days"
                  value={formikValues.values.AllowedDays}
                  error={formikValues.errors.AllowedDays}
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

export default AddLeaveType;
