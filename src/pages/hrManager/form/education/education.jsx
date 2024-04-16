import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import TextInput from "../../../../components/textInput";
import DropDown from "../../../../components/DropDown";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { educationValidation } from "./schema";

function Education() {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [degree, setDegree] = useState([
    { values: "bsc", label: "Bsc" },
    { values: "msc", label: "Msc" },
  ]);

  function handleNext() {
    navigate("/experience");
  }
  return (
    <div className="row justify-content-center">
      <Box m="20px">
        <Formik
          initialValues={{
            institution: "",
            degree: "",
          }}
          onSubmit={() => {
            console.log("successful");
            handleNext();
          }}
          validationSchema={educationValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">
                  Employee Education Information
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
                  name="institution"
                  label="Institution"
                  placeholder="enter the institution"
                  value={formikValues.values.institution}
                  error={formikValues.errors.institution}
                  onChange={formikValues.handleChange}
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
                <div className="m-3">
                  <input
                    className="btn btn-info col-10 float-end"
                    type="button"
                    value="next"
                    onClick={formikValues.handleSubmit}
                  />
                </div>
                <p
                  className="text-info fs-5 float-end m-3"
                  onClick={() => navigate("/contactPerson")}
                >
                  {" "}
                  Back
                </p>
              </Box>
            </form>
          )}
        </Formik>
      </Box>
    </div>
  );
}

export default Education;
