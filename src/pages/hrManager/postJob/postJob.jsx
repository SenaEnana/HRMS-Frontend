import { Formik } from "formik";
import { useMediaQuery } from "@mui/material";
import { postJobValidation, promotionValidation } from "./schema";
import TextInput from "../../../components/textInput";
import DropDown from "../../../components/DropDown";
import { useState, useEffect } from "react";

function PromoteEmployee() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [PositionId, setPositionId] = useState([{ name: "", id: "" }]);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7140/Position");
      const newData = await response.json();
      setPositionId(newData);
    };
    fetchData();
  }, []);
  //the following are the code for the api not correct link
  async function postJob(values) {
    try {
      const response = await fetch("https://localhost:7140/Promotion/PostJob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        alert("job posted successfully");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      setError("Error posting job");
    }
  }
  return (
    <>
      <div className="row justify-content-center">
        <Formik
          initialValues={{
            JobTitle: "",
            PositionId: "",
            Description: "",
            Requirements: "",
          }}
          onSubmit={(values) => {
            postJob(values);
            console.log(values);
          }}
          validationSchema={postJobValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">Post Job</p>
              </div>
              <TextInput
                type="text"
                name="JobTitle"
                label="Job Title"
                placeholder="enter job title"
                value={formikValues.values.JobTitle}
                error={formikValues.errors.JobTitle}
                onChange={formikValues.handleChange}
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
              <TextInput
                type="text"
                name="Description"
                label="Description"
                placeholder="enter post description"
                value={formikValues.values.Description}
                error={formikValues.errors.Description}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="text"
                name="Requirements"
                label="Requirement"
                placeholder="enter job requirement"
                value={formikValues.values.Requirements}
                error={formikValues.errors.Requirements}
                onChange={formikValues.handleChange}
              />
              {error && <p className="text-danger">{error}</p>}
              <div className="m-3">
                <input
                  className="btn btn-success col-10 m-2"
                  type="button"
                  value="post"
                  onClick={formikValues.handleSubmit}
                />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default PromoteEmployee;
