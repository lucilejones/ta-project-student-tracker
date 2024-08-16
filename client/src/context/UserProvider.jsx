import React, { useState } from "react";
import axios from 'axios';

export const UserContext = React.createContext();

export default function UserProvider(props) {
    const initState = {
        user: {},
        token: "",
        students: []
    }

    const [userState, setUserState] = useState(initState);

    async function signup(credentials) {
        try {
            const res = await axios.post('/api/auth/signup', credentials);
            console.log(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    async function login(credentials) {
        try {
            const res = await axios.post('/api/auth/login', credentials);
            console.log(res.data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <UserContext.Provider value={{
            ...userState,
            signup,
            login
        }}>
            {props.children}
        </UserContext.Provider>
    )
}