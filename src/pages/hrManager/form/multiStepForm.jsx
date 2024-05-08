const MultiStepForm = () => {
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
  
    const handleSubmit = async (values) => {
      try {
        const response = await fetch(
          "https://localhost:7140/Employee/CorrectRegisterEmployee",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        if (response.ok) {
          console.log("Registration successful");
          // Redirect to success page or perform other actions
          navigate("/hrDashboard");
        } else {
          console.log("Registration failed");
        }
      } catch (error) {
        console.error("Error registering employee:", error.message);
      }
    };
  
    const handleNext = () => setStep(step + 1);
    const handlePrev = () => setStep(step - 1);
  
    return (
      <div>
        <h1>Multi-Step Registration Form</h1>
        <Formik
          initialValues={{
            Emp_Id: "",
            // Other initial values...
          }}
          onSubmit={handleSubmit}
        >
          {(formikProps) => (
            <Form>
              {step === 1 && <Step1 onNext={handleNext} formikValues={formikProps} />}
              {step === 2 && <Step2 onPrev={handlePrev} onSubmit={formikProps.handleSubmit} formikValues={formikProps} />}
            </Form>
          )}
        </Formik>
      </div>
    );
  };
  
  export default MultiStepForm;
  