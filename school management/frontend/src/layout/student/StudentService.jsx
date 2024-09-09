import axios from 'axios';

const API_URL = 'http://localhost:8000/api/students';

class StudentService {
    getAllStudents() {
        return axios.get(API_URL);
    }

    getStudentById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    createStudent(student) {
        return axios.post(API_URL, student);
    }

    updateStudent(id, student) {
        return axios.put(`${API_URL}/${id}`, student);
    }

    deleteStudent(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new StudentService();
