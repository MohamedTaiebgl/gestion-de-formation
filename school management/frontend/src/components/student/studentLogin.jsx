import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate } from 'react-router';
import { Button } from "../ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { axiosClient } from '../../api/axios.js';
import axios from 'axios';

const formSchema = z.object({
  email: z.string().email().min(2).max(50),
  password: z.string().min(8).max(30),
});

export default function StudentLogin() {
    const navigate = useNavigate();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: 'mohamed@taieb.com',
            password: "12345678"
        },
    });

    const onSubmit = async values => {
       const api= axios.create({
        baseURL: 'http://localhost:8000',
       })
        // Ensure CSRF token is fetched
        await api.get('/sanctum/csrf-cookie'); 
        // Send login request
        const data = await axiosClient.post('/login', values); 
        console.log(data);
        
        if (data.status === 204) {
            // Adjust the navigation path as needed
            navigate();
        } else {
            console.log(data);
        }       
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="Email" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Password</FormLabel>
                            <FormControl>
                                <Input type="password" placeholder="Password" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
