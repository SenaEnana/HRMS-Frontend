import React, { useEffect, useState } from 'react';

const EvaluationList = () => {
    const [evaluationDetail, setEvaluationDetail] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvaluationDetail = async () => {
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

                const response = await fetch(`https://localhost:7100/api/Evaluation/Employees?userId=${userId}`);
                if (!response.ok) {
                    console.error("Failed to fetch evaluation detail");
                    return;
                }
                const data = await response.json();
                setEvaluationDetail(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching evaluation detail:", error);
                setLoading(false);
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

        fetchEvaluationDetail();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!evaluationDetail) {
        return <div>No data found for the current user.</div>;
    }

    return (
        <div className="evaluation-container">
            <div className="header">
                <h1>Employee Evaluation Detail</h1>
            </div>
            <div className="details-container">
                <div className="evaluation-details">
                    <h2>Evaluations</h2>
                    {evaluationDetail.evaluations.map((evaluation, index) => (
                        <div key={index} className="evaluation-item">
                            <p><strong>Factor Name:</strong> {evaluation.factorName}</p>
                            <p><strong>Rating:</strong> {evaluation.rating}</p>
                            <p><strong>Evaluation Date:</strong> {evaluation.evaluationDate}</p>
                        </div>
                    ))}
                </div>
                <div className="feedback-details">
                    <h2>Feedback</h2>
                    {evaluationDetail.feedbacks.map((item, index) => (
                        <div key={index} className="feedback-item">
                            <p><strong>Feedback:</strong> {item.feedback}</p>
                            <p><strong>Feedback Date:</strong> {item.feedbackDate}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default EvaluationList;
