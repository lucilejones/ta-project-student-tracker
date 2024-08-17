import React, { useContext, useEffect } from 'react';
import { UserContext } from '../context/UserProvider';
import StudentList from './StudentList';
import StudentForm from './StudentForm';

export default function Profile() {
    const { user, getUserStudents, students } = useContext(UserContext);

    useEffect(() => {
        getUserStudents();
        console.log("students:", students)
    }, [])

    return (
        <>
            <p>Hello, {user.username}!</p>
            <StudentForm />
            <StudentList students={students}/>
        </>
    );
}