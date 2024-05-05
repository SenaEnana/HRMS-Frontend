import { useNavigate } from "react-router";
import { Formik } from "formik";
import TextInput from "../../../../components/textInput";
import { leaveValidation } from "./schema";

function LeaveRequest() {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/employeeDashboard");
  }
  return (
    <>
      <div className="row justify-content-center">
        <Formik
          initialValues={{
            Emp_Id: "",
            LeaveTypeId: "",
            StartDate: "",
            EndDate: "",
            Reason: "",
          }}
          onSubmit={() => {
            console.log("successful");
            handleSubmit();
          }}
          validationSchema={leaveValidation}
        >
          {(formikValues) => (
            <form className="form-group rounded border col-5 pe-3 mt-5 bg-light">
              <div className="mt-3">
                <p className="fs-4 text-dark text-center">Leave Request Form</p>
              </div>
              <TextInput
                type="text"
                name="Emp_Id"
                label="Emp_Id"
                placeholder="enter Emp_Id"
                value={formikValues.values.Emp_Id}
                error={formikValues.errors.Emp_Id}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="date"
                name="StartDate"
                label="Start Date"
                placeholder="enter employee start date"
                value={formikValues.values.StartDate}
                error={formikValues.errors.StartDate}
                onChange={formikValues.handleChange}
              />
                            <TextInput
                type="date"
                name="EndDate"
                label="End Date"
                placeholder="enter employee end date"
                value={formikValues.values.EndDate}
                error={formikValues.errors.EndDate}
                onChange={formikValues.handleChange}
              />
              <TextInput
                type="text"
                name="Reason"
                label="Reason"
                placeholder="enter leave reason"
                value={formikValues.values.Reason}
                error={formikValues.errors.Reason}
                onChange={formikValues.handleChange}
              />

              <div className="m-3">
                <input
                  className="btn btn-info col-12"
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

export default LeaveRequest;

//

// const validationSchema = Yup.object().shape({
//   username: Yup.string().required(),
// });

// const initialValues = {
//   username: '',
// };

// class MyForm extends Component {
//   render() {
//     return (
//       <Formik
//         initialValues={initialValues}
//         validationSchema={validationSchema}
//         onSubmit={this.props.onSubmit}
//       >
//         {({ isValid }) => (
//           <Form autoComplete="off">
// <FormikTextField
//   name="username"
//   label="Username"
//   margin="normal"
//   fullWidth
// />
//           </Form>
//         )}
//       </Formik>
//     );
//   }
// }
