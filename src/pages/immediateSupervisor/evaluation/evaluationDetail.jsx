import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EvaluationDetail = () => {
    const { employeeId } = useParams();
    const [employeeEvaluation, setEmployeeEvaluation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5100/api/Evaluation/Detail/${employeeId}`)
            .then(response => response.json())
            .then(data => {
                setEmployeeEvaluation(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching employee evaluation details:', error);
                setLoading(false);
            });
    }, [employeeId]);

    const handleFeedbackSubmit = (event) => {
        event.preventDefault();

        const feedbackData = {
            employeeId: employeeId,
            feedback: feedback
        };

        fetch('http://localhost:5100/api/Evaluation/PostEmployeeFeedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(feedbackData)
        })
        .then(response => {
            if (response.ok) {
                alert('Feedback submitted successfully!');
                setFeedback('');
                setShowFeedbackForm(false);
            } else {
                alert('Feedback submitted successfully!');
                setFeedback('');
                setShowFeedbackForm(false);
            }
        })
        .catch(error => console.error('Error submitting feedback:', error));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!employeeEvaluation) {
        return <div>No evaluation details found for the selected employee.</div>;
    }

    return (
        <div className="container">
            <h1>Evaluation Details for {employeeEvaluation.employeeName}</h1>
            <button 
                className="btn btn-primary" 
                onClick={() => setShowFeedbackForm(!showFeedbackForm)}
            >
                {showFeedbackForm ? 'Hide Feedback Form' : 'Show Feedback Form'}
            </button>

            {showFeedbackForm && (
                <form onSubmit={handleFeedbackSubmit}>
                    <div className="form-group">
                        <label>Feedback:</label>
                        <textarea 
                            className="form-control" 
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success">Submit Feedback</button>
                </form>
            )}

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Evaluation Factor</th>
                        <th>Rating</th>
                        <th>Evaluation Date</th>
                    </tr>
                </thead>
                <tbody>
                    {employeeEvaluation.evaluations.map((evaluation, index) => (
                        <tr key={index}>
                            <td>{evaluation.factorName}</td>
                            <td>{evaluation.rating}</td>
                            <td>{new Date(evaluation.evaluationDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EvaluationDetail;
