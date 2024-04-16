import { useState } from 'react';
import { FaEdit, FaTrash, FaInfo } from 'react-icons/fa';

const Payment = () => {
    const [employees, setEmployees] = useState([]);
    const [newEmployee, setNewEmployee] = useState({
        number: 1,
        fullName: '',
        accountNumber: '',
        salary: '',
        pension: 0,
        tax: 0,
        netSalary: 0,
    });

    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const updatedEmployees = [...employees];
        updatedEmployees[index][name] = value;

        // Calculate pension
        const salary = parseFloat(value);
        const pension = salary * 0.1; // Assuming pension is 10% of salary

        // Calculate tax
        let tax = 0;
        if (salary > 10000) {
            tax = (salary - 10000) * 0.2; // Assuming 20% tax on the amount exceeding 10000
        }

        // Calculate net salary
        const netSalary = salary - pension - tax;

        updatedEmployees[index].pension = pension.toFixed(2);
        updatedEmployees[index].tax = tax.toFixed(2);
        updatedEmployees[index].netSalary = netSalary.toFixed(2);

        setEmployees(updatedEmployees);
    };

    const addEmployee = () => {
        setEmployees([...employees, newEmployee]);
        setNewEmployee({
            number: newEmployee.number + 1,
            fullName: '',
            accountNumber: '',
            salary: '',
            pension: 0,
            tax: 0,
            netSalary: 0,
        });
    };

    const deleteEmployee = (index) => {
        const updatedEmployees = employees.filter((_, i) => i !== index);
        setEmployees(updatedEmployees);
    };

    const handleEdit = (index) => {
        const updatedEmployees = employees.filter((_, i) => i !== index);
        setEmployees(updatedEmployees);
    };

    return (
        <div>
            <h2>Salary Calculator</h2>
            <table>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Full Name</th>
                        <th>Account Number</th>
                        <th>Salary</th>
                        <th>Pension</th>
                        <th>Tax</th>
                        <th>Net Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee, index) => (
                        <tr key={index}>
                            <td>{employee.number}</td>
                            <td contentEditable>{employee.fullName}</td>
                            <td contentEditable>{employee.accountNumber}</td>
                            <td><input type="text" name="salary" value={employee.salary} onChange={(e) => handleInputChange(e, index)} /></td>
                            <td>{employee.pension}</td>
                            <td>{employee.tax}</td>
                            <td>{employee.netSalary}</td>
                            <td>
                                <FaEdit onClick={() => handleEdit(index)} style={{ cursor: 'pointer', marginRight: '10px' }} />
                                <FaTrash onClick={() => deleteEmployee(index)} style={{ cursor: 'pointer' }} />
                                <FaInfo style={{ cursor: 'pointer', marginLeft: '10px' }} />
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <td>{newEmployee.number}</td>
                        <td><input type="text" name="fullName" value={newEmployee.fullName} onChange={(e) => setNewEmployee({ ...newEmployee, fullName: e.target.value })} /></td>
                        <td><input type="text" name="accountNumber" value={newEmployee.accountNumber} onChange={(e) => setNewEmployee({ ...newEmployee, accountNumber: e.target.value })} /></td>
                        <td><input type="text" name="salary" value={newEmployee.salary} onChange={(e) => setNewEmployee({ ...newEmployee, salary: e.target.value })} /></td>
                        <td>{newEmployee.pension}</td>
                        <td>{newEmployee.tax}</td>
                        <td>{newEmployee.netSalary}</td>
                        <td><button onClick={addEmployee}>Add Employee</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Payment;
