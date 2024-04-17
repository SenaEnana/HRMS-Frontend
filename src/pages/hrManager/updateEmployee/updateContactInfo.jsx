import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Formik } from "formik";
import TextInput from "../../../components/textInput";
import { Box } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useState } from "react";

function UpdateContactInfo() {
  let { id } = useParams();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const isNonMobile = useMediaQuery("(min-width:600px)");

  //   async function updateTeacher(values) {
  //     setLoading(true);
  //     let result = await fetch("http://127.0.0.1:8000/api/updateTeacher/" + id, {
  //       method: "PUT",
  //       body: JSON.stringify(values),
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json",
  //       },
  //     });
  //     result = await result.json();
  //     setLoading(false);
  //     alert("successfully updated");
  //   }

  //   useEffect(() => {
  //     const asyncFn = async () => {
  //       let result = await fetch("http://127.0.0.1:8000/api/getTeacher/" + id);
  //       result = await result.json();
  //       setData(result);
  //     };
  //     asyncFn();
  //   }, [id]);
  return (
    <div className="row justify-content-center ">
      <Box m="20px">
        <div>
          <NavLink
            to="/employeeList"
            className="float-end btn btn-outline-info btn-sm mt-3"
          >
            Back
          </NavLink>
        </div>
        {data.name && !loading && (
          <Formik
            initialValues={{
              name: data.name,
              region: data.region,
              kebele: data.kebele,
              wereda: data.wereda,
              phoneNumber: data.phoneNumber,
              relationship: data.relationship,
              houseNumber: data.houseNumber,
            }}
            onSubmit={(values) => {
              console.log("updated successfully");
            }}
          >
            {(formikValues) => (
              <form className="form-group rounded border col-10 ms-5 ms-4 bg-light">
                <div className="ms-3">
                  <p className="fs-4 text-dark text-center">
                    Update Contact Information
                  </p>
                </div>
                <Box
                  display="grid"
                  gap="30px"
                  gridTemplateColumns="repeat(2, minmax(0, 1fr))"
                  sx={{
                    "& > div": {
                      gridColumn: isNonMobile ? undefined : "span 4",
                    },
                  }}
                >
                  <TextInput
                    type="text"
                    name="name"
                    label="Contact Person Name"
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
                    value={formikValues.values.region}
                    error={formikValues.errors.region}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="wereda"
                    label="Wereda"
                    value={formikValues.values.wereda}
                    error={formikValues.errors.wereda}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="text"
                    name="kebele"
                    label="Kebele"
                    value={formikValues.values.kebele}
                    error={formikValues.errors.kebele}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="number"
                    name="houseNumber"
                    label="House Number"
                    value={formikValues.values.houseNumber}
                    error={formikValues.errors.houseNumber}
                    onChange={formikValues.handleChange}
                  />
                  <TextInput
                    type="number"
                    name="phoneNumber"
                    label="Phone Number"
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
              </form>
            )}
          </Formik>
        )}
      </Box>
    </div>
  );
}

export default UpdateContactInfo;
