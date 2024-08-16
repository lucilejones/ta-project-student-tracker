import { useState, useContext } from 'react';
import Form from './Form';
import { UserContext } from '../context/UserProvider';

export default function Auth() {
    const [isMember, setIsMember] = useState(false);

    const { login, signup } = useContext(UserContext);

    function toggleForm() {
        setIsMember(!isMember);
    }

    return (
        <div>
            {
                isMember ?
                <>
                    <Form
                        isMember = {isMember}
                        submit={login}
                    />
                    <button onClick={toggleForm}> Sign up for an account</button>
                </> :

                <>
                    <Form
                        isMember = {isMember}
                        submit={signup}
                    />
                    <button onClick={toggleForm}>Already a member?</button>
                </>
            }
        </div>
    );
}