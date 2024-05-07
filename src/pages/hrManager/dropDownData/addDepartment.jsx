import TextInput from "../../../components/textInput";
import { NavLink } from "react-router-dom";
import { dropDownValidation } from "./schema";
import { Formik } from "formik";
import {Box, useMediaQuery} from "@mui/material";

function AddDepartment(){
    const isNonMobile = useMediaQuery("(min-width:600px)");
    async function addNewDepartment(values) {
        try {
          const response = await fetch(
            "https://localhost:7140/Department/AddDepartment",
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
          console.error("Error adding new department:", error.message);
        }
      }

    return(
        <div className="row justify-content-center">
                  <NavLink
          to={"/departmentList"}
          className="float-end btn btn-info btn-sm mb-2"
        >
          Department List
        </NavLink>
      <Box className="m-2">
        <Formik
          initialValues={{
            Name: "",
          }}
          onSubmit={(values) => {
            addNewDepartment(values);
            console.log(values);
          }}
          validationSchema={dropDownValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">
                  Add New Department
                </p>
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
                  label="Department Name"
                  placeholder="enter department name"
                  value={formikValues.values.Name}
                  error={formikValues.errors.Name}
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

export default AddDepartment;