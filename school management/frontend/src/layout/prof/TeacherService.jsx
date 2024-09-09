import axios from 'axios';

const API_URL = 'http://localhost:8000/api/teachers';

class TeacherService {
    getAllTeachers() {
        return axios.get(API_URL);
    }

    getTeacherById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    createTeacher(teacher) {
        return axios.post(API_URL, teacher);
    }

    updateTeacher(id, teacher) {
        return axios.put(`${API_URL}/${id}`, teacher);
    }

    deleteTeacher(id) {
        return axios.delete(`${API_URL}/${id}`);
    }
}

export default new TeacherService();
