import {useState} from "react";

export const ChangeProfile = () => {

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