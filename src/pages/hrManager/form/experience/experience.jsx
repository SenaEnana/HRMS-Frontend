import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import TextInput from "../../../../components/textInput";
import DropDown from "../../../../components/DropDown";
import { useNavigate } from "react-router-dom";
import { experienceValidation } from "./schema";
import { useState } from "react";

function Experience() {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [position, setPosition] = useState([
    { values: "manager", label: "Manager" },
    { values: "employee", label: "Employee" },
  ]);

  function handleSave() {
    navigate("/hrDashboard");
  }

  return (
    <div className="row justify-content-center">
      <Box m="20px">
        <Formik
          initialValues={{
            position: "",
            companyName: "",
            startDate: "",
            endDate: "",
          }}
          onSubmit={() => {
            console.log("successful");
            handleSave();
          }}
          validationSchema={experienceValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">
                  Employee Experience Information
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
                  name="companyName"
                  label="Company Name"
                  placeholder="enter the name of the company"
                  value={formikValues.values.companyName}
                  error={formikValues.errors.companyName}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="date"
                  name="startDate"
                  label="Start Date"
                  placeholder="enter the start date in that company"
                  value={formikValues.values.startDate}
                  error={formikValues.errors.startDate}
                  onChange={formikValues.handleChange}
                />

                <TextInput
                  type="date"
                  name="endDate"
                  label="End Date"
                  placeholder="enter the end date in that company"
                  value={formikValues.values.endDate}
                  error={formikValues.errors.endDate}
                  onChange={formikValues.handleChange}
                />
                <DropDown
                  label="Position"
                  name="position"
                  options={position}
                  value={formikValues.values.position}
                  error={formikValues.errors.position}
                  onChange={(selectedOption) => {
                    formikValues.setFieldValue("position", selectedOption);
                  }}
                />
                <div className="m-3">
                  <input
                    className="btn btn-info col-10 float-end"
                    type="button"
                    value="submit"
                    onClick={formikValues.handleSubmit}
                  />
                </div>
              </Box>
              <p
                className="text-info fs-5 float-end m-3"
                onClick={() => navigate("/education")}
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

export default Experience;
