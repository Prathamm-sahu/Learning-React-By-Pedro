import {ChangeProfile} from "../components/ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Menu = () => {
    const { username } = useContext(AppContext);
    return (
        <div>
            This is Profile page and user is: {username}
            <ChangeProfile />
        </div>
    )
}