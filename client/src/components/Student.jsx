export default function Student(props) {
    const {firstName, lastName, currLevel, progressPoint, assignedInstr } = props;
    return (
        <div>
            <h3>{firstName} {lastName}</h3>
            <p>Level: {currLevel}</p>
            <p>Story Point: {progressPoint}</p>
            {/* <p>Assigned To: {assignedInstr}</p> */}
            {/* {if logged in user is instructor display edit and delete} */}
            <button>Delete</button>
            <button>Edit</button>
        </div>
    )
}