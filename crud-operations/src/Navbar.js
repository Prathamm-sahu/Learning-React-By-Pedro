import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <div>
            <Link to="/">Todo</Link>
            <Link to="/FetchApi">FetchApi</Link>
            <Link to="/PredictAge">PredictAge</Link>
            <Link to="/Excuse">Excuse</Link>
            <Link to="/Profile">Profile</Link>
        </div>
    )
}