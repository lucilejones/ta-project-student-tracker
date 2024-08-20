import React, { useState } from "react";
import axios from 'axios';

export const UserContext = React.createContext();

const userAxios = axios.create();

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

export default function UserProvider(props) {
    const initState = {
        user: JSON.parse(localStorage.getItem("user")) || {},
        token: localStorage.getItem("token") || "",
        students: []
    }

    const [userState, setUserState] = useState(initState);

    const [allStudents, setAllStudents] = useState([]);

    async function signup(credentials) {
        try {
            const res = await axios.post('/api/auth/signup', credentials);
            const { user, token } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    user: user,
                    token: token
                }
            })
            console.log(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    async function login(credentials) {
        try {
            const res = await axios.post('/api/auth/login', credentials);
            const { user, token } = res.data;
            localStorage.setItem("token", token);
            localStorage.setItem("user", JSON.stringify(user));
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    user: user,
                    token: token
                }
            })
            console.log(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    async function logout() {
        try {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    user: {},
                    token: ""
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    async function getUserStudents() {
        try {
            const res = await userAxios.get('/api/main/students/byInstructor');
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    students: res.data
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    async function getAllStudents() {
        try {
            const res = await userAxios.get('/api/main/students/allStudents');
            setAllStudents(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    async function addStudent(newStudent) {
        try {
            const res = await userAxios.post('/api/main/students', newStudent);
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    students: [...prevUserState.students, res.data]
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    async function deleteStudent(studentId) {
        try {
            const res = await userAxios.delete(`/api/main/students/${studentId}`);
            setAllStudents(prevStudents => prevStudents.filter(student => student._id !== studentId));
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    students: prevUserState.students.filter(student => student._id !== studentId)
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function editStudent(studentId, updatedStudentInfo) {
        try {
            const res = await userAxios.put(`/api/main/students/${studentId}`, updatedStudentInfo);
            setAllStudents(prevStudents => prevStudents.map(student => student._id !== studentId ? student : res.data));
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    students: prevUserState.students.map(student => student._id !== studentId ? student : res.data)
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <UserContext.Provider value={{
            ...userState,
            signup,
            login,
            logout,
            getUserStudents,
            getAllStudents,
            allStudents,
            addStudent,
            deleteStudent,
            editStudent
        }}>
            {props.children}
        </UserContext.Provider>
    )
}