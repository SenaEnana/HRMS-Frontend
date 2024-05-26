import { leaveTypeValidation } from "./schema";
import TextInput from "../../../components/textInput";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";

function AddEvaluationFactor() {
  const navigate = useNavigate();
  async function addEvaluationFactor(values) {
    try {
      const response = await fetch(
        "https://localhost:7100/api/EvaluationFactor",
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
        alert("Evaluation Factor added successfully");
        navigate("/evaluationFactorList");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.error("Error adding new evaluation factor:", error.message);
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
            addEvaluationFactor(values);
          }}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-6 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">Add Evaluation Factor</p>
              </div>
              <TextInput
                type="text"
                name="Name"
                label="Evaluation Factor Name"
                placeholder="enter leave type name"
                value={formikValues.values.Name}
                error={formikValues.errors.Name}
                onChange={formikValues.handleChange}
              />
              <div className="m-3">
                <input
                  className="btn btn-success col-10 float-end m-2"
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

export default AddEvaluationFactor;
