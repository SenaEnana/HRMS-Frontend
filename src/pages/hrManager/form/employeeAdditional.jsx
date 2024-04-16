import TextInput from "../../../components/textInput";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import DropDown from "../../../components/DropDown";
import { useNavigate } from "react-router-dom";
import { employeeValidation } from "./schema";
import useState from "react";

function EmployeeAdditional() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();

  const [grade, setGrade] = useState([{ values: "1", label: "First Grade" }]);
  const [branch, setBranch] = useState([
    { values: "chacha", label: "Chacha Branch" },
  ]);
  const [department, setDepartment] = useState([{ values: "", label: "" }]);
  const [position, setPosition] = useState([{ values: "", label: "" }]);
  const [degree, setDegree] = useState([{ values: "", label: "" }]);

  function handleForm() {
    navigate("/hrDashboard");
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
            experience: "",
            education: "",
            contactPerson: "",
            degree: "",
            childName: "",
          }}
          onSubmit={() => {
            console.log("successful");
            handleForm();
          }}
          validationSchema={employeeValidation}
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
                <TextInput
                  type="text"
                  name="experience"
                  label="Experience"
                  placeholder="enter experience"
                  value={formikValues.values.experience}
                  error={formikValues.errors.experience}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="education"
                  label="Education"
                  placeholder="enter education"
                  value={formikValues.values.education}
                  error={formikValues.errors.education}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="contactPerson"
                  label="Contact Person"
                  placeholder="enter contact person"
                  value={formikValues.values.contactPerson}
                  error={formikValues.errors.contactPerson}
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
                    className="btn btn-info col-10"
                    type="button"
                    value="submit"
                    onClick={formikValues.handleSubmit}
                  />
                </div>
              </Box>
              <button
                className="btn btn-outline-success"
                onClick={() => navigate("/childInformation")}
              >
                add child
              </button>
              {/* <button
                className="btn btn-outline-success"
                onClick={navigate("/basicInformation")}
              >
                back
              </button> */}
              <p
                className="text-info"
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
