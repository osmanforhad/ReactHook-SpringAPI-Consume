import React, { useState } from 'react'

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');

    const saveEmployee = (event) => {
        event.preventDefault();
        const employee = { firstName, lastName, emailId }
        console.log(employee);
    }

    return (
        <div>
            <div className="container mt-2">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Create New Employee</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">First Name :</label>
                                    <input type="text" placeholder="enter first name" name="firstName" className="form-control" value={firstName} onChange={(event) => setFirstName(event.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Last Name :</label>
                                    <input type="text" placeholder="enter last name" name="lastName" className="form-control" value={lastName} onChange={(event) => setLastName(event.target.value)}></input>
                                </div>
                                <div className="form-group mb-2">
                                    <label className="form-label">Email Address :</label>
                                    <input type="email" placeholder="enter eamil address" name="emailId" className="form-control" value={emailId} onChange={(event) => setEmailId(event.target.value)}></input>
                                </div>
                                <button className="btn btn-success" onClick={(event) => saveEmployee(event)}>Save Empoyee</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent