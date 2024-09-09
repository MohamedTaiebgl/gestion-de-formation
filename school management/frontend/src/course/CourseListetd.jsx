import { useEffect, useState } from 'react';
import CourseService from './CourseService'; 

const CourseList = () => {
    const [courses, setCourses] = useState([]);

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

    return (
        <div>
            <h1>Course List</h1>
            <table>
                <thead>
                    <tr>
                        <th>Subject</th>
                        <th>Duration (minutes)</th>
                        <th>Teacher</th>
                        <th>Date</th>
                        <th>Salle (Room number)</th>
                       
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CourseList;
