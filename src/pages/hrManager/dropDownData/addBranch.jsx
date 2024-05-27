import TextInput from "../../../components/textInput";
import { Formik } from "formik";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddBranch() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
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
        alert("branch added successfully");
        navigate("/branchList");
      } else {
        alert("failed");
      }
    } catch (error) {
      console.error("Error adding new branch:", error.message);
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
              addNewBranch(values);
            }}
          >
            {(formikValues) => (
              <form className="form-group rounded border col-6 ms-5 ms-4 bg-light">
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

export default AddBranch;
