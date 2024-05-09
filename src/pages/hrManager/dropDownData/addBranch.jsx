import TextInput from "../../../components/textInput";
import { NavLink } from "react-router-dom";
import { dropDownValidation } from "./schema";
import { Formik } from "formik";
import { useMediaQuery } from "@mui/material";

function AddBranch() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  async function addNewBranch(values) {
    try {
      const response = await fetch("https://localhost:7140/Branch/AddBranch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        console.log("successful");
        alert("branch added successfully");
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
          to={"/branchList"}
          className="float-end btn btn-info btn-sm m-2"
        >
          Branch List
        </NavLink>
      </div>
      <div className="row justify-content-center">
          <Formik
            initialValues={{
              Name: "",
            }}
            onSubmit={(values) => {
              addNewBranch(values);
              console.log(values);
            }}
            // validationSchema={dropDownValidation}
          >
            {(formikValues) => (
              <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
                <div className="ms-3">
                  <p className="fs-4 text-dark text-center">Add New Branch</p>
                </div>
                <TextInput
                  type="text"
                  name="Name"
                  label="Branch Name"
                  placeholder="enter branch name"
                  value={formikValues.values.Name}
                  error={formikValues.errors.Name}
                  onChange={formikValues.handleChange}
                />
                <div className="m-3">
                  <input
                    className="btn btn-info col-10 m-2"
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

export default AddBranch;
