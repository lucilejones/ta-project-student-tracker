import Student from "./Student";

export default function StudentList(props) {
    const { students } = props;

    const studentElements = students.map(student => {
        return (
            <Student {...student} key={student._id}/>
        )
    })

    return (
        <div>
            {studentElements}
        </div>
    )
}