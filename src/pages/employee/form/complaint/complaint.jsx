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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5100/Position");
      const newData = await response.json();
      setPositionId(newData);
      setLoading(false);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5100/Branch/GetBranches");
      const newData = await response.json();
      setBranchId(newData);
      setLoading(false);
    };
    fetchData();
  }, []);

  async function handleSubmit(values) {
    try {
      const response = await fetch(
        "http://localhost:5100/api/Complaint/SubmitCompliant",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );

      if (response.ok) {
        alert("Complaint submitted successfully");
        navigate("/");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      setError("Error submitting leave request");
    }
  }
  if (loading) {
    return <div>Loading...</div>;
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
          onSubmit={(values, formikBag) => handleSubmit(values, formikBag)}
          validationSchema={complaintValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-8 pe-3 mt-5 bg-light">
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
                label="BranchId"
                name="BranchId"
                options={BranchId}
                value={formikValues.values.BranchId}
                error={formikValues.errors.BranchId}
                onChange={(selectedOption) => {
                  const parsedValue = parseInt(selectedOption, 10);
                  formikValues.setFieldValue("BranchId", parsedValue);
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

export default Complaint;
