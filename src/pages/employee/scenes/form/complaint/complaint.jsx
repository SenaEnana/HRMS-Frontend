import { useNavigate } from "react-router";
import { Formik } from "formik";
import TextInput from "../../../../../components/textInput";
import { complaintValidation } from "./schema";
import { FormikTextField } from "formik-material-fields";

function Complaint() {
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
            position: "",
            branch: "",
            department: "",
            complaintEventDate: "",
            complaint: "",
            specificFacts: "",
            complaintRemedy: "",
            submissionDate: "",
          }}
          onSubmit={() => {
            console.log("successful");
            handleSubmit();
          }}
          validationSchema={complaintValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-5 pe-3 mt-5 bg-light">
              <div className="mt-3">
                <p className="fs-4 text-dark text-center">Complaint Form</p>
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
                name="position"
                label="Position"
                placeholder="enter your position"
                value={formikValues.values.position}
                error={formikValues.errors.position}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="text"
                name="branch"
                label="Branch"
                placeholder="enter your branch"
                value={formikValues.values.branch}
                error={formikValues.errors.branch}
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
                name="complaintEventDate"
                label="Complaint Event Date"
                placeholder="enter complaint event date"
                value={formikValues.values.complaintEventDate}
                error={formikValues.errors.complaintEventDate}
                onChange={formikValues.handleChange}
              />
              {/* <TextInput
                type="text"
                name="complaint"
                label="Complaint"
                placeholder="write your complaint here"
                value={formikValues.values.complaint}
                error={formikValues.errors.complaint}
                onChange={formikValues.handleChange}
              /> */}

              <FormikTextField
                className="form-control text-dark float-start mt-1 p-1 fs-5"
                name="complaint"
                label="Complaint"
                margin="normal"
                value={formikValues.values.complaint}
                error={formikValues.errors.complaint}
                onChange={formikValues.handleChange}
                fullWidth
              />
              <FormikTextField
                className="form-control text-dark float-start mt-1 p-1 fs-5"
                name="specificFacts"
                label="Specific Facts"
                margin="normal"
                value={formikValues.values.specificFacts}
                error={formikValues.errors.specificFacts}
                onChange={formikValues.handleChange}
                fullWidth
              />
              <FormikTextField
                className="form-control text-dark float-start mt-1 p-1 fs-5"
                name="complaintRemedy"
                label="Complaint Remedy"
                margin="normal"
                value={formikValues.values.complaintRemedy}
                error={formikValues.errors.complaintRemedy}
                onChange={formikValues.handleChange}
                fullWidth
              />

              {/* <TextInput
                type="text"
                name="specificFacts"
                label="Specific Facts"
                placeholder="enter specific facts you have"
                value={formikValues.values.specificFacts}
                error={formikValues.errors.specificFacts}
                onChange={formikValues.handleChange}
              /> 
              <TextInput
                type="text"
                name="complaintRemedy"
                label="Complaint Remedy"
                placeholder="enter your complaint remedy"
                value={formikValues.values.complaintRemedy}
                error={formikValues.errors.complaintRemedy}
                onChange={formikValues.handleChange}
              /> */}
              <TextInput
                type="date"
                name="submissionDate"
                label="Submission Date"
                placeholder="enter submission date"
                value={formikValues.values.submissionDate}
                error={formikValues.errors.submissionDate}
                onChange={formikValues.handleChange}
              />

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

export default Complaint;
