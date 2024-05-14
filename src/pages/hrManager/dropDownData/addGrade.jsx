import TextInput from "../../../components/textInput";
import { Formik } from "formik";
import { useMediaQuery } from "@mui/material";
import {useNavigate} from "react-router-dom";

function AddGrade() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  async function addNewGrade(values) {
    try {
      const response = await fetch("https://localhost:7140/Grade/AddGrade", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        alert("grade added successfully");
        navigate("/gradeList");
      } else {
        alert("failed");
      }
    } catch (error) {
      console.error("Error adding new grade:", error.message);
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
              addNewGrade(values);
            }}
          >
            {(formikValues) => (
              <form className="form-group rounded border col-6 ms-5 ms-4 bg-light">
                <div className="ms-3">
                  <p className="fs-4 text-dark text-center">Add New Grade</p>
                </div>
                <TextInput
                  type="text"
                  name="Name"
                  label="Grade Name"
                  placeholder="enter grade name"
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

export default AddGrade;
