import TextInput from "../../../components/textInput";
import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

function ContactInformation({ onNext, formikValues, onPrev }) {
  const navigate = useNavigate();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [inputFields, setInputFields] = useState([{ value: "" }]);
  
  const handleAddField = () => {
    setInputFields([...inputFields, { value: "" }]);
  };

  const handleInputChange = (id, event) => {
    const updatedFields = inputFields.map((field) => {
      if (field.id === id) {
        return { ...field, value: event.target.value };
      }
      return field;
    });
    setInputFields(updatedFields);
  };
  const handleDeleteField = (index) => {
    const updatedFields = [...inputFields];
    updatedFields.splice(index, 1);
    setInputFields(updatedFields);
  };

  const [choice, setChoice] = useState(null);

  const handleChoiceChange = (event) => {
    setChoice(event.target.value);
  };
  const [choiceMS, setChoiceMS] = useState(null);

  const handleChoiceChangeMS = (event) => {
    setChoiceMS(event.target.value);
  };

  function handleSubmit() {
    navigate("/educationInformation");
  }
  return (
    <div className="row justify-content-center">
      <Box className="m-2">
        <Formik
          initialValues={{
            ContactPersons: [
              {
                ContactPersonName: "",
                Relationship: "",
                ContactRegion: "",
                ContactKebele: "",
                ContactWoreda: "",
                ContactPhoneNo: "",
                ContactHouseNo: "",
              },
            ],
          }}
          onSubmit={(values) => {
            values.ContactPersons = values.ContactPersons.filter(
              (contact) =>
                contact.ContactPersonName !== "" ||
                contact.Relationship !== "" ||
                contact.ContactPhoneNo !== ""
            );
            console.log(values);
            handleSubmit();
          }}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">
                  Contact Person Information
                </p>
              </div>

              {formikValues.values.ContactPersons.map(
                (contactPerson, index) => (
                  <div key={index}>
                    <Box
                      display="grid"
                      gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                      sx={{
                        "& > div": {
                          gridColumn: isNonMobile ? undefined : "span 4",
                        },
                      }}
                    >
                      <TextInput
                        type="text"
                        name={`ContactPersons[${index}].ContactPersonName`}
                        label="Contact Person Name"
                        placeholder="Enter contact person name"
                        value={
                          formikValues.values.ContactPersons[index]
                            .ContactPersonName
                        }
                        error={
                          formikValues.errors.ContactPersons?.[index]
                            ?.ContactPersonName
                        }
                        onChange={formikValues.handleChange}
                      />
                      <TextInput
                        type="text"
                        name={`ContactPersons[${index}].Relationship`}
                        label="Relationship"
                        placeholder="Enter relationship"
                        value={
                          formikValues.values.ContactPersons[index].Relationship
                        }
                        error={
                          formikValues.errors.ContactPersons?.[index]
                            ?.Relationship
                        }
                        onChange={formikValues.handleChange}
                      />
                      <TextInput
                        type="text"
                        name={`ContactPersons[${index}].ContactRegion`}
                        label="Contact Person Region"
                        placeholder="Enter contact person region"
                        value={
                          formikValues.values.ContactPersons[index]
                            .ContactRegion
                        }
                        error={
                          formikValues.errors.ContactPersons?.[index]
                            ?.ContactRegion
                        }
                        onChange={formikValues.handleChange}
                      />
                      <TextInput
                        type="text"
                        name={`ContactPersons[${index}].ContactWoreda`}
                        label="Contact Person Woreda"
                        placeholder="Enter contact person wereda"
                        value={
                          formikValues.values.ContactPersons[index]
                            .ContactWoreda
                        }
                        error={
                          formikValues.errors.ContactPersons?.[index]
                            ?.ContactWoreda
                        }
                        onChange={formikValues.handleChange}
                      />
                      <TextInput
                        type="number"
                        name={`ContactPersons[${index}].ContactKebele`}
                        label="Contact Person Kebele"
                        placeholder="Enter contact person kebele"
                        value={
                          formikValues.values.ContactPersons[index]
                            .ContactKebele
                        }
                        error={
                          formikValues.errors.ContactPersons?.[index]
                            ?.ContactKebele
                        }
                        onChange={formikValues.handleChange}
                      />
                      <TextInput
                        type="text"
                        name={`ContactPersons[${index}].ContactHouseNo`}
                        label="Contact Person House Number"
                        placeholder="Enter contact person house number"
                        value={
                          formikValues.values.ContactPersons[index]
                            .ContactHouseNo
                        }
                        error={
                          formikValues.errors.ContactPersons?.[index]
                            ?.ContactHouseNo
                        }
                        onChange={formikValues.handleChange}
                      />
                      <TextInput
                        type="text"
                        name={`ContactPersons[${index}].ContactPhoneNo`}
                        label="Contact Person Phone Number"
                        placeholder="Enter contact person phone number"
                        value={
                          formikValues.values.ContactPersons[index]
                            .ContactPhoneNo
                        }
                        error={
                          formikValues.errors.ContactPersons?.[index]
                            ?.ContactPhoneNo
                        }
                        onChange={formikValues.handleChange}
                      />
                    </Box>
                    {/* Delete Button for Contact Person */}
                  </div>
                )
              )}
              {/* Add Contact Person Button */}
              <button
                onClick={handleAddField}
                className="btn btn-outline-info btn-small m-1 float-end p-1"
              >
                Add contact person
              </button>
              <div>
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

export default ContactInformation;
