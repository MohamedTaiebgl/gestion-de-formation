import { useEffect, useState } from 'react';
import StudentService from './StudentService';


const StudentList = () => {
    const [students, setStudents] = useState([]);


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
        } catch (error) {
            console.error('Error deleting student:', error);
        }
    };

    return (
        <div>
            <h2>Student List</h2>
            <center>
                        <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Tel</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map(student => (
                        <tr key={student.id}>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.tel}</td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
            </center>
        </div>
    );
};

export default StudentList;
