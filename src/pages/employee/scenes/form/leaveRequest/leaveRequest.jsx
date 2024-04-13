import { useNavigate } from "react-router";
import { Formik } from "formik";
import TextInput from "../../../../../components/textInput";
import { leaveValidation } from "./schema";

function LeaveRequest() {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/employeeDashboard");
  }
  return (
    <>
      <div className="row justify-content-center">
        <Formik
          initialValues={{
            date: "",
            name: "",
            idNo: "",
            department: "",
            jobTitle: "",
            leaveRequested: "",
            leaveType: "",
            placeDuringLeave: "",
            phoneNumber: "",
            email: "",
          }}
          onSubmit={() => {
            console.log("successful");
            handleSubmit();
          }}
          validationSchema={leaveValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-4 pe-3 mt-5 bg-light">
              <div className="mt-3">
                <p className="fs-4 text-dark text-center">Leave Request Form</p>
              </div>
              <TextInput
                type="date"
                name="date"
                label="Date"
                placeholder="enter date"
                value={formikValues.values.date}
                error={formikValues.errors.date}
                onChange={formikValues.handleChange}
              />
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
                type="number"
                name="idNo"
                label="Id Number"
                placeholder="enter your id Number"
                value={formikValues.values.idNo}
                error={formikValues.errors.idNo}
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
                type="text"
                name="jobTitle"
                label="Job Title"
                placeholder="enter your job title"
                value={formikValues.values.jobTitle}
                error={formikValues.errors.jobTitle}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="number"
                name="leaveRequested"
                label="Leave Requested"
                placeholder="enter your requested leave number"
                value={formikValues.values.leaveRequested}
                error={formikValues.errors.leaveRequested}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="text"
                name="leaveType"
                label="Leave Type"
                placeholder="enter leave type"
                value={formikValues.values.leaveType}
                error={formikValues.errors.leaveType}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="text"
                name="placeDuringLeave"
                label="Place During Leave"
                placeholder="enter your place during leave"
                value={formikValues.values.placeDuringLeave}
                error={formikValues.errors.placeDuringLeave}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="number"
                name="phoneNumber"
                label="Phone Number"
                placeholder="enter your phone number"
                value={formikValues.values.phoneNumber}
                error={formikValues.errors.phoneNumber}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="email"
                name="email"
                label="Email"
                placeholder="enter your email account"
                value={formikValues.values.email}
                error={formikValues.errors.email}
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

export default LeaveRequest;
