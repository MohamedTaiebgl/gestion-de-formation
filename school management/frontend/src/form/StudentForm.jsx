import  { useState } from 'react';
import axios from 'axios';

const StudentForm = ({ onSuccess }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [numTel, setNumTel] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/students', {
                name,
                email,
                password,
                num_tel: numTel,
            });
            if (typeof onSuccess === 'function') {
                onSuccess();
            }
            setName('');
            setEmail('');
            setPassword('');
            setNumTel('');
        } catch (error) {
            console.error('There was an error creating the student!', error);
        }
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div>
                <label>Phone Number</label>
                <input type="text" value={numTel} onChange={(e) => setNumTel(e.target.value)} required />
            </div>
            <button type="submit">Add Student</button>
        </form>
    );
};

export default StudentForm;
