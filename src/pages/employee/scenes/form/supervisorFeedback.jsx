function SupervisorFeedback() {
  const data = [
    {
      point: "There is an improvement point in attendance",
      recommendation: "I recommend you to wake up early in the morning",
      expectation:
        "There is no work expectation that the employee needs to fulfill",
      problem: "No problem at all",
      comments: "No other comment but try to improve yourself",
    },
  ];

  return (
    <>
      <div className="justify-content-between mt-5">
        <h5 className="ms-5 text-dark fs-4">Supervisor Feedback</h5>
      </div>
      <div className="rounded-3 border m-5 text-dark">
        <table className="table justify-content-between p-4 m-3">
          <th className="m-5 fs-6">
            <tr>Improvement point</tr>
            <tr>Recommended action for improvement</tr>
            <tr>Work expectation</tr>
            <tr>Problem faced because of the employee</tr>
            <tr>Any other comments</tr>
            <td></td>
          </th>
          {data.map((val, key) => {
            return (
              <td className="m-5 fs-6" key={key}>
                <tr className="m-5">{val.point}</tr>
                <tr>{val.recommendation}</tr>
                <tr>{val.expectation}</tr>
                <tr>{val.problem}</tr>
                <tr>{val.comments}</tr>
              </td>
            );
          })}
        </table>
      </div>
    </>
  );
}

export default SupervisorFeedback;
