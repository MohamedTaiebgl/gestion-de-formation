import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home";
import Login from "../pages/login";
import Contact from "../pages/contact";
import Register from "../pages/register";
import Existing from "../pages/existing";
import Layout from "../layout/layout";
import StudentLayout from "../layout/student/studentLayout";
import ALayout from "../layout/admin/aLayout";
import PLayout from "../layout/prof/pLayout";
import StudentList from "../layout/student/StudentList";
import StudentListp from "../layout/student/StudentListp";
import StudentForm from "../layout/student/StudentForm";
import TeacherList from "../layout/prof/TeacherList";

import CourseList from '../course/CourseList';
import CourseListetd from '../course/CourseListetd';
import CourseForm from '../course/CourseForm';
import TeacherForm from "../layout/prof/TeacherForm";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'contact',
          element: <Contact />
        },
        {
          path: 'existing',
          element: <Existing />
        },
        {
          path: 'register',
          element: <Register />
        },
        {
          path: '*',
          element: <NotFound />
        },
      ]
    },
    {
      path: '/student',
      element: <StudentLayout />,
      children: [
        {
          path: '/student',
          element: <Home />
        },
        {
          path: '/student/contact',
          element: <Contact />
        },
        {
          path: '/student/existing',
          element: <Existing />
        },
        {
          path: '/student/courseList',
          element: <CourseListetd/>
        },
        {
          path: '/student/*',
          element: <NotFound />
        },
      ]
    },
    {
      path: '/prof',
      element: <PLayout />,
      children: [
        {
          path: '/prof',
          element: <Home />
        },
        {
          path: '/prof/studentList',
          element: <StudentListp />
        },
        {
          path: '/prof/courselist',
          element: <CourseList />
        },
        {
          path: '/prof/createcourse',
          element: <CourseForm />
        },
        {
          path: '/prof/createcourse/:id',
          element: <CourseForm />
        },
        {
          path: '/prof/contact',
          element: <Contact />
        },
        {
          path: '/prof/existing',
          element: <Existing />
        },
        {
          path: '/prof/*',
          element: <NotFound />
        },
      ]
    },
    {
        path: '/admin',
        element: <ALayout />,
        children: [
          {
            path: '/admin',
            element: <Home />
          },
          {
            path: '/admin/contact',
            element: <Contact />
          },
          {
            path: '/admin/existing',
            element: <Existing />
          },
          {
            path: '/admin/Listeetd',
            element: <StudentList/>
          },
          {
            path:"/admin/edit-student/:id",
            element: <StudentForm />
          },
          {
            path:"/admin/add-student",
            element: <StudentForm />
          },
          {
            path: '/admin/Listprof',
            element: <TeacherList />
          },
          {
            path: '/admin/*',
            element: <NotFound />
          },
          
          {
            path:"/admin/add-teacher",
            element: <TeacherForm />
          },
          {
            path:"/admin/edit-teacher/:id",
            element: <TeacherForm />
          },
        ]
      },
     
  ]);
  