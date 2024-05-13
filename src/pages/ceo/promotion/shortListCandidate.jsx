import TextInput from "../../../components/textInput";
import { Formik } from "formik";
import { useMediaQuery } from "@mui/material";

function ShortListCandidate() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  async function addShortListCandidate(values) {
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
        alert("candidate added successfully");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.error("Error adding new branch:", error.message);
    }
  }
  return (
    <>
      <div className="row justify-content-center">
          <Formik
            initialValues={{
              Name: "",
            }}
            onSubmit={(values) => {
              addShortListCandidate(values);
              console.log(values);
            }}
          >
            {(formikValues) => (
              <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
                <div className="ms-3">
                  <p className="fs-4 text-dark text-center">Short List Candidate</p>
                </div>
                <TextInput
                  type="text"
                  name="Emp_Id"
                  label="Employee Id"
                  placeholder="enter employee id"
                  value={formikValues.values.Emp_Id}
                  error={formikValues.errors.Emp_Id}
                  onChange={formikValues.handleChange}
                />
                <div className="m-3">
                  <input
                    className="btn btn-info col-10 m-2"
                    type="button"
                    value="submit"
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

export default ShortListCandidate;
