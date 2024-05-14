import { useNavigate } from "react-router";
import { Formik } from "formik";
import { FormikTextField } from "formik-material-fields";
import { useState, useEffect } from "react";
import TextInput from "../../../components/textInput";
import { sendFeedbackValidation } from "./schema";

function SendFeedback() {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/");
  }
  const [LeaveTypeId, setLeaveTypeId] = useState([{ name: "", id: "" }]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://localhost:7140/LeaveType/GetLeaveTypes"
      );
      const newData = await response.json();
      setLeaveTypeId(newData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="row justify-content-center">
        <Formik
          initialValues={{
            Emp_Id: "",
            ImprovementPoint: "",
            Recommendation: "",
            WorkExpectation: "",
            ProblemFaced: "",
            Comments: "",
          }}
          onSubmit={() => {
            handleSubmit();
          }}
          validationSchema={sendFeedbackValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-5 pe-3 mt-5 bg-light">
              <div className="mt-3">
                <p className="fs-4 text-dark text-center">Send Feedback Form</p>
              </div>
              <TextInput
                type="text"
                name="Emp_Id"
                label="Emp_Id"
                placeholder="enter Emp_Id"
                value={formikValues.values.Emp_Id}
                error={formikValues.errors.Emp_Id}
                onChange={formikValues.handleChange}
              />

              <FormikTextField
                className="form-control text-dark float-start mt-1 p-1 fs-5"
                name="ImprovementPoint"
                label="ImprovementPoint"
                margin="normal"
                value={formikValues.values.ImprovementPoint}
                error={formikValues.errors.ImprovementPoint}
                onChange={formikValues.handleChange}
                fullWidth
              />
              <FormikTextField
                className="form-control text-dark float-start mt-1 p-1 fs-5"
                name="Recommendation"
                label="Recommendation"
                margin="normal"
                value={formikValues.values.Recommendation}
                error={formikValues.errors.Recommendation}
                onChange={formikValues.handleChange}
                fullWidth
              />
              <FormikTextField
                className="form-control text-dark float-start mt-1 p-1 fs-5"
                name="WorkExpectation"
                label="WorkExpectation"
                margin="normal"
                value={formikValues.values.WorkExpectation}
                error={formikValues.errors.WorkExpectation}
                onChange={formikValues.handleChange}
                fullWidth
              />
              <FormikTextField
                className="form-control text-dark float-start mt-1 p-1 fs-5"
                name="ProblemFaced"
                label="ProblemFaced"
                margin="normal"
                value={formikValues.values.ProblemFaced}
                error={formikValues.errors.ProblemFaced}
                onChange={formikValues.handleChange}
                fullWidth
              />
              <FormikTextField
                className="form-control text-dark float-start mt-1 p-1 fs-5"
                name="Comments"
                label="Comments"
                margin="normal"
                value={formikValues.values.Comments}
                error={formikValues.errors.Comments}
                onChange={formikValues.handleChange}
                fullWidth
              />
              <div className="m-3">
                <input
                  className="btn btn-success col-12"
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

export default SendFeedback;
