import { NavLink } from "react-router-dom";
import { leaveTypeValidation } from "./schema";
import TextInput from "../../../components/textInput";
import { Formik } from "formik";
import { Box, useMediaQuery } from "@mui/material";

function AddLeaveType() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  async function addNewLeaveType(values) {
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
        alert("Leave Type added successfully");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.error("Error adding new branch:", error.message);
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between mt-5 text-dark">
        <NavLink
          to={"/leaveTypeList"}
          className="float-end btn btn-info btn-sm m-2"
        >
          Leave Type List
        </NavLink>
      </div>
      <div className="row justify-content-center">
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
      </div>
    </>
  );
}

export default AddLeaveType;
