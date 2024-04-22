import { useState } from "react";
import SideBar from "../../CommonPages/SideBar";
import Dropdown from "../EIF/Dropdown/Dropdown";
import { Link } from "react-router-dom";

const PerformanceManagement = () => {
    const [inputs, setInputs] = useState([
        { factor: "Knowledge of work", rating: null },
        { factor: "Quality work", rating: null },
        { factor: "Speed", rating: null },
        { factor: "Responsibility", rating: null },
        { factor: "Leadership (where applicable)", rating: null },
        { factor: "Attendance", rating: null },
        { factor: "Efficiency in using and protection for in Akufada MFIs resources", rating: null },
        { factor: "Initiative", rating: null },
        { factor: "Relation with subordinate and employees", rating: null },
        { factor: "Relation with supervisor", rating: null },
        { factor: "Personality", rating: null },
        { factor: "Attitude towards the job and organization", rating: null },
    ]);

    const handleChange = (factorIndex, rating) => {
        const newInputs = inputs.map((input, index) => {
            if (index === factorIndex) {
                return { ...input, rating };
            } else {
                return input;
            }
        });
        setInputs(newInputs);
    };

    const calculateAverage = () => {
        const totalRatings = inputs.reduce((acc, input) => acc + (input.rating || 0), 0);
        return (totalRatings / inputs.length).toFixed(2);
    };

    return (
        <div className="flex">
            <div className="h-screen">
                <SideBar />
            </div>
            <div className="w w-full h h-full bg bg-gray-200 rounded-3xl lg:ml-96 pl-6 mt-16 mr-16 sm:ml-36 min-[320px]:ml-32 min-[800px]:w-3/4 -mb-64  ">
                <h1 className="text-2xl font-bold mt-5">Performance Evaluation</h1>
                <div className="lg:flex mt-8">
                    <div >
                        <p>Dept. /Program area :</p>
                        <Dropdown />
                        <br />
                        <p>Name of the staff:</p>
                        <input type="text" required className="w lg:w-80 sm:w-60 md:w-60  pl-6 h h-12 rounded-2xl  ml-48 -mt-28" />
                        <br />
                        <p>Date of Employment:</p>
                        <input type="date" required className="w-80  pl-6 h h-12 rounded-2xl ml-48 -mt-32 mt-0" />
                        <br />
                    </div>
                    <div className="ml-16">
                        <div className="flex">
                            <p>Job title:</p>
                            <p className="-ml-40 mt-6"> <Dropdown /></p>
                        </div>  <br />
                        <div>
                            <p>Promotion:</p>
                            <input type="text" required className="w w-80  pl-6 h h-12 rounded-2xl -mt-6 ml-24" />
                        </div><br />
                        <div> <p>Transfer:</p>
                            <input type="text" required className="w lg:w-80  pl-6 h h-12 rounded-2xl m-6 ml-10 " />
                        </div> <br />
                    </div>
                </div>
                <table style={{ borderCollapse: "collapse", borderRadius: "12px", border: "1px solid #000" }} className="mr-8">
                    <thead>
                        <tr>
                            <th style={cellStyle} className="w-16">No.</th>
                            <th style={cellStyle} className="w-7/12">Evaluating Factors</th>
                            <th style={cellStyle} className="w-24">5</th>
                            <th style={cellStyle} className="w-24">4</th>
                            <th style={cellStyle} className="w-24">3</th>
                            <th style={cellStyle} className="w-24">2</th>
                            <th style={cellStyle} className="w-24">1</th>~
                        </tr>
                    </thead>
                    <tbody>
                        {inputs.map((input, index) => (
                            <tr key={index} className="h-10">
                                <td style={cellStyle}>{index + 1}</td>
                                <td style={cellStyle}>{input.factor}</td>
                                {[5, 4, 3, 2, 1].map((value) => (
                                    <td key={value} style={cellStyle}>
                                        <input
                                            type="radio"
                                            name={`rating-${index}`}
                                            checked={input.rating === value}
                                            onChange={() => handleChange(index, value)}
                                            className="ml-6"
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                        <tr className="h-10">
                            <td style={cellStyle}></td>
                            <td style={cellStyle}>Average</td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}></td>
                            <td style={cellStyle}>{calculateAverage()}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="mt-8">
                    <div>
                        <h1>If there are any Performance characteristics that need improvement, please specify in order of importance.</h1>
                        <textarea
                            className="border border-gray-300 p-2 rounded-md w-full h-40 resize-none"
                            placeholder="Type your opinion here..."
                        />
                    </div>
                    <div>
                        <h1>What action do you recommend for improving the situation in (1) above?</h1>
                        <textarea
                            className="border border-gray-300 p-2 rounded-md w-full h-40 resize-none"
                            placeholder="Type your opinion here..."
                        />
                    </div>
                    <div>
                        <h1>Applicable work expectations, which the employee did not meet.</h1>
                        <textarea
                            className="border border-gray-300 p-2 rounded-md w-full h-40 resize-none"
                            placeholder="Type your opinion here..."
                        />
                    </div>
                    <div>
                        <h1>Indicate any problem faced by the employee for not accomplishing the goals.</h1>
                        <textarea
                            className="border border-gray-300 p-2 rounded-md w-full h-40 resize-none"
                            placeholder="Type your opinion here..."
                        />
                    </div>
                    <div>
                        <h1>What action do you propose to improve the situation in (4) above?</h1>
                        <textarea
                            className="border border-gray-300 p-2 rounded-md w-full h-40 resize-none"
                            placeholder="Type your opinion here..."
                        />
                    </div>
                    <div>
                        <h1>Any other comment.</h1>
                        <textarea
                            className="border border-gray-300 p-2 rounded-md w-full h-40 resize-none"
                            placeholder="Type your opinion here..."
                        />
                    </div>
                </div>
                <Link to="/performanceManagement">
                    <button className="mb-10 pt-1 pl-0 pb-1 h-10 rounded-3xl w-40 md:w-68 bg-[#1c4966] text-xl text-white ml-[760px] mt-8">
                        Submit
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default PerformanceManagement;

const cellStyle = {
    border: "1px solid #000",
    padding: "8px",
};
