import TextInput from "../../../components/textInput";
import { dropDownValidation } from "./schema";
import { Formik } from "formik";
import { useMediaQuery } from "@mui/material";
import {useNavigate} from "react-router-dom"

function AddPosition() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  async function addNewPosition(values) {
    try {
      const response = await fetch("http://localhost:5100/Position", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        navigate("/positionList");
        alert("position added successfully");
      } else {
        alert("failed");
      }
    } catch (error) {
      console.error("Error adding new position:", error.message);
    }
  }
  return (
    <>
      <div className="row justify-content-center mt-5">
        <Formik
          initialValues={{
            Name: "",
          }}
          validationSchema={dropDownValidation}
          onSubmit={(values) => {
            addNewPosition(values);
          }}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-6 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">Add New Position</p>
              </div>
              <TextInput
                type="text"
                name="Name"
                label="Position Name"
                placeholder="enter position name"
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

export default AddPosition;
