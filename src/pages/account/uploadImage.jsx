import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";

function UploadImage() {
  const [PhotoData, setPhotoData] = useState(null);
  const navigate = useNavigate();

  const handlePhotoDataChange = (event) => {
    setPhotoData(event.currentTarget.files[0]);
  };

  const handleSetProfile = async () => {
    try {
      const token = sessionStorage.getItem("token");
      if (!token) {
        console.error("Token not found in session storage");
        return;
      }
      const isValid = isTokenValid(token);
      if (!isValid) {
        console.error("Invalid token");
        return;
      }
      const userId = getUserIdFromToken(token);
      const formData = new FormData();
      formData.append("PhotoData", PhotoData);

      const result = await fetch(
        `https://localhost:7140/Account/update?userId=${userId}`,
        {
          method: "PUT",
          body: formData,
        }
      );
      if (result.ok) {
        alert("Profile picture set successfully");
        navigate("/myAccount");
      } else {
        const errorText = await result.text();
        throw new Error(`Failed to set profile picture: ${errorText}`);
      }
    } catch (error) {
      console.error("Set profile picture error:", error);
      alert(`Set profile picture error: ${error.message}`);
    }
  };

  const getUserIdFromToken = (token) => {
    const decodedToken = JSON.parse(atob(token.split(".")[1]));
    return decodedToken[
      "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
    ];
  };

  const isTokenValid = (token) => {
    if (!token) {
      return false;
    }
    try {
      const decodedToken = JSON.parse(atob(token.split(".")[1]));
      const expirationTime = decodedToken.exp * 1000;
      const currentTime = Date.now();
      return currentTime < expirationTime;
    } catch (error) {
      console.error("Error decoding or validating token:", error);
      return false;
    }
  };

  return (
    <div className="row justify-content-center">
      <Formik
        initialValues={{ userId: "", PhotoData: null }}
        onSubmit={handleSetProfile}
      >
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
                  handlePhotoDataChange(event);
                  setFieldValue("PhotoData", event.currentTarget.files[0]);
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
  );
}

export default UploadImage;
