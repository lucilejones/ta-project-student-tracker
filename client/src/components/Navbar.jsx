import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <Link to="/profile"><button>Profile</button></Link>
            <Link to="/public"><button>Public</button></Link>
            <Link to="/"><button>Logout</button></Link>
        </div>
    );
}