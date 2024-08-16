import React, { useContext } from 'react';
import { UserContext } from '../context/UserProvider';

export default function Profile() {
    const { user } = useContext(UserContext);

    return (
        <>
            <p>Hello, {user.username}!</p>
        </>
    );
}