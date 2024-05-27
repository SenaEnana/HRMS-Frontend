import { Formik, Form, Field } from "formik";
import { promotionValidation } from "./schema";
import DropDown from "../../../components/DropDown";
import { useState, useEffect } from "react";
import TextInput from "../../../components/textInput";
import { useNavigate } from "react-router";

function PromoteEmployee() {
  const [error, setError] = useState(null);
  const [NewGradeId, setNewGradeId] = useState([{ name: "", id: "" }]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:5100/Grade/GetGrades");
      const newData = await response.json();
      setNewGradeId(newData);
      setLoading(false);
    };
    fetchData();
  }, []);

  async function promoteEmployee(values) {
    try {
      const response = await fetch(
        "http://localhost:5100/Promotion/PromoteEmployee",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (response.ok) {
        alert("Promote employee successfully");
        navigate("/shortListed");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      setError("Error promoting employee");
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
            EmpId: "",
            NewGradeId: "",
            Reason: "",
            NewSalary: "",
          }}
          validationSchema={promotionValidation}
          onSubmit={(values) => {
            promoteEmployee(values);
          }}
        >
          {({ errors, touched, handleSubmit, handleChange }) => (
            <Form className="form-group rounded border col-7 ms-5 ms-4 bg-light mt-5">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">Promote Employee</p>
              </div>
              <TextInput
                type="text"
                name="EmpId"
                label="Employee Id"
                placeholder="Enter employee id"
                onChange={handleChange}
                error={touched.EmpId && errors.EmpId}
              />
              <DropDown
                type="number"
                label="New Grade"
                name="NewGradeId"
                options={NewGradeId}
                onChange={(selectedOption) => {
                  const parsedValue = parseInt(selectedOption, 10);
                  handleChange({
                    target: { name: "NewGradeId", value: parsedValue },
                  });
                }}
                error={touched.NewGradeId && errors.NewGradeId}
              />
              <p className="text-dark fs-5 m-0">Reason</p>
              <div className="form-control text-dark float-start col-12 row p-1 m-1">
                <Field
                  component="textarea"
                  name="Reason"
                  placeholder="Enter reason"
                  className="form-control text-dark"
                />
              </div>
              {touched.Reason && errors.Reason && (
                  <p className="text-danger">{errors.Reason}</p>
                )}
              <TextInput
                type="number"
                name="NewSalary"
                label="New Salary"
                placeholder="Enter new salary for employee"
                onChange={handleChange}
                error={touched.NewSalary && errors.NewSalary}
              />
              {error && <p className="text-danger">{error}</p>}
              <div className="m-3">
                <input
                  className="btn btn-success col-10 m-2"
                  type="button"
                  value="Submit"
                  onClick={handleSubmit}
                />
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default PromoteEmployee;
