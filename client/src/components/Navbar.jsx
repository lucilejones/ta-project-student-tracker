import { Link } from "react-router-dom";

export default function Navbar(props) {
    const { logout } = props;

    return (
        <div>
            <Link to="/profile"><button>Profile</button></Link>
            <Link to="/public"><button>Public</button></Link>
            <Link to="/"><button onClick={logout}>Logout</button></Link>
        </div>
    );
}