import TextInput from "../../../components/textInput";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import { useState } from "react";
import DropDown from "../../../components/DropDown";
import { employeeValidation } from "./schema";
import { useNavigate } from "react-router-dom";

function ChildInformation() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [gender, setGender] = useState([
    { values: "female", label: "Female" },
    { values: "male", label: "Male" },
  ]);

  function handleSave() {
    navigate("/employeeAdditional");
  }
  return (
    <div className="row justify-content-center">
      <Box m="20px">
        <Formik
          initialValues={{
            childName: "",
            childGender: "",
            childBirthDate: "",
          }}
          onSubmit={() => {
            console.log("successful");
            handleSave();
          }}
          validationSchema={employeeValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">
                  Employee Child Information
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
                  type="text"
                  name="childName"
                  label="Child Name"
                  placeholder="enter child name"
                  value={formikValues.values.childName}
                  error={formikValues.errors.childName}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="date"
                  name="childBirthDate"
                  label="Child Birth Date"
                  placeholder="enter child birth date"
                  value={formikValues.values.childBirthDate}
                  error={formikValues.errors.childBirthDate}
                  onChange={formikValues.handleChange}
                />
                <DropDown
                  label="Gender"
                  name="gender"
                  options={gender}
                  value={formikValues.values.gender}
                  error={formikValues.errors.gender}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("gender", selectedOption);
                  }}
                />
                <div className="m-3 float-end">
                  <input
                    className="btn btn-info col-10"
                    type="button"
                    value="save"
                    onClick={formikValues.handleSubmit}
                  />
                </div>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
}

export default ChildInformation;
