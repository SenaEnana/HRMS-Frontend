import { useNavigate } from "react-router";
import { Formik } from "formik";
import TextInput from "../../../../../components/textInput";
import { resignationValidation } from "./schema";
import { FormikTextField } from "formik-material-fields";

function ResignationRequest() {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/employeeDashboard");
  }

  return (
    <>
      <div className="row justify-content-center">
        <Formik
          initialValues={{
            name: "",
            department: "",
            hireDate: "",
            position: "",
            dutyStation: "",
            separationDate: "",
            reason: "",
            satisfaction: "",
            workRelationship: "",
            recommendation: "",
            comments: "",
          }}
          onSubmit={() => {
            console.log("successful");
            handleSubmit();
          }}
          validationSchema={resignationValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-5 pe-3 mt-5 bg-light">
              <div className="mt-3">
                <p className="fs-4 text-dark text-center">
                  Resignation Request Form
                </p>
              </div>
              <TextInput
                type="text"
                name="name"
                label="Name"
                placeholder="enter your name"
                value={formikValues.values.name}
                error={formikValues.errors.name}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="text"
                name="department"
                label="Department"
                placeholder="enter your department"
                value={formikValues.values.department}
                error={formikValues.errors.department}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="date"
                name="hireDate"
                label="Hire Date"
                placeholder="enter your hire date"
                value={formikValues.values.hireDate}
                error={formikValues.errors.hireDate}
                onChange={formikValues.handleChange}
              />

              <TextInput
                type="text"
                name="position"
                label="Position"
                placeholder="enter your position"
                value={formikValues.values.position}
                error={formikValues.errors.position}
                onChange={formikValues.handleChange}
              />

              <TextInput
                type="date"
                name="dutyStation"
                label="Duty Station"
                placeholder="enter your duty station"
                value={formikValues.values.dutyStation}
                error={formikValues.errors.dutyStation}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="date"
                name="separationDate"
                label="Separation Date"
                placeholder="enter your separation date"
                value={formikValues.values.separationDate}
                error={formikValues.errors.separationDate}
                onChange={formikValues.handleChange}
              />
              <FormikTextField
                className="form-control text-dark float-start mt-1 p-1 fs-5"
                name="reason"
                label="Reason"
                margin="normal"
                value={formikValues.values.reason}
                error={formikValues.errors.reason}
                onChange={formikValues.handleChange}
                fullWidth
              />
              {/* <TextInput
                type="textfield"
                name="reason"
                label="Reason"
                placeholder="enter reason of separation"
                value={formikValues.values.reason}
                error={formikValues.errors.reason}
                onChange={formikValues.handleChange}
              /> */}
              <TextInput
                type="text"
                name="satisfaction"
                label="Satisfaction"
                placeholder="enter if you are satisfied or not"
                value={formikValues.values.satisfaction}
                error={formikValues.errors.satisfaction}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="text"
                name="workRelationship"
                label="Work Relationship"
                placeholder="enter your work relationship"
                value={formikValues.values.workRelationship}
                error={formikValues.errors.workRelationship}
                onChange={formikValues.handleChange}
              />
              <FormikTextField
                className="form-control text-dark float-start mt-1 p-1 fs-5"
                name="recommendation"
                label="Recommendation"
                margin="normal"
                value={formikValues.values.recommendation}
                error={formikValues.errors.recommendation}
                onChange={formikValues.handleChange}
                fullWidth
              />
              <FormikTextField
                name="comments"
                label="Comments"
                margin="normal"
                fullWidth
              />
              {/* <TextInput
                type="textbox"
                name="recommendation"
                label="Recommendation"
                placeholder="enter any recommendation"
                value={formikValues.values.recommendation}
                error={formikValues.errors.recommendation}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="textbox"
                name="comments"
                label="Comments"
                placeholder="enter any comments"
                value={formikValues.values.comments}
                error={formikValues.errors.comments}
                onChange={formikValues.handleChange}
              /> */}

              <div className="m-3">
                <input
                  className="btn btn-info col-12"
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

export default ResignationRequest;
