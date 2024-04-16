import SideBar from "../../CommonPages/SideBar";
import { useState } from "react";
import { Link } from "react-router-dom";
const LastForm = () => {
    const [choice, setChoice] = useState(null);

    const handleChoiceChange = (event) => {
        setChoice(event.target.value);
    };
    return (
        <div className="flex">
            <div>
                <SideBar />
            </div>
            <div className="w w-full h h-full bg bg-gray-200 rounded-3xl ml-96 pl-6 mt-16 mr-16 -mb-64 flex ">
                <form >
                    Health status:<textarea
                        className="border border-gray-300 p-2 rounded-md w-full h-40 resize-none"
                        placeholder="Type your opinion here..."
                    />
                    Convicted of a criminal offence?

                    <div className="flex flex-col space-y-2">
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="choice"
                                value="yes"
                                checked={choice === "yes"}
                                onChange={handleChoiceChange}
                                className="form-radio h-5 w-5 text-indigo-600"
                            />
                            <span className="ml-2 text-gray-700">Yes</span>
                        </label>
                        <label className="inline-flex items-center">
                            <input
                                type="radio"
                                name="choice"
                                value="no"
                                checked={choice === "no"}
                                onChange={handleChoiceChange}
                                className="form-radio h-5 w-5 text-indigo-600"
                            />
                            <span className="ml-2 text-gray-700">No</span>
                        </label>

                    </div>
                    If yes, What was the nature of the offence?<textarea
                        className="border border-gray-300 p-2 rounded-md w-full h-40 resize-none"
                        placeholder="Type your opinion here..."
                    />
                    <Link to="/NextFormTwo"><button className="bg bg-[#1c4966] text-white  ml-60 rounded-2xl text-xl h-12 w-52 mt-6 mb-1">Previous Form</button></Link>

                    <button className="bg bg-[#1c4966] text-white  ml-60 rounded-2xl text-xl h-12 w-52 mt-6 mb-6" type="submit">Add Employee</button>

                </form>

            </div>
        </div>
    );
}

export default LastForm;