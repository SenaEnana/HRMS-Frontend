import { useNavigate } from "react-router";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import TextInput from "../../../../components/textInput";
import { leaveValidation } from "./schema";
import DropDown from "../../../../components/DropDown";

function LeaveRequest() {
  const navigate = useNavigate();
  const [LeaveTypeId, setLeaveTypeId] = useState([{ name: "", id: "" }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:5100/LeaveType/GetLeaveTypes"
      );
      const newData = await response.json();
      setLeaveTypeId(newData);
      setLoading(false);
    };
    fetchData();
  }, []);
  const handleSubmit = async (values) => {
    try {
      const response = await fetch(
        "http://localhost:5100/api/Leave/RequestLeave",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        const data = await response.json();
        alert("Leave request submitted successfully");
        navigate("/");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      setError("Leave request submitted successfully");
    }
  };
  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="row justify-content-center">
        <Formik
          initialValues={{
            Emp_Id: "",
            LeaveTypeId: "",
            StartDate: "",
            EndDate: "",
            Reason: "",
          }}
          validationSchema={leaveValidation}
          onSubmit={handleSubmit}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-8 pe-3 mt-5 bg-light">
              <div className="mt-3">
                <p className="fs-4 text-dark text-center">Leave Request Form</p>
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
              <DropDown
                type="number"
                label="Leave Type"
                name="LeaveTypeId"
                options={LeaveTypeId}
                value={formikValues.values.LeaveTypeId}
                error={formikValues.errors.LeaveTypeId}
                onChange={(selectedOption) => {
                  const parsedValue = parseInt(selectedOption, 10);
                  formikValues.setFieldValue("LeaveTypeId", parsedValue);
                }}
              />
              <TextInput
                type="date"
                name="StartDate"
                label="Start Date"
                placeholder="enter leave start date"
                value={formikValues.values.StartDate}
                error={formikValues.errors.StartDate}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="date"
                name="EndDate"
                label="End Date"
                placeholder="enter leave end date"
                value={formikValues.values.EndDate}
                error={formikValues.errors.EndDate}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="text"
                name="Reason"
                label="Reason"
                placeholder="enter leave reason"
                value={formikValues.values.Reason}
                error={formikValues.errors.Reason}
                onChange={formikValues.handleChange}
              />
              {error && <p className="text-danger">{error}</p>}
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

export default LeaveRequest;
