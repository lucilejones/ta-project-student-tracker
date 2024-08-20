import React, { useState } from 'react';

export default function Form(props) {
    const {isMember, submit} = props;

    const initState = {username: "", email: "", password: ""}
    const [formData, setFormData] = useState(initState);

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        submit(formData);
        // console.log(formData);
    }

    return (
        <form name="auth-form" id="auth-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
            />
            {
                !isMember &&
                <input
                    type="text"
                    placeholder='Email'
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            }
            <input
                type="text"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
            />
            <button>{isMember ? "Login" : "Signup"}</button>
        </form>
    );
}

// TODO: add email for signup