export default function Form(props) {
    const {isMember} = props;

    return (
        <form name="auth-form" id="auth-form">
            <input type="text" placeholder="Username"/>
            <input type="text" placeholder="Password"/>

            <button>{isMember ? "Login" : "Signup"}</button>
        </form>
    );
}