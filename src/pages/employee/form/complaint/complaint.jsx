import { useNavigate } from "react-router";
import { Formik } from "formik";
import TextInput from "../../../../components/textInput";
import { complaintValidation } from "./schema";
import { useState, useEffect } from "react";
import { FormikTextField } from "formik-material-fields";
import DropDown from "../../../../components/DropDown";

function Complaint() {
  const navigate = useNavigate();
  const [PositionId, setPositionId] = useState([{ name: "", id: "" }]);
  const [BranchId, setBranchId] = useState([{ name: "", id: "" }]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7140/Position");
      const newData = await response.json();
      setPositionId(newData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7140/Branch/GetBranches");
      const newData = await response.json();
      setBranchId(newData);
    };
    fetchData();
  }, []);
  function handleSubmit() {
    navigate("/employeeDashboard");
  }

  return (
    <>
      <div className="row justify-content-center">
        <Formik
          initialValues={{
            Name: "",
            Emp_Id: "",
            PositionId: "",
            BranchId: "",
            DateOfEvent: "",
            Incident: "",
            Remedy: "",
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
                name="Name"
                label="Name"
                placeholder="enter Name"
                value={formikValues.values.Name}
                error={formikValues.errors.Name}
                onChange={formikValues.handleChange}
              />
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
                label="Position"
                name="PositionId"
                options={PositionId}
                value={formikValues.values.PositionId}
                error={formikValues.errors.PositionId}
                onChange={(selectedOption) => {
                  formikValues.setFieldValue("PositionId", selectedOption);
                }}
              />
              <DropDown
                label="Branch"
                name="BranchId"
                options={BranchId}
                value={formikValues.values.BranchId}
                error={formikValues.errors.BranchId}
                onChange={(selectedOption) => {
                  formikValues.setFieldValue("BranchId", selectedOption);
                }}
              />
              <TextInput
                type="date"
                name="DateOfEvent"
                label="Event Date"
                placeholder="enter event date"
                value={formikValues.values.DateOfEvent}
                error={formikValues.errors.DateOfEvent}
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
                name="Incident"
                label="Incident"
                margin="normal"
                value={formikValues.values.Incident}
                error={formikValues.errors.Incident}
                onChange={formikValues.handleChange}
                fullWidth
              />

              <FormikTextField
                className="form-control text-dark float-start mt-1 p-1 fs-5"
                name="Remedy"
                label="Complaint Remedy"
                margin="normal"
                value={formikValues.values.Remedy}
                error={formikValues.errors.Remedy}
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
