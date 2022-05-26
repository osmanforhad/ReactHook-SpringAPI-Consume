import axios from "axios";

const BASE_URL = "http://localhost:8080";
const API_URL = BASE_URL + "/api/v1";

class EmployeeService {

    getAllEmployees() {
        return axios.get(API_URL + "/employees");
    }

    createEmployee(employee) {
        return axios.post(API_URL + "/create_employee", employee);
    }

    getEmployeeById(employeeId) {
        return axios.get(API_URL + "/employee/" + employeeId);
    }

    updateEmployee(employeeId, employee) {
        return axios.put(API_URL + "/employee/" + employeeId, employee);
    }

}

export default new EmployeeService();