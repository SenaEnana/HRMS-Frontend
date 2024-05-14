import TextInput from "../../../components/textInput";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import { useMediaQuery } from "@mui/material";
import {useNavigate} from "react-router-dom";

function AddDepartment() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
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
      if (response.ok) {
        alert("department added successfully");
        navigate("/departmentList");
      } else {
        alert("failed");
      }
    } catch (error) {
      console.error("Error adding new department:", error.message);
    }
  }

  return (
    <>
      <div className="row justify-content-center mt-5">
          <Formik
            initialValues={{
              Name: "",
            }}
            onSubmit={(values) => {
              addNewDepartment(values);
            }}
          >
            {(formikValues) => (
              <form className="form-group rounded border col-6 ms-5 ms-4 bg-light">
                <div className="ms-3">
                  <p className="fs-4 text-dark text-center">
                    Add New Department
                  </p>
                </div>
                <TextInput
                  type="text"
                  name="Name"
                  label="Department Name"
                  placeholder="enter department name"
                  value={formikValues.values.Name}
                  error={formikValues.errors.Name}
                  onChange={formikValues.handleChange}
                />
                <div className="m-3">
                  <input
                    className="btn btn-success col-10 m-2"
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

export default AddDepartment;
