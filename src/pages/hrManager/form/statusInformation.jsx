import TextInput from "../../../components/textInput";
import RadioButton from "../../../components/radioButton";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

function StatusInformation({ onNext, formikValues, onPrev }) {
  const [MaritalStatus, setMaritalStatus] = useState("single");
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [inputFields, setInputFields] = useState([{ value: "" }]);

  const handleAddField = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  const maritalStatusOptions = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
    { value: "divorced", label: "Divorced" },
    { value: "widowed", label: "Widowed" },
  ];

  function handleSubmit() {
    navigate("/contactInformation");
  }
  return (
    <div className="row justify-content-center">
      <Box className="m-2">
        <Formik
          initialValues={{
            MaritalStatus: "",
            ChildInformations: [{ ChildName: "", DateOfBirth: "" }],
          }}
          onSubmit={(values) => {
            values.ChildInformations = values.ChildInformations.filter(
              (child) => child.ChildName !== "" || child.DateOfBirth !== ""
            );
            console.log(values);
            handleSubmit();
          }}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">Status Information</p>
              </div>
              <div>
                <RadioButton
                  title="Marital Status"
                  options={maritalStatusOptions}
                  value={formikValues.values.MaritalStatus}
                  onChange={(value) =>
                    formikValues.setFieldValue("MaritalStatus", value)
                  }
                />
                {/* <p>
                      Selected Marital Status: {formikValues.values.MaritalStatus}
                    </p> */}
              </div>
              <div>
                {formikValues.values.ChildInformations.map((child, index) => (
                  <div key={index}>
                    {/* Child TextInput Fields */}
                    <TextInput
                      type="text"
                      name={`ChildInformations[${index}].ChildName`}
                      label="Child Name"
                      placeholder="Enter child name"
                      value={
                        formikValues.values.ChildInformations[index].ChildName
                      }
                      error={
                        formikValues.errors.ChildInformations?.[index]
                          ?.ChildName
                      }
                      onChange={formikValues.handleChange}
                    />
                    <TextInput
                      type="date"
                      name={`ChildInformations[${index}].DateOfBirth`}
                      label="Child Birth Date"
                      placeholder="Enter child birth date"
                      value={
                        formikValues.values.ChildInformations[index].DateOfBirth
                      }
                      error={
                        formikValues.errors.ChildInformations?.[index]
                          ?.DateOfBirth
                      }
                      onChange={formikValues.handleChange}
                    />
                    {/* Delete Button for Child */}
                  </div>
                ))}
                {/* Add Child Button */}
                <button
                  onClick={handleAddField}
                  className="btn btn-outline-info btn-small m-1 float-end p-1"
                >
                  Add child
                </button>
              </div>
              <p className=" pr-64 mb-3 font-bold text-xl -mt-2 fs-4 text-dark text-center">
                {" "}
                Children information:{" "}
              </p>
              {formikValues.values.ChildInformations.map((child, index) => (
                <div key={index}>
                  {/* Child TextInput Fields */}
                  <TextInput
                    type="text"
                    name={`ChildInformations[${index}].ChildName`}
                    label="Child Name"
                    placeholder="Enter child name"
                    value={
                      formikValues.values.ChildInformations[index].ChildName
                    }
                    error={
                      formikValues.errors.ChildInformations?.[index]?.ChildName
                    }
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="date"
                    name={`ChildInformations[${index}].DateOfBirth`}
                    label="Child Birth Date"
                    placeholder="Enter child birth date"
                    value={
                      formikValues.values.ChildInformations[index].DateOfBirth
                    }
                    error={
                      formikValues.errors.ChildInformations?.[index]
                        ?.DateOfBirth
                    }
                    onChange={formikValues.handleChange}
                  />
                  {/* Delete Button for Child */}
                </div>
              ))}
              <div className="m-3">
                <input
                  className="btn btn-info col-10 float-end m-2"
                  type="button"
                  value="next"
                  onClick={onNext}
                />
                <input
                  className="btn btn-success col-10 float-end m-2"
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

export default StatusInformation;
