import { Formik } from "formik";
import { useMediaQuery } from "@mui/material";
import { promotionValidation } from "./schema";
import TextInput from "../../../components/textInput";

function PromoteEmployee() {
  const isNonMobile = useMediaQuery("(min-width:600px)");
  async function promoteEmployee(values) {
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
        alert("promote employee successfully");
      } else {
        console.log("failed");
      }
    } catch (error) {
      console.error("Error promoting employee:", error.message);
    }
  }
  return (
    <>
      <div className="row justify-content-center">
        <Formik
          initialValues={{
            Emp_Id: "",
            NewGradeId: "",
            Reason: "",
            NewSalary: "",
          }}
          onSubmit={(values) => {
            promoteEmployee(values);
            console.log(values);
          }}
          validationSchema={promotionValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
              <div className="ms-3">
                <p className="fs-4 text-dark text-center">Promote Employee</p>
              </div>
              <TextInput
                type="text"
                name="Emp_Id"
                label="Employee Id"
                placeholder="enter employee id"
                value={formikValues.values.Emp_Id}
                error={formikValues.errors.Emp_Id}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="number"
                name="NewGradeId"
                label="New Grade Id"
                placeholder="enter new grade id"
                value={formikValues.values.NewGradeId}
                error={formikValues.errors.NewGradeId}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="text"
                name="Reason"
                label="Reason"
                placeholder="enter promotion reason"
                value={formikValues.values.Reason}
                error={formikValues.errors.Reason}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="number"
                name="NewSalary"
                label="New Salary"
                placeholder="enter new salary for employee"
                value={formikValues.values.NewSalary}
                error={formikValues.errors.NewSalary}
                onChange={formikValues.handleChange}
              />
              <div className="m-3">
                <input
                  className="btn btn-info col-10 m-2"
                  type="button"
                  value="submit"
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
