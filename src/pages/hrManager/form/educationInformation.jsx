import TextInput from "../../../components/textInput";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

function EducationInformation({ onNext, formikValues, onPrev }) {
  const [MaritalStatus, setMaritalStatus] = useState("single");
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [inputFields, setInputFields] = useState([{ value: "" }]);
  const maritalStatusOptions = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
    { value: "divorced", label: "Divorced" },
    { value: "widowed", label: "Widowed" },
  ];

  function handleSubmit() {
    navigate("/contactInformation");
  }
  const handleAddField = () => {
    setInputFields([...inputFields, { value: "" }]);
  };
  return (
    <div className="row justify-content-center">
      <Box className="m-2">
        <Formik
          initialValues={{
            Educations: [{ Degree: "", Institute: "" }],
            Experiences: [
              {
                CompanyName: "",
                ExperiencePosition: "",
                ExperienceStartDate: "",
                ExperienceEndDate: "",
              },
            ],
          }}
          onSubmit={(values) => {
            values.Educations = values.Educations.filter(
                (education) =>
                  education.Degree !== "" || education.Institute !== ""
              );
              values.Experiences = values.Experiences.filter(
                (experience) =>
                  experience.CompanyName !== "" ||
                  experience.ExperiencePosition !== "" ||
                  experience.ExperienceStartDate !== "" ||
                  experience.ExperienceEndDate !== ""
              );
            console.log(values);
            handleSubmit();
          }}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">Education Related Information</p>
              </div>
              {formikValues.values.Educations.map((education, index) => (
                <div key={index}>
                  {/* Child TextInput Fields */}
                  <TextInput
                    type="text"
                    name={`Educations[${index}].Degree`}
                    label="Degree"
                    placeholder="Enter degree"
                    value={
                      formikValues.values.Educations[index].Degree
                    }
                    error={
                      formikValues.errors.Educations?.[index]?.Degree
                    }
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="date"
                    name={`Educations[${index}].Institute`}
                    label="Institute"
                    placeholder="Enter education Institute"
                    value={
                      formikValues.values.Educations[index].Institute
                    }
                    error={
                      formikValues.errors.Educations?.[index]
                        ?.Institute
                    }
                    onChange={formikValues.handleChange}
                  />
                  {/* Delete Button for Child */}
                </div>
              ))}
              {/* Add Education Button */}
              <button
                onClick={handleAddField}
                className="btn btn-outline-info btn-small m-1 float-end p-1"
              >
                Add education
              </button>
              <p className="fs-4 text-dark text-center">
                Employee Experience Information
              </p>
              {formikValues.values.Experiences.map((experience, index) => (
                <div key={index}>
                  {/* Experience TextInput Fields */}
                  <TextInput
                    type="text"
                    name={`Experiences[${index}].CompanyName`}
                    label="Company Name"
                    placeholder="Enter company name"
                    value={formikValues.values.Experiences[index].CompanyName}
                    error={
                      formikValues.errors.Experiences?.[index]?.CompanyName
                    }
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name={`Experiences[${index}].ExperiencePosition`}
                    label="Position"
                    placeholder="Enter position"
                    value={
                      formikValues.values.Experiences[index].ExperiencePosition
                    }
                    error={
                      formikValues.errors.Experiences?.[index]
                        ?.ExperiencePosition
                    }
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="date"
                    name={`Experiences[${index}].ExperienceStartDate`}
                    label="Start Date"
                    placeholder="Enter start date"
                    value={
                      formikValues.values.Experiences[index].ExperienceStartDate
                    }
                    error={
                      formikValues.errors.Experiences?.[index]
                        ?.ExperienceStartDate
                    }
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="date"
                    name={`Experiences[${index}].ExperienceEndDate`}
                    label="End Date"
                    placeholder="Enter end date"
                    value={
                      formikValues.values.Experiences[index].ExperienceEndDate
                    }
                    error={
                      formikValues.errors.Experiences?.[index]
                        ?.ExperienceEndDate
                    }
                    onChange={formikValues.handleChange}
                  />
                  {/* Delete Button for Experience */}
                </div>
              ))}
              {/* Add Experience Button */}
              <button
                onClick={handleAddField}
                className="btn btn-outline-info btn-small m-1 float-end p-1"
              >
                Add experience
              </button>
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

export default EducationInformation;
