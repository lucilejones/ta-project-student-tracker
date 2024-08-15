import { useState } from 'react';
import Form from './Form';

export default function Auth() {
    const [isMember, setIsMember] = useState(false);

    function toggleForm() {
        setIsMember(!isMember);
    }

    return (
        <div>
            {
                isMember ?
                <>
                    <Form isMember = {isMember} />
                    <button onClick={toggleForm}> Sign up for an account</button>
                </> :

                <>
                    <Form isMember = {isMember} />
                    <button onClick={toggleForm}>Already a member?</button>
                </>
            }
        </div>
    );
}