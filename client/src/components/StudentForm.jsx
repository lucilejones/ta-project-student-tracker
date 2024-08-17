import { useContext, useState } from "react"
import { UserContext } from "../context/UserProvider";

export default function() {
    const { addStudent } = useContext(UserContext);

    const initState = {
        firstName: '',
        lastName: '',
        currLevel: 0,
        progressPoint: 0
    }

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

    // console.log(formData);

    function handleSubmit(e) {
        e.preventDefault();
        addStudent(formData);
        setFormData(initState);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            <input 
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            <input 
                type="number"
                name="currLevel"
                value={formData.currLevel}
                onChange={handleChange}
            />
            <input 
                type="number"
                name="progressPoint"
                value={formData.progressPoint}
                onChange={handleChange}
            />
            <button>Add Student</button>
        </form>
    )
}