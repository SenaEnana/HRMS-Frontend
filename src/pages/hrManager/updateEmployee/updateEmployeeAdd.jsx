import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import TextInput from "../../../components/textInput";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

function UpdateEmployeeAdd() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  //   async function updateTeacher(values) {
  //     setLoading(true);
  //     let result = await fetch("http://127.0.0.1:8000/api/updateTeacher/" + id, {
  //       method: "PUT",
  //       body: JSON.stringify(values),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     });
  //     result = await result.json();
  //     setLoading(false);
  //     alert("successfully updated");
  //   }

  //   useEffect(() => {
  //     const asyncFn = async () => {
  //       let result = await fetch("http://127.0.0.1:8000/api/getTeacher/" + id);
  //       result = await result.json();
  //       setData(result);
  //     };
  //     asyncFn();
  //   }, [id]);
  return (
    <div className="row justify-content-center ">
      <Box m="20px">
        <div>
          <NavLink
            to="/employeeList"
            className="float-end btn btn-outline-info btn-sm mt-3"
          >
            Back
          </NavLink>
        </div>
        {data.name && !loading && (
          <Formik
            initialValues={{
              hireDate: data.hireDate,
              grade: data.grade,
              position: data.position,
              department: data.department,
              salary: data.salary,
              branch: data.branch,
              degree: data.degree,
              childName: data.childName,
            }}
            onSubmit={(values) => {
              // updateTeacher(values);
              console.log("updated successfully");
            }}
          >
            {(formikValues) => (
              <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
                <div className="ms-3">
                  <p className="fs-4 text-dark text-center">
                    Update Additional Information
                  </p>
                </div>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextInput
                    type="date"
                    name="hireDate"
                    label="Hire Date"
                    value={formikValues.values.hireDate}
                    error={formikValues.errors.hireDate}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="number"
                    name="salary"
                    label="Salary"
                    value={formikValues.values.salary}
                    error={formikValues.errors.salary}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="branch"
                    label="Branch"
                    value={formikValues.values.branch}
                    error={formikValues.errors.branch}
                    onChange={formikValues.handleChange}
                  />

                  <TextInput
                    type="text"
                    name="position"
                    label="Position"
                    value={formikValues.values.position}
                    error={formikValues.errors.position}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="department"
                    label="Department"
                    value={formikValues.values.department}
                    error={formikValues.errors.department}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="degree"
                    label="Degree"
                    value={formikValues.values.degree}
                    error={formikValues.errors.degree}
                    onChange={formikValues.handleChange}
                  />

                  <TextInput
                    type="text"
                    name="grade"
                    label="Grade"
                    value={formikValues.values.grade}
                    error={formikValues.errors.grade}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="childName"
                    label="Child Name"
                    value={formikValues.values.childName}
                    error={formikValues.errors.childName}
                    onChange={formikValues.handleChange}
                  />
                  <div className="m-3 float-end">
                    <input
                      className="btn btn-info col-10 float-end"
                      type="button"
                      value="update"
                      onClick={formikValues.handleSubmit}
                    />
                  </div>
                </Box>
              </form>
            )}
          </Formik>
        )}
      </Box>
    </div>
  );
}

export default UpdateEmployeeAdd;
