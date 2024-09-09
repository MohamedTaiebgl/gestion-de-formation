import { useEffect, useState } from 'react';
import CourseService from './CourseService'; // Ensure you import your service
import { useNavigate } from 'react-router-dom';

const CourseList = () => {
    const [courses, setCourses] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchCourses();
    }, []);

    const fetchCourses = async () => {
        try {
            const response = await CourseService.getAllCourses();
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    const deleteCourse = async (id) => {
        try {
            await CourseService.deleteCourse(id);
            setCourses(courses.filter(course => course.id !== id));
        } catch (error) {
            console.error('Error deleting course:', error);
        }
    };

    return (
        <div>
            <h1>Course List</h1>
            <button onClick={() => navigate('/prof/createcourse')}>Add Course</button>
            <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Duration (minutes)</th>
                        <th>Teacher</th>
                        <th>Date</th>
                        <th>Salle (Room number)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((course) => (
                        <tr key={course.id}>
                            <td>{course.subject}</td>
                            <td>{course.duration}</td>
                            <td>{course.teacher.name}</td>
                            <td>{course.date}</td>
                            <td>Salle ({course.salle})</td>
                            <td>
                                <button onClick={() => navigate(`/prof/createcourse/${course.id}`)}>Edit</button>
                                <button onClick={() => deleteCourse(course.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseList;
