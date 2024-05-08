import TextInput from "../../../components/textInput";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import DropDown from "../../../components/DropDown";

function AdditionalInformation({ onNext, formikValues, onPrev }) {
  const [MaritalStatus, setMaritalStatus] = useState("single");
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [inputFields, setInputFields] = useState([{ value: "" }]);
  const [PositionId, setPositionId] = useState([{ name: "", id: "" }]);
  const [BranchId, setBranchId] = useState([{ name: "", id: "" }]);
  const [DepartmentId, setDepartmentId] = useState([{ name: "", id: "" }]);
  const [DegreeId, setDegreeId] = useState([{ name: "", id: "" }]);
  const [GradeId, setGradeId] = useState([{ name: "", id: "" }]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7140/Branch/GetBranches");
      const newData = await response.json();
      setBranchId(newData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7140/api/Degree");
      const newData = await response.json();
      setDegreeId(newData);
    };
    fetchData();
  }, []);

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

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7140/Grade/GetGrades");
      const newData = await response.json();
      setGradeId(newData);
    };
    fetchData();
  }, []);

  async function userRegistration(values) {
    try {
      const response = await fetch(
        "https://localhost:7140/Employee/CorrectRegisterEmployee",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      console.log(response);
      if (response.ok) {
        console.log("successful");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.error("Error registering employee:", error.message);
    }
  }

  function handleSubmit() {
    navigate("/educationformation");
  }
  return (
    <div className="row justify-content-center">
      <Box className="m-2">
        <Formik
          initialValues={{
            HireDate: "",
            GradeId: "",
            PositionId: "",
            DepartmentId: "",
            Salary: "",
            BranchId: "",
            DegreeId: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            handleSubmit();
          }}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">Additional Information</p>
              </div>
              <Box
                display="grid"
                gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                sx={{
                  "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                }}
              >
                <TextInput
                  type="date"
                  name="HireDate"
                  label="Hire Date"
                  placeholder="enter hire date"
                  value={formikValues.values.HireDate}
                  error={formikValues.errors.HireDate}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="number"
                  name="Salary"
                  label="Salary"
                  placeholder="enter Salary"
                  value={formikValues.values.Salary}
                  error={formikValues.errors.Salary}
                  onChange={formikValues.handleChange}
                />
                
                  <DropDown
                    type="number"
                    label="Grade"
                    name="GradeId"
                    options={GradeId}
                    error={formikValues.errors.GradeId}
                    onChange={(selectedOption) => {
                      const parsedValue = parseInt(selectedOption, 10);
                      formikValues.setFieldValue("GradeId", parsedValue);
                    }}
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
                
                
                  <DropDown
                    type="number"
                    label="DegreeId"
                    name="DegreeId"
                    options={DegreeId}
                    value={formikValues.values.DegreeId}
                    error={formikValues.errors.DegreeId}
                    onChange={(selectedOption) => {
                      const parsedValue = parseInt(selectedOption, 10);
                      formikValues.setFieldValue("DegreeId", parsedValue);
                    }}
                  />
                
                <DropDown
                  label="Grade"
                  name="GradeId"
                  options={GradeId}
                  error={formikValues.errors.GradeId}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("GradeId", selectedOption);
                  }}
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
                <DropDown
                  label="Department"
                  name="DepartmentId"
                  options={DepartmentId}
                  value={formikValues.values.DepartmentId}
                  error={formikValues.errors.DepartmentId}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("DepartmentId", selectedOption);
                  }}
                />
                <DropDown
                  label="Degree"
                  name="DegreeId"
                  options={DegreeId}
                  value={formikValues.values.DegreeId}
                  error={formikValues.errors.DegreeId}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("DegreeId", selectedOption);
                  }}
                />
              </Box>
              <div className="m-3">
                <input
                  className="btn btn-info col-10 float-end m-2"
                  type="button"
                  value="next"
                  onClick={onNext}
                />
                                <input
                  className="btn btn-info col-10 float-end m-2"
                  type="button"
                  value="previous"
                  onClick={onPrev}
                />
              </div>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
}

export default AdditionalInformation;
