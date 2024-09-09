import { useEffect, useState } from 'react';
import StudentService from './StudentService';
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchStudents();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await StudentService.getAllStudents();
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await StudentService.deleteStudent(id);
            fetchStudents(); // Refresh the list after deletion
            alert('student deleted successfully!');
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };

    return (
        <div>
            <h2>Student List</h2>
            <button onClick={() => navigate('/admin/add-student')}>Add Student</button>
            <center>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Tel</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.tel}</td>
                            <td>
                                <button onClick={() => navigate(`/admin/edit-student/${student.id}`)}>Edit</button>
                                <button onClick={() => handleDelete(student.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </center>
        </div>
    );
};

export default StudentList;
