import {ChangeProfile} from "../components/ChangeProfile";
import {useState} from "react";

export const Login = () => {
    const [newUsername, setNewUsername] = useState("");
    return (
        <div>
            This is Profile page
            <input onChange={(e) => setNewUsername(e.target.value)} type="text" />
            <button>Login</button>
            <button>Logout</button>
            <ChangeProfile />
        </div>
    )
}