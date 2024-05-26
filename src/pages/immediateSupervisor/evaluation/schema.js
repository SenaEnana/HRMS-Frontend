import * as Yup from "yup";

export const sendFeedbackValidation = Yup.object().shape({
    Emp_Id:Yup.string().required("this field is required"),
    ImprovementPoint:Yup.string().required("this field is required"),
    Recommendation:Yup.string().required("this field is required"),
    WorkExpectation:Yup.string().required("this field is required"),
    ProblemFaced:Yup.string().required("this field is required"),
    Comments:Yup.string().required("this field is required"),
});