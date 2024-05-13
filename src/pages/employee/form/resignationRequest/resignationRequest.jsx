import { useNavigate } from "react-router";
import { Formik } from "formik";
import { useState, useEffect } from "react";
import { resignationValidation } from "./schema";
import { FormikTextField } from "formik-material-fields";
import TextInput from "../../../../components/textInput";
import DropDown from "../../../../components/DropDown";
import {Box, useTheme} from "@mui/material";
import { tokens } from "../../../../theme";

function ResignationRequest() {
  const navigate = useNavigate();
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [PositionId, setPositionId] = useState([{ name: "", id: "" }]);
  const [DepartmentId, setDepartmentId] = useState([{ name: "", id: "" }]);
  const [error, setError] = useState(null); 
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://localhost:7140/Department/GetDepartments"
      );
      const newData = await response.json();
      setDepartmentId(newData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7140/Position");
      const newData = await response.json();
      setPositionId(newData);
    };
    fetchData();
  }, []);
  const handleSubmit = async (values) => {
    try {
      const response = await fetch(
        "https://localhost:7140/Resignation/RequestResignation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (response.ok) {
        alert("Resignation request submitted successfully")
        navigate("/employeeDashboard");
      } else {
        const errorMessage = await response.text(); 
        setError(errorMessage); 
      }
    } catch (error) {
      setError("Error submitting resignation request");
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <Formik
          initialValues={{
            Emp_Id: "",
            FullName: "",
            DepartmentId: "",
            PositionId: "",
            EmployeeHireDate: "",
            SeparationDate: "",
            Reason: "",
            Satisfaction: "",
            EmployeeRelationship: "",
            Recommendation: "",
            Comment: "",
          }}
          onSubmit={handleSubmit} // Correct placement of onSubmit prop
          validationSchema={resignationValidation}
        >
          {(formikValues) => (

            <form className="form-group rounded border col-5 pe-3 mt-5">
              <div className="mt-3">
                <p className="fs-4 text-dark text-center">
                  Resignation Request Form
                </p>
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
              <TextInput
                type="text"
                name="FullName"
                label="Full Name"
                placeholder="enter full name"
                value={formikValues.values.FullName}
                error={formikValues.errors.FullName}
                onChange={formikValues.handleChange}
              />
              <DropDown
                    type="number"
                    label="PositionId"
                    name="PositionId"
                    options={PositionId}
                    value={formikValues.values.PositionId}
                    error={formikValues.errors.PositionId}
                    onChange={(selectedOption) => {
                      const parsedValue = parseInt(selectedOption, 10);
                      formikValues.setFieldValue("PositionId", parsedValue);
                    }}
                  />
                       <DropDown
                    type="number"
                    label="DepartmentId"
                    name="DepartmentId"
                    options={DepartmentId}
                    value={formikValues.values.DepartmentId}
                    error={formikValues.errors.DepartmentId}
                    onChange={(selectedOption) => {
                      const parsedValue = parseInt(selectedOption, 10);
                      formikValues.setFieldValue("DepartmentId", parsedValue);
                    }}
                  />
              <TextInput
                type="date"
                name="EmployeeHireDate"
                label="Employee Hire Date"
                placeholder="enter employee hire date"
                value={formikValues.values.EmployeeHireDate}
                error={formikValues.errors.EmployeeHireDate}
                onChange={formikValues.handleChange}
              />

              <TextInput
                type="date"
                name="SeparationDate"
                label="Separation Date"
                placeholder="enter employee separation date"
                value={formikValues.values.SeparationDate}
                error={formikValues.errors.SeparationDate}
                onChange={formikValues.handleChange}
              />
              <FormikTextField
                className="form-control text-dark float-start mt-1 p-1 fs-5"
                name="Reason"
                label="Reason"
                margin="normal"
                value={formikValues.values.Reason}
                error={formikValues.errors.Reason}
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
                name="Satisfaction"
                label="Satisfaction"
                placeholder="enter if you are satisfied or not"
                value={formikValues.values.Satisfaction}
                error={formikValues.errors.Satisfaction}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="text"
                name="EmployeeRelationship"
                label="Work Relationship"
                placeholder="enter work relationship"
                value={formikValues.values.EmployeeRelationship}
                error={formikValues.errors.EmployeeRelationship}
                onChange={formikValues.handleChange}
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
                name="Comment"
                label="Comment"
                margin="normal"
                value={formikValues.values.Comment}
                error={formikValues.errors.Comment}
                onChange={formikValues.handleChange}
                fullWidth
              />
                {error && <p className="text-danger">{error}</p>}

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
