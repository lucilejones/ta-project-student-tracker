import { useContext, useState } from "react";
import { UserContext } from "../context/UserProvider";

export default function Student(props) {
    const {firstName, lastName, currLevel, progressPoint, assignedInstr, _id } = props;
    const {user, deleteStudent, editStudent} = useContext(UserContext);
    
    const [isEditMode, setIsEditMode] = useState(false);

    const [formData, setFormData] = useState({
        firstName,
        lastName,
        currLevel,
        progressPoint
    })

    let isUser = assignedInstr === user._id;

    function handleEditToggle() {
        setIsEditMode(prevEditMode => !prevEditMode);
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        editStudent(_id, formData);
        setIsEditMode(prevEditMode => !prevEditMode);
    }

    return (
        <>
        {isEditMode ?
        <form onSubmit={handleSubmit}>
            <input 
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
            />
            <input 
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
            />
            <input 
                name="currLevel"
                value={formData.currLevel}
                onChange={handleChange}
            />
            <input 
                name="progressPoint"
                value={formData.progressPoint}
                onChange={handleChange}
            />
            <button>Save</button>
        </form>
        :
        <div>
            <h3>{firstName} {lastName}</h3>
            <p>Level: {currLevel}</p>
            <p>Progress Point: {progressPoint}</p>
            {/* <p>Assigned To: {assignedInstr}</p> */}
            {isUser &&
                <>
                    <button onClick={() => deleteStudent(_id)}>Delete</button>
                    <button onClick={handleEditToggle}>Edit</button>
                </>
            }
        </div>
        }
        </>
    )
}