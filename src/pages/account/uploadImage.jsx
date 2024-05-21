import { useState } from "react";
import { useNavigate } from "react-router";
import { Formik, Form, Field } from "formik";

function UploadImage() {
  const [profilePicture, setProfilePicture] = useState(null);
  const navigate = useNavigate();

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.currentTarget.files[0]);
  };

  const handleSetProfile = (values) => {
    if (!profilePicture) {
      alert("Please select a profile picture");
      return;
    }

    const formData = new FormData();
    formData.append("profilePicture", profilePicture);

    fetch(`https://localhost:52339/Account/update?userId=${values.userId}`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          alert("Profile picture set successfully");
          navigate("/myAccount");
        } else {
          throw new Error("Failed to set profile picture");
        }
      })
      .catch((error) => {
        console.error("Set profile picture error:", error);
        alert("Set profile picture error:", error);
      });
  };

  return (
    <>
      <div className="row justify-content-center">
        <Formik onSubmit={handleSetProfile}>
          {({ setFieldValue }) => (
            <Form className="form-group rounded border col-6 pe-3 mt-5 bg-light">
              <div className="mt-3">
                <p className="fs-4 text-dark text-center">Upload Image</p>
              </div>
              <div className="col-md-6">
                <h5 className="text-left mt-5 text-black">Image</h5>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => {
                    handleProfilePictureChange(event);
                    setFieldValue(
                      "profilePicture",
                      event.currentTarget.files[0]
                    );
                  }}
                  className="form-control mt-3"
                />
              </div>
              <div className="m-3">
                <button className="btn btn-success col-12" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
}

export default UploadImage;
