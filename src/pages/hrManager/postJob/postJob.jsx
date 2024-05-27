import { Formik } from "formik";
import { useMediaQuery } from "@mui/material";
import { postJobValidation, promotionValidation } from "./schema";
import TextInput from "../../../components/textInput";
import DropDown from "../../../components/DropDown";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { FormikTextField } from "formik-material-fields";

function PromoteEmployee() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const navigate = useNavigate();
  const [PositionId, setPositionId] = useState([{ name: "", id: "" }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7100/Position");
      const newData = await response.json();
      setPositionId(newData);
      setLoading(false);
    };
    fetchData();
  }, []);

  async function postJob(values) {
    try {
      const response = await fetch("https://localhost:7100/Promotion/PostJob", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        alert("job posted successfully");
        navigate("/postedJob");
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      setError("Error posting job");
    }
  }
  if (loading) {
    return <div>Loading...</div>;
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
          validationSchema={postJobValidation}
          onSubmit={(values) => {
            postJob(values);
          }}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-6 mt-5 ms-4 bg-light">
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
              <FormikTextField
                name="Description"
                label="Description"
                margin="normal"
                value={formikValues.values.Description}
                error={formikValues.errors.Description}
                onChange={formikValues.handleChange}
                fullWidth
              />
              <FormikTextField
                name="Requirements"
                label="Requirements"
                margin="normal"
                value={formikValues.values.Requirements}
                error={formikValues.errors.Requirements}
                onChange={formikValues.handleChange}
                fullWidth
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
