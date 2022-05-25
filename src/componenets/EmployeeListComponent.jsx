import React, { useState } from 'react';

const EmployeeListComponent = () => {

    const [employees, setEmployees] = useState([]);

    return (
        <div className="container">
            <h2 className="text-center">Employee List</h2>
            <table className="table table-bordered table-striped">
                <thead>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Address</th>
                </thead>
                {
                    employees.map((employee) => {
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.emailId}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}

export default EmployeeListComponent;