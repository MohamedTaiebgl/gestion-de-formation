import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import TeacherService from './TeacherService';

const EditTeacherForm = () => {
    const { id } = useParams(); // Get the teacher ID from the URL
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');
    const [pwd, setPwd] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        fetchTeacher();
    }, []);

    const fetchTeacher = async () => {
        try {
            const response = await TeacherService.getTeacherById(id);
            const { name, email, tel } = response.data;
            setName(name);
            setEmail(email);
            setTel(tel);
        } catch (error) {
            console.error('Error fetching teacher:', error);
            alert('An error occurred while fetching the teacher.');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const teacherData = { name, email, tel, pwd };

        try {
            await TeacherService.updateTeacher(id, teacherData);
            alert('Teacher updated successfully!');
            navigate('/teachers'); // Redirect back to the teacher list
        } catch (error) {
            console.error('Error updating teacher:', error);
            alert('An error occurred while updating the teacher.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                Email:
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </label>
            <label>
                Tel:
                <input
                    type="text"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                />
            </label>
            <label>
                Password:
                <input
                    type="password"
                    value={pwd}
                    onChange={(e) => setPwd(e.target.value)}
                />
            </label>
            <button type="submit">Update</button>
        </form>
    );
};

export default EditTeacherForm;
