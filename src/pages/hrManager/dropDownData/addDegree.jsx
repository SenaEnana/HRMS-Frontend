import TextInput from "../../../components/textInput";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import { useMediaQuery } from "@mui/material";
import {useNavigate} from "react-router-dom";

function AddDegree() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  async function addNewDegree(values) {
    try {
      const response = await fetch("https://localhost:7140/api/Degree", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        console.log("successful");
        alert("degree added successfully");
        navigate("/degreeList");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.error("Error adding new degree:", error.message);
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
            addNewDegree(values);
          }}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-6 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">Add New Degree</p>
              </div>
              <TextInput
                type="text"
                name="Name"
                label="Degree Name"
                placeholder="enter degree name"
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

export default AddDegree;
