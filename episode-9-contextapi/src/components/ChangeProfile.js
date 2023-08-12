import {useState} from "react";
import { useContext } from "react";
import { AppContext } from "../App";
export const ChangeProfile = () => {
    const {setUsername} = useContext(AppContext);
    const [newUsername, setNewUserName] = useState("");
    return (
        <div>
            <input onChange={(e) => setNewUserName(e.target.value)} />
            <button
                onClick={() => {setUsername(newUsername)}}
                type="submit"
            >
                Update Username
            </button>
        </div>
    )

}