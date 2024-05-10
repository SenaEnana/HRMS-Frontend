import { Formik } from "formik";
import { useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { applyForJobValidation } from "./schema";
import DropDown from "../../../../components/DropDown";

function ApplyForJob() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [JobId, setJobId] = useState([{ name: "", id: "" }]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://localhost:7140/Position");
      const newData = await response.json();
      setJobId(newData);
    };
    fetchData();
  }, []);
  //the following are the code for the api not correct link
  async function applyForJob(values) {
    try {
      const response = await fetch("https://localhost:7140/Branch/AddBranch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });
      if (response.ok) {
        console.log("successful");
        alert("job applied successfully");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.error("Error applying job:", error.message);
    }
  }
  return (
    <>
      <div className="row justify-content-center">
        <Formik
          initialValues={{
            JobId: "",
          }}
          onSubmit={(values) => {
            applyForJob(values);
            console.log(values);
          }}
          validationSchema={applyForJobValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">Apply For Job</p>
              </div>
              <DropDown
                label="Job"
                name="JobId"
                options={JobId}
                value={formikValues.values.JobId}
                error={formikValues.errors.JobId}
                onChange={(selectedOption) => {
                  formikValues.setFieldValue("JobId", selectedOption);
                }}
              />
              <div className="m-3">
                <input
                  className="btn btn-info col-10 m-2"
                  type="button"
                  value="apply"
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

export default ApplyForJob;
