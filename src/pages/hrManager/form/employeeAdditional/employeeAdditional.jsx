import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import { useState } from "react";
import TextInput from "../../../../components/textInput";
import DropDown from "../../../../components/DropDown";
import { useNavigate } from "react-router-dom";
import { employeeAddValidation } from "./schema";

function EmployeeAdditional() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const [grade, setGrade] = useState([
    { values: "1", label: "First Grade" },
    { values: "2", label: "Second Grade" },
  ]);
  const [branch, setBranch] = useState([
    { values: "chacha", label: "Chacha Branch" },
    { values: "tebase", label: "Tebase Branch" },
  ]);
  const [department, setDepartment] = useState([
    { values: "accounting", label: "Accountant" },
    { values: "finance", label: "Finance" },
  ]);
  const [position, setPosition] = useState([
    { values: "manager", label: "Manager" },
    { values: "employee", label: "Employee" },
  ]);
  const [degree, setDegree] = useState([
    { values: "bsc", label: "Bsc" },
    { values: "msc", label: "Msc" },
  ]);

  function handleForm() {
    navigate("/contactPerson");
  }
  return (
    <div className="row justify-content-center">
      <Box m="20px">
        <Formik
          initialValues={{
            hireDate: "",
            grade: "",
            position: "",
            department: "",
            salary: "",
            branch: "",
            degree: "",
            childName: "",
          }}
          onSubmit={() => {
            console.log("successful");
            handleForm();
          }}
          // validationSchema={employeeAddValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">
                  Employee Additional Information
                </p>
              </div>
              <Box
                display="grid"
                gap="30px"
                gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextInput
                  type="date"
                  name="hireDate"
                  label="Hire Date"
                  placeholder="enter hire date"
                  value={formikValues.values.hireDate}
                  error={formikValues.errors.hireDate}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="number"
                  name="salary"
                  label="Salary"
                  placeholder="enter salary"
                  value={formikValues.values.salary}
                  error={formikValues.errors.salary}
                  onChange={formikValues.handleChange}
                />
                <DropDown
                  label="position"
                  name="position"
                  options={position}
                  value={formikValues.values.position}
                  error={formikValues.errors.position}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("position", selectedOption);
                  }}
                />
                <DropDown
                  label="Branch"
                  name="branch"
                  options={branch}
                  value={formikValues.values.branch}
                  error={formikValues.errors.branch}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("branch", selectedOption);
                  }}
                />
                <DropDown
                  label="Department"
                  name="department"
                  options={department}
                  value={formikValues.values.department}
                  error={formikValues.errors.department}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("department", selectedOption);
                  }}
                />
                <DropDown
                  label="Degree"
                  name="degree"
                  options={degree}
                  value={formikValues.values.degree}
                  error={formikValues.errors.degree}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("degree", selectedOption);
                  }}
                />
                <DropDown
                  label="Grade"
                  name="grade"
                  options={grade}
                  value={formikValues.values.grade}
                  error={formikValues.errors.grade}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("grade", selectedOption);
                  }}
                />
                <TextInput
                  type="text"
                  name="childName"
                  label="Child Name"
                  placeholder="enter child name"
                  value={formikValues.values.childName}
                  error={formikValues.errors.childName}
                  onChange={formikValues.handleChange}
                />
                <div className="m-3 float-end">
                  <input
                    className="btn btn-info col-10 float-end"
                    type="button"
                    value="next"
                    onClick={formikValues.handleSubmit}
                  />
                </div>
              </Box>
              <button
                className="btn btn-outline-success float-end m-3"
                onClick={() => navigate("/childInformation")}
              >
                add child
              </button>
              <p
                className="text-info fs-5 float-end m-3"
                onClick={() => navigate("/employeeBasic")}
              >
                {" "}
                Back
              </p>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
}

export default EmployeeAdditional;
