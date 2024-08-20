import { useState, useContext } from 'react';
import AuthForm from '../components/AuthForm'
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
                    <AuthForm
                        isMember = {isMember}
                        submit={login}
                    />
                    <button onClick={toggleForm}> Sign up for an account</button>
                </> :

                <>
                    <AuthForm
                        isMember = {isMember}
                        submit={signup}
                    />
                    <button onClick={toggleForm}>Already a member?</button>
                </>
            }
        </div>
    );
}