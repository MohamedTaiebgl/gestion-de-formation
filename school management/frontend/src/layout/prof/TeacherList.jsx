import  { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TeacherService from './TeacherService'; // Ensure you import your service

const TeacherList = () => {
    const [teachers, setTeachers] = useState([]);
    const navigate = useNavigate(); // Use this to navigate to other pages

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = async () => {
        try {
            const response = await TeacherService.getAllTeachers();
            setTeachers(response.data);
        } catch (error) {
            console.error('Error fetching teachers:', error);
        }
    };

    const deleteTeacher = async (id) => {
        try {
            await TeacherService.deleteTeacher(id);
            setTeachers(teachers.filter(teacher => teacher.id !== id));
            alert('Teacher deleted successfully!');
        } catch (error) {
            console.error('Error deleting teacher:', error);
            alert('An error occurred while deleting the teacher.');
        }
    };

    const handleAddTeacher = () => {
        navigate('/admin/add-teacher'); // Navigate to the add teacher form
    };

    const handleEditTeacher = (id) => {
        navigate(`/admin/edit-teacher/${id}`); // Navigate to the edit teacher form
    };

    return (
        <div>
            <h2>Teacher List</h2>
            <button onClick={handleAddTeacher}>Add Teacher</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map(teacher => (
                        <tr key={teacher.id}>
                            <td>{teacher.id}</td>
                            <td>{teacher.name}</td>
                            <td>{teacher.email}</td>
                            <td>{teacher.tel}</td>
                            <td>
                                <button onClick={() => handleEditTeacher(teacher.id)}>Edit</button> {/* Edit button */}
                                <button onClick={() => deleteTeacher(teacher.id)}>Delete</button> {/* Delete button */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TeacherList;
