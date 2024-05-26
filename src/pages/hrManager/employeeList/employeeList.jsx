import { useState, useEffect, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { Box, IconButton, useTheme } from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { ColorModeContext, tokens } from "../../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import MockSearch from "../../../components/mockSearch";

const EmployeeList = () => {
  const [data, setData] = useState([]);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [searchQuery, setSearchQuery] = useState({
    empId: "",
    name: "",
    branch: "",
    department: "",
    email: "",
    position: "",
  });

  const handleChange = (field, value) => {
    setSearchQuery((prevSearchQuery) => ({
      ...prevSearchQuery,
      [field]: value,
    }));
  };

  const fetchData = () => {
    const queryParams = new URLSearchParams(searchQuery).toString();
    fetch(`https://localhost:7100/Employee/Filter?${queryParams}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setData(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  const downloadReport = () => {
    const queryParams = new URLSearchParams(searchQuery).toString();
    fetch(`https://localhost:7100/Employee/Download?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/csv',
      },
    })
    .then(response => {
      if (response.ok) {
        return response.blob();
      } else {
        throw new Error('Failed to download the file');
      }
    })
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'employees.csv');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    })
    .catch(error => {
      console.error('Error downloading the file:', error);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const result = await fetch("https://localhost:7100/Employee/ListEmployees");
      const data = await result.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
        <Box className="d-flex rounded m-1" backgroundColor={colors.primary[400]}>
          <InputBase
            className="ps-2 fs-6 m-1 text-dark"
            placeholder="Enter Employee ID"
            value={searchQuery.empId}
            onChange={(e) => handleChange("empId", e.target.value)}
          />
          <InputBase
            className="ps-2 fs-6 m-1 text-dark"
            placeholder="Enter Name"
            value={searchQuery.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
          <InputBase
            className="ps-2 fs-6 m-1 text-dark"
            placeholder="Branch name"
            value={searchQuery.branch}
            onChange={(e) => handleChange("branch", e.target.value)}
          />
          <InputBase
            className="ps-2 fs-6 m-1 text-dark"
            placeholder="Department name"
            value={searchQuery.department}
            onChange={(e) => handleChange("department", e.target.value)}
          />
          <InputBase
            className="ps-2 fs-6 m-1 text-dark"
            placeholder="Position name"
            value={searchQuery.position}
            onChange={(e) => handleChange("position", e.target.value)}
          />
          <InputBase
            className="ps-2 fs-6 m-1 text-dark"
            placeholder="Enter Email"
            value={searchQuery.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
          <IconButton
            type="button"
            className="btn ms-1 text-dark"
            onClick={fetchData}
          >
            Search
            <SearchIcon className="text-success" />
          </IconButton>
        </Box>
      </Box>
      <div className="container mt-5">
        <button className="btn btn-secondary btn-sm float-end ms-1" onClick={downloadReport}>
          <DownloadOutlinedIcon sx={{ mr: "10px" }} />
          Download Reports
        </button>
        <div className="d-flex justify-content-between text-dark mb-3">
          <h5 className="text-start">Employee List</h5>
          <NavLink
            to={"/employeeBasic"}
            className="btn btn-secondary btn-sm float-end me-2 p-1"
          >
            Add new Employee
          </NavLink>
        </div>
        <table className="table table-hover text-dark w-100 fs-6">
          <thead>
            <tr>
              <th>Employee Id</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Gender</th>
              <th>Mother Name</th>
              <th>Phone Number</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.emp_Id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.gender}</td>
                <td>{employee.motherName}</td>
                <td>{employee.phoneNo}</td>
                <td>{employee.role}</td>
                <td>
                  <Link to={`/employeeDetail/${employee.id}`}>
                    <button className="btn btn-outline-secondary btn-sm">
                      Detail
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EmployeeList;
