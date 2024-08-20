import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserProvider";
import StudentList from "./StudentList";

export default function Public() {
    const {allStudents, getAllStudents} = useContext(UserContext);

    useEffect(() => {
        getAllStudents()
    }, [])

    return (
        <>
            <p>All Students</p>
            <StudentList students={allStudents} />
        </>
    );
}