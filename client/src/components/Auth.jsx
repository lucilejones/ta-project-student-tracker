import { useState, useContext } from 'react';
import AuthForm from '../components/AuthForm'
import { UserContext } from '../context/UserProvider';

export default function Auth() {
    const [isMember, setIsMember] = useState(false);

    const { login, signup, errMsg, resetAuthErr } = useContext(UserContext);

    function toggleForm() {
        setIsMember(!isMember);
        resetAuthErr();
    }

    return (
        <div>
            {
                isMember ?
                <>
                    <AuthForm
                        isMember = {isMember}
                        submit={login}
                        errMsg={errMsg}
                    />
                    <button onClick={toggleForm}> Sign up for an account</button>
                </> :

                <>
                    <AuthForm
                        isMember = {isMember}
                        submit={signup}
                        errMsg={errMsg}
                    />
                    <button onClick={toggleForm}>Already a member?</button>
                </>
            }
        </div>
    );
}