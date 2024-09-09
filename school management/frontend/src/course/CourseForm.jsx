import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CourseService from './CourseService'; // Ensure you import your service

const CourseForm = () => {
    const [subject, setSubject] = useState('');
    const [duration, setDuration] = useState('');
    const [teacherId, setTeacherId] = useState('');
    const [date, setDate] = useState('');
    const [salle, setSalle] = useState('');
    const [teachers, setTeachers] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate(); // Use useNavigate instead of useHistory

    useEffect(() => {
        fetchTeachers();
        if (id) {
            fetchCourse();
        }
    }, [id]);

    const fetchCourse = async () => {
        try {
            const response = await CourseService.getCourseById(id);
            const course = response.data;
            setSubject(course.subject);
            setDuration(course.duration);
            setTeacherId(course.teacher_id);
            setDate(course.date);
            setSalle(course.salle);
        } catch (error) {
            console.error('Error fetching course:', error);
        }
    };

    const fetchTeachers = async () => {
        try {
            const response = await CourseService.getAllTeachers();
            setTeachers(response.data);
        } catch (error) {
            console.error('Error fetching teachers:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const courseData = { subject, duration, teacher_id: teacherId, date, salle };

        try {
            if (id) {
                await CourseService.updateCourse(id, courseData);
            } else {
                await CourseService.createCourse(courseData);
            }
            navigate('/prof/courselist'); // Use navigate instead of history.push
        } catch (error) {
            if (error.response && error.response.status === 422) {
                console.error('Validation Errors:', error.response.data.errors);
                alert('Validation error: ' + JSON.stringify(error.response.data.errors));
            } else {
                console.error('Error saving course:', error);
            }
        }
    };

    return (
        <center>
        <div style={{
            padding : "10px", border:"solid #9C4D6B 5px",width:"50%",margin:"25PX"
        }}>
        <form onSubmit={handleSubmit}>
            <label>
                Subject:
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
            </label>
            <label>
                Duration (minutes):
                <input
                    type="number"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                />
            </label>
            <label>
                Teacher:
                <select
                    value={teacherId}
                    onChange={(e) => setTeacherId(e.target.value)}
                >
                    {teachers.map((teacher) => (
                        <option key={teacher.id} value={teacher.id}>
                            {teacher.name}
                        </option>
                    ))}
                </select>
            </label>
            <label>
                Date:
                <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
            </label>
            <label>
                Salle (Room number):
                <input
                    type="text"
                    value={salle}
                    onChange={(e) => setSalle(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
        </div>
        </center>
    );
};

export default CourseForm;
