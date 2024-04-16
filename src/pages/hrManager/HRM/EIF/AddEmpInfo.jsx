
import SideBar from "../../CommonPages/SideBar";
import { useState } from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const AddEmpInfo = ({ onSubmit }) => {
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

    const [formData, setFormData] = useState({
        empid: '',
        empname: '',
        empbd: '',
        emdate: '',
        genmale: '',
        genfemale: '',
        empreg: '',
        empwereda: '',
        empkebele: '',
        emphouseno: '',
        empphone: ''
    });
    const handleid = (e) => {
        const { empid, value } = e.target;
        setFormData({ ...formData, [empid]: value });
    }
    const handlename = (e) => {
        const { empname, value } = e.target;
        setFormData({ ...formData, [empname]: value });
    }
    const handlebd = (e) => {
        const { empbd, value } = e.target;
        setFormData({ ...formData, [empbd]: value });
    }
    const handledate = (e) => {
        const { empdate, value } = e.target;
        setFormData({ ...formData, [empdate]: value });
    }
    // const handlemale = (e) => {
    //   const { genmale, value } = e.target;
    // setFormData({ ...formData, [genmale]: value });
    //}
    //const handlefemale = (e) => {
    //  const { genfemale, value } = e.target;
    //setFormData({ ...formData, [genfemale]: value });
    //}
    const handlereg = (e) => {
        const { empreg, value } = e.target;
        setFormData({ ...formData, [empreg]: value });
    }
    const handlewereda = (e) => {
        const { empwereda, value } = e.target;
        setFormData({ ...formData, [empwereda]: value });
    }
    const handlekebele = (e) => {
        const { empkebele, value } = e.target;
        setFormData({ ...formData, [empkebele]: value });
    }
    const handlehouseno = (e) => {
        const { emphouseno, value } = e.target;
        setFormData({ ...formData, [emphouseno]: value });
    }
    const handlephone = (e) => {
        const { empphone, value } = e.target;
        setFormData({ ...formData, [empphone]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }
    const [choice, setChoice] = useState(null);

    const handleChoiceChange = (event) => {
        setChoice(event.target.value);
    };
    const [choiceMS, setChoiceMS] = useState(null);

    const handleChoiceChangeMS = (event) => {
        setChoiceMS(event.target.value);
    };
    return (
        <div className="flex">
            <div className="h-screen ">
                <SideBar />
            </div>
            <div className="w w-full h h-full  bg bg-gray-200 rounded-3xl ml-96 pl-6 mt-16 mr-16 -mb-64 ">
                <h2 className="text-3xl mb-6 mt-6 font-bold">Employee Personal Information</h2>
                <form className="flex mt-14" onSubmit={handleSubmit}>
                    <div>
                        Employee ID number: <input type="number" name="empid" onChange={handleid} required className="w w-80 pl-6 h h-12 rounded-2xl m-6  " /><br></br>

                        Employee full name :<input type="text" name="empname" onChange={handlename} required className="w w-80 pl-6  h h-12 rounded-2xl mb-6 ml-8" /><br></br>

                        Employee birth date:<input type="date" name="empbd" onChange={handlebd} required className="w w-80 pl-6 h h-12 rounded-2xl  mb-6 ml-8" /><br></br>

                        Date of Employment: <input type="date" name="empdate" onChange={handledate} required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-6" /><br></br>
                        <div className="flex"><span className="pr-16">Gender :  </span>
                            <div className="flex flex-col ml-12 space-y-2">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="choice"
                                        value="male"
                                        checked={choice === "male"}
                                        onChange={handleChoiceChange}
                                        className="form-radio h-5 w-5 text-indigo-600"
                                    />
                                    <span className="ml-2 text-gray-700">Male</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        name="choice"
                                        value="female"
                                        checked={choice === "female"}
                                        onChange={handleChoiceChange}
                                        className="form-radio h-5 w-5 text-indigo-600"
                                    />
                                    <span className="ml-2 text-gray-700">Female</span>
                                </label>

                            </div>
                        </div><br></br>
                        <p className=" pr-64 mb-3 font-bold text-xl -mt-0"> Personal Address: </p>
                        Region :<input type="text" name="empreg" onChange={handlereg} required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-28" /><br></br>
                        Wereda :<input type="aplhanumeric" name="empwereda" onChange={handlewereda} required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-28" /><br></br>

                        Kebele :<input type="aplhanumeric" name="empkebele" onChange={handlekebele} required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-28" /><br></br>

                        House number :<input type="number" name="emphouseno" onChange={handlehouseno} required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-14" /><br></br>
                        Phone number :<input type="number" name="empphone" onChange={handlephone} required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-14" /><br></br>
                        <div className="flex mb-8"><span className="pr-16">Marital Status :  </span>
                            <div className="flex flex-col space-y-2">
                                <div>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="choiceMS"
                                            value="single"
                                            checked={choiceMS === "single"}
                                            onChange={handleChoiceChangeMS}
                                            className="form-radio h-5 w-5 text-indigo-600"
                                        />
                                        <span className="ml-2 text-gray-700">Single</span>
                                    </label>
                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="choiceMS"
                                            value="divorced"
                                            checked={choiceMS === "divorced"}
                                            onChange={handleChoiceChangeMS}
                                            className="form-radio h-5 w-5 ml-20 text-indigo-600"
                                        />
                                        <span className="ml-2 text-gray-700">Divorced</span>
                                    </label>
                                </div>
                                <div>
                                    <label className="inline-flex items-center ">
                                        <input
                                            type="radio"
                                            name="choiceMS"
                                            value="married"
                                            checked={choiceMS === "married"}
                                            onChange={handleChoiceChangeMS}
                                            className="form-radio h-5 w-5  text-indigo-600"
                                        />
                                        <span className="ml-2 text-gray-700">Married</span>
                                    </label>

                                    <label className="inline-flex items-center">
                                        <input
                                            type="radio"
                                            name="choiceMS"
                                            value="widowed"
                                            checked={choiceMS === "widowed"}
                                            onChange={handleChoiceChangeMS}
                                            className="form-radio h-5 w-5 ml-16 text-indigo-600"
                                        />
                                        <span className="ml-2 text-gray-700">Widowed</span>
                                    </label>
                                </div>
                            </div></div>

                    </div>

                    <div className="ml-6 mt-10">
                        <p className=" pr-64 mb-3 font-bold text-xl -mt-20"> Spouse Information: </p>

                        Full Name: <input type="text" required className="w w-80 pl-6 h h-12 rounded-2xl m-6 ml-14 " /><br></br>

                        Region :<input type="text" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-20" /><br></br>
                        Wereda :<input type="aplhanumeric" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-20" /><br></br>
                        Kebele :<input type="aplhanumeric" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-20" /><br></br>
                        House number :<input type="number" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-6" /><br></br>
                        Phone number :<input type="number" required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 ml-6" /><br></br>



                        <div className="ml-0">
                            <div >
                                <p className=" pr-64 mb-3 font-bold text-xl -mt-2"> Childrens information: </p>
                                {inputFields.map((field, index) => (
                                    <div key={field.id} >
                                        Name :<input type="text" value={field.value}
                                            onChange={(event) => handleInputChange(index, event)} required className="w w-80 pl-6 h h-12 rounded-2xl mb-6 mt-6 ml-20" /><br></br>
                                        DOB :<input type="date" value={field.value}
                                            onChange={(event) => handleInputChange(index, event)} required className="w w-80 pl-6 h h-12 rounded-2xl mb-2 ml-24 -mt-8" /><br></br>

                                        <button onClick={() => handleDeleteField(index)} className="bg bg-red-400 ml-80 rounded-2xl text-xl h-12 mt-0 w-32 -mb-60 ">Delete child</button>
                                    </div>
                                ))}

                                <button onClick={handleAddField} className="bg bg-gray-400  rounded-2xl text-xl h-12 mt-4  w-32 ml-80 mb-6">Add child</button>


                            </div>
                        </div>

                        <Link to="/NextFormTwo">  <button className="bg bg-[#1c4966] text-white  ml-60 rounded-2xl text-xl h-12 w-52 mb-6" type="submit">Next Form</button></Link>
                    </div>

                </form>
            </div>

        </div>


    );
}

export default AddEmpInfo;