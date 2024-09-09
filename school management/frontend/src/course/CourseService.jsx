import axios from 'axios';

const API_URL = 'http://localhost:8000/api/courses';

class CourseService {
    getAllCourses() {
        return axios.get(API_URL);
    }

    getCourseById(id) {
        return axios.get(`${API_URL}/${id}`);
    }

    createCourse(course) {
        return axios.post(API_URL, course);
    }

    updateCourse(id, course) {
        return axios.put(`${API_URL}/${id}`, course);
    }

    deleteCourse(id) {
        return axios.delete(`${API_URL}/${id}`);
    }

    // Add this method to get all teachers
    getAllTeachers() {
        return axios.get('http://localhost:8000/api/teachers');
    }
}

export default new CourseService();
