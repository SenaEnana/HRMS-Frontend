import SideBar from "../../CommonPages/SideBar";
import { IoMdPeople } from "react-icons/io";
import { FaUserMinus } from "react-icons/fa";

const Dashboard = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/4">
                <SideBar />
            </div>
            <div className="w-full md:w-3/4 bg-gray-200 rounded-3xl mt-16 mr-12 mb-60">
                <h1 className="text-2xl font-bold pt-6 pl-8">Welcome, HRName</h1>

                <div className="flex flex-col md:flex-row p-6">
                    <div className="bg-[#5D8AA8] w-80 h-32 md:mr-2 rounded-2xl flex mb-2 md:mb-0">
                        <div>
                            <h2 className="text-2xl mt-6 ml-4 text-white font-bold">Total Employees</h2>
                            <h2 className="text-xl mt-1 ml-4 text-white font-bold ">12345</h2>
                        </div>
                        <div className="text-5xl text-white ml-8 mt-9">
                            <IoMdPeople />
                        </div>
                    </div>
                    <div className="bg-[#5D8AA8] w-80 h-32 rounded-2xl md:mr-2 flex mb-2 md:mb-0">
                        <div>
                            <h2 className="text-2xl mt-3 ml-4 font-bold text-white">Resigned Employees</h2>
                            <h2 className="text-xl mt-1 ml-4 text-white font-bold ">123</h2>
                        </div>
                        <div className="text-4xl text-white ml-0 mr-5 mt-9">
                            <FaUserMinus />
                        </div>
                    </div>
                    <div className="bg-[#5D8AA8] w-80 h-32 rounded-2xl md:-pr-12 flex">
                        <div>
                            <h2 className="text-2xl mt-3 ml-4 font-bold text-white">Leave request</h2>
                            <h2 className="text-xl mt-1 ml-4 text-white font-bold ">123</h2>
                        </div>
                        <div className="text-4xl text-white ml-0 mr-5 mt-9">
                            <FaUserMinus />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row pl-6">
                    <div className="bg-yellow-50 w-full md:w-1/2 mb-2 md:mb-0 rounded-2xl p-4">
                        <h1 className="text-xl font-bold">Attendance</h1>
                    </div>
                    <div className="bg-yellow-50 w-full md:w-1/2 mb-2 md:mb-0 rounded-2xl p-4 md:ml-2">
                        <h1 className="text-xl font-bold">Requests</h1>
                    </div>
                </div>

                <div className="bg-[#5D8AA8] w-full md:w-1/4 mt-4 md:mt-0 rounded-2xl p-4 md:ml-2">
                    <h1 className="text-xl font-bold text-white">Events</h1>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
