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

    async function addStudent(newStudent) {
        try {
            const res = await userAxios.post('/api/main/students', newStudent);
            setUserState(prevUserState => {
                return {
                    ...prevUserState,
                    students: [...prevUserState, res.data]
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
            addStudent
        }}>
            {props.children}
        </UserContext.Provider>
    )
}