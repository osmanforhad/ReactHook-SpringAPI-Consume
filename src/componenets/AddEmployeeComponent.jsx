import React, { useState, useEffect } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';

const AddEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [emailId, setEmailId] = useState('');
    const history = useHistory();
    const { id } = useParams();

    const saveOrUpdateEmployee = (event) => {
        event.preventDefault();
        const employee = { firstName, lastName, emailId }
        if (id) {
            EmployeeService.updateEmployee(id, employee).then((response) => {
                history.push("/employees");
            }).catch(error => {
                console.log(error);
            })
        }
        else {
            EmployeeService.createEmployee(employee).then((response) => {
                history.push("/employees");
            }).catch(error => {
                console.log(error);
            })
        }

    }

    useEffect(() => {

        EmployeeService.getEmployeeById(id).then((response) => {
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmailId(response.data.emailId)
        }).catch(error => {
            console.log(error)
        })
    }, [])

    const pageTitle = () => {
        if (id) {
            return <h2 className="text-center">Update employee info</h2>
        }
        else {
            return <h2 className="text-center">Create new employee</h2>
        }
    }


    return (
        <div>
            <div className="container mt-2">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">
                            {pageTitle()}
                        </h2>
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
                                <button className="btn btn-success" onClick={(event) => saveOrUpdateEmployee(event)}>Submit</button>
                                <Link to="/employees" className="btn btn-danger" style={{ marginLeft: "10px" }}>Cancel</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddEmployeeComponent