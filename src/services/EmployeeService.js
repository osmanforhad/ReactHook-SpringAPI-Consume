import axios from "axios";

const BASE_URL = "http://localhost:8080";
const API_URL = BASE_URL + "/api/v1";

class EmployeeService {

    getAllEmployees() {
        return axios.get(API_URL + "/employees");
    }

}

export default new EmployeeService();