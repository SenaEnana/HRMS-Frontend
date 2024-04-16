import SideBar from "../../CommonPages/SideBar";
import Dropdown from "./Dropdown/Dropdown";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddInfoTwo = () => {
    const [inputFields, setInputFields] = useState([{ value: "" }]);

    const handleAddField = () => {
        setInputFields([...inputFields, { value: "" }]);
    };


    const handleInputChange = (id, event) => {
        const updatedFields = inputFields.map(field => {
            if (field.id === id) {
                return { ...field, value: event.target.value };
            }
            return field;
        });
        setInputFields(updatedFields);
    };
    const handleDeleteField = (index) => {
        const updatedFields = [...inputFields];
        updatedFields.splice(index, 1);
        setInputFields(updatedFields);
    };
    const [selectedSkills, setSelectedSkills] = useState([]);

    const handleCheckboxChange = (event) => {
        const skill = event.target.value;
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedSkills([...selectedSkills, skill]);
        } else {
            setSelectedSkills(selectedSkills.filter((selected) => selected !== skill));
        }
    };
    return (
        <div className="flex">
            <div className="h-screen sticky top-0">
                <SideBar />
            </div>


            <div className="w w-full h h-full bg bg-gray-200 rounded-3xl lg:ml-96 md:ml-12 pl-6 mt-16 mr-16 -mb-64  lg:flex">
                <form className="mr-6">

                    <p className="mt-6 ">Position at employment:<p className="-ml-3"><Dropdown /></p></p><br></br>
                    <p className="flex"> Starting salary:<input type="number" className="w w-80 pl-6 h h-12 rounded-2xl m-6 -mt-0 ml-20" /></p>
                    <p className="flex">Benefit  at emp.t:<input type="number" className="w w-80 pl-6 h h-12 rounded-2xl m-6 mt-0 ml-16  " /></p>
                    <p className="font-bold text-xl">Relative/Person to be contacted in case of emergency:</p>
                    Full Name :<input type="text" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-24 mt-5" /><br></br>
                    Address:<input type="aplhanumeric" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-28" /><br></br>

                    City:<input type="aplhanumeric" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-36" /><br></br>

                    Woreda :<input type="alphanumeric" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-28" /><br></br>
                    Kebele :<input type="number" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-28" /><br></br>
                    Phone number :<input type="number" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-14" /><br></br>
                    Relation :<input type="text" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-24" /><br></br>
                    <p className=" pr-64 mb-3 font-bold text-xl -mt-2">Beneficiaries of pension/Provident fund: </p>
                    {inputFields.map((field, index) => (
                        <div key={field.id} >
                            Name :<input type="text" value={field.value}
                                onChange={(event) => handleInputChange(index, event)} required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 mt-6 ml-28" /><br></br>
                            Address :<input type="text" value={field.value}
                                onChange={(event) => handleInputChange(index, event)} required className="w w-80 pl-6 h h-12 rounded-2xl mb-2 ml-24 -mt-8" /><br></br>

                            <button onClick={() => handleDeleteField(index)} className="bg bg-red-400 ml-72 rounded-2xl text-xl h-12 mt-0 w-48 -mb-60 ">Delete Beneficiary</button>
                        </div>
                    ))}

                    <button onClick={handleAddField} className="bg bg-gray-400  rounded-2xl text-xl h-12 mt-4  w-48 ml-72 mb-6">Add Beneficiary</button>


                    <div>
                        <p className="font-bold text-xl mt-5">Higher Education attended</p>
                        Institute Name:<input type="text" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-10 mt-5" /><br></br>
                        Address :<input type="text" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-20 mt-5" /><br></br>

                    </div>
                </form>
                <form>
                    From :<input type="date" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-24 mt-5" /><br></br>
                    To :<input type="date" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-28 mt-5" /><br></br>

                    Specialization :<input type="text" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-8 mt-5" /><br></br>
                    Remark:<input type="text" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-20 mt-5" /><br></br>

                    <p className="font-bold text-xl mt-5">Experience</p>
                    Employer Name:<input type="text" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-6 mt-5" /><br></br>
                    Address :<input type="text" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-20 mt-5" /><br></br>
                    Job title:<input type="text" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-20 mt-5" /><br></br>
                    From :<input type="date" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-24 mt-5" /><br></br>
                    To :<input type="date" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-28 mt-5" /><br></br>
                    Initial salary:<input type="number" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-12 mt-5" /><br></br>
                    Last salary:<input type="number" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-14 mt-5" /><br></br>
                    Date of termination:<input type="date" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-1 mt-5" /><br></br>
                    <p className="-mt-1"> Reason: </p><textarea
                        className="border border-gray-300 p-2 rounded-md w-96 ml-20 -mt-6  h-40 resize-none"
                        placeholder="Type your opinion here..."
                    />
                    <p className="font-bold ">Language Ability:</p><br></br>

                    <div className="flex">
                        <div className="flex flex-col space-y-2">
                            <label className="inline-flex items-center">
                                Amharic:<br></br>
                                <input
                                    type="checkbox"
                                    name="speak"
                                    value="speak"
                                    onChange={handleCheckboxChange}
                                    className="form-checkbox h-5 w-5  ml-5 text-indigo-600"
                                />
                                <span className="ml-2 text-gray-700">Speak</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="write"
                                    value="write"
                                    onChange={handleCheckboxChange}
                                    className="form-checkbox h-5 w-5  ml-20 text-indigo-600"
                                />
                                <span className="ml-2 text-gray-700"> Write</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="read"
                                    value="read"
                                    onChange={handleCheckboxChange}
                                    className="form-checkbox h-5 w-5  ml-20 text-indigo-600"
                                />
                                <span className="ml-2 text-gray-700"> Read</span>
                            </label>

                        </div>

                        <div className="flex flex-col space-y-2 ml-12">
                            <label className="inline-flex items-center">
                                <p> English:</p><br></br>
                                <input
                                    type="checkbox"
                                    name="speak"
                                    value="speak"
                                    onChange={handleCheckboxChange}
                                    className="form-checkbox h-5 w-5  ml-3 text-indigo-600"
                                /><br></br>
                                <span className="ml-2 text-gray-700">Speak</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="write"
                                    value="write"
                                    onChange={handleCheckboxChange}
                                    className="form-checkbox h-5 w-5 ml-16  text-indigo-600"
                                />
                                <span className="ml-2 text-gray-700">Write</span>
                            </label>
                            <label className="inline-flex items-center">
                                <input
                                    type="checkbox"
                                    name="read"
                                    value="read"
                                    onChange={handleCheckboxChange}
                                    className="form-checkbox h-5 w-5 ml-16 text-indigo-600"
                                />
                                <span className="ml-2 text-gray-700">Read</span>
                            </label>

                        </div>

                    </div>

                    <Link to="/AddInfo"><button className="bg bg-[#1c4966] text-white  ml-60 rounded-2xl text-xl h-12 w-52 mt-6 mb-1">Previous Form</button></Link>

                    <Link to="/LastForm"><button className="bg bg-[#1c4966] text-white  ml-60 rounded-2xl text-xl h-12 w-52 mt-4 mb-6">Next Form</button></Link>

                </form>
            </div>

        </div>
    );
}

export default AddInfoTwo;