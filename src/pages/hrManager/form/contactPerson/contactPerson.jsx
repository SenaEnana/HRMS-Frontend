import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import TextInput from "../../../../components/textInput";
import { useNavigate } from "react-router-dom";
import { contactPersonValidation } from "./schema";

function ContactPerson() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  function handleNext() {
    navigate("/education");
  }

  return (
    <div className="row justify-content-center">
      <Box m="20px">
        <Formik
          initialValues={{
            name: "",
            relationship: "",
            region: "",
            kebele: "",
            wereda: "",
            phoneNumber: "",
            houseNumber: "",
          }}
          onSubmit={() => {
            console.log("successful");
            handleNext();
          }}
          validationSchema={contactPersonValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">
                  Contact Person Information
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
                  name="name"
                  label="Contact Person Name"
                  placeholder="enter contact person name"
                  value={formikValues.values.name}
                  error={formikValues.errors.name}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="relationship"
                  label="Relationship"
                  placeholder="enter relationship"
                  value={formikValues.values.relationship}
                  error={formikValues.errors.relationship}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="region"
                  label="Region"
                  placeholder="enter region"
                  value={formikValues.values.region}
                  error={formikValues.errors.region}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="wereda"
                  label="Wereda"
                  placeholder="enter wereda"
                  value={formikValues.values.wereda}
                  error={formikValues.errors.wereda}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="text"
                  name="kebele"
                  label="Kebele"
                  placeholder="enter kebele"
                  value={formikValues.values.kebele}
                  error={formikValues.errors.kebele}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="number"
                  name="houseNumber"
                  label="House Number"
                  placeholder="enter house Number"
                  value={formikValues.values.houseNumber}
                  error={formikValues.errors.houseNumber}
                  onChange={formikValues.handleChange}
                />
                <TextInput
                  type="number"
                  name="phoneNumber"
                  label="Phone Number"
                  placeholder="enter phone number"
                  value={formikValues.values.phoneNumber}
                  error={formikValues.errors.phoneNumber}
                  onChange={formikValues.handleChange}
                />
                <div className="m-3">
                  <input
                    className="btn btn-info col-10 float-end"
                    type="button"
                    value="next"
                    onClick={formikValues.handleSubmit}
                  />
                </div>
              </Box>
              <p
                className="text-info fs-5 float-end m-3"
                onClick={() => navigate("/employeeAdditional")}
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

export default ContactPerson;
