import React, { useState } from 'react';
import mockTableData from './mockTable'; // Importing mock table data
import { Link } from 'react-router-dom'; // Importing Link for routing

function MockSearch() {
    const [searchTermId, setSearchTermId] = useState('');
    const [searchTermName, setSearchTermName] = useState('');
    const [searchTermBranch, setSearchTermBranch] = useState('');
    const [searchTermDepartment, setSearchTermDepartment] = useState('');
    const [searchTermPosition, setSearchTermPosition] = useState('');
    const [searchTermEmail, setSearchTermEmail] = useState('');

    const handleSearchIdChange = (event) => {
        setSearchTermId(event.target.value);
    };

    const handleSearchNameChange = (event) => {
        setSearchTermName(event.target.value);
    };

    const handleSearchBranchChange = (event) => {
        setSearchTermBranch(event.target.value);
    };

    const handleSearchDepartmentChange = (event) => {
        setSearchTermDepartment(event.target.value);
    };

    const handleSearchPositionChange = (event) => {
        setSearchTermPosition(event.target.value);
    };

    const handleSearchEmailChange = (event) => {
        setSearchTermEmail(event.target.value);
    };

    const filteredTableData = mockTableData.filter(row => {
        const idMatches = row.id && row.id.toString().toLowerCase().includes(searchTermId.toLowerCase());
        const nameMatches = row.name && row.name.toLowerCase().includes(searchTermName.toLowerCase());
        const branchMatches = row.branch && row.branch.toLowerCase().includes(searchTermBranch.toLowerCase());
        const departmentMatches = row.department && row.department.toLowerCase().includes(searchTermDepartment.toLowerCase());
        const positionMatches = row.position && row.position.toLowerCase().includes(searchTermPosition.toLowerCase());
        const emailMatches = row.email && row.email.toLowerCase().includes(searchTermEmail.toLowerCase());

        return idMatches && nameMatches && branchMatches && departmentMatches && positionMatches && emailMatches;
    });

    return (
        <div className="container mt-5">
            <div className="row mb-3">
                <div className="col">
                    <input
                        type="text"
                        placeholder="Emp-ID..."
                        value={searchTermId}
                        onChange={handleSearchIdChange}
                        className="form-control"
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        placeholder="Name..."
                        value={searchTermName}
                        onChange={handleSearchNameChange}
                        className="form-control"
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        placeholder="Branch..."
                        value={searchTermBranch}
                        onChange={handleSearchBranchChange}
                        className="form-control"
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        placeholder="Department..."
                        value={searchTermDepartment}
                        onChange={handleSearchDepartmentChange}
                        className="form-control"
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        placeholder="Position..."
                        value={searchTermPosition}
                        onChange={handleSearchPositionChange}
                        className="form-control"
                    />
                </div>
                <div className="col">
                    <input
                        type="text"
                        placeholder="Email..."
                        value={searchTermEmail}
                        onChange={handleSearchEmailChange}
                        className="form-control"
                    />
                </div>
            </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Branch</th>
                        <th>Department</th>
                        <th>Position</th>
                        <th>Email</th>
                        <th>Action</th> {/* Add Action column header */}
                    </tr>
                </thead>
                <tbody>
                    {filteredTableData.map((row, index) => (
                        <tr key={index}>
                            <td>{row.id}</td>
                            <td>{row.name}</td>
                            <td>{row.branch}</td>
                            <td>{row.department}</td>
                            <td>{row.position}</td>
                            <td>{row.email}</td>
                            <td>
                                <Link to={`/employeeDetail/${row.id}`}>
                                    <button className="btn btn-outline-secondary btn-sm">
                                        Detail
                                    </button>
                                </Link>
                            </td> {/* Add Detail button */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MockSearch;
