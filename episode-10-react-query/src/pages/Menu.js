import { ChangeProfile } from "../components/ChangeProfile";
import { useContext } from "react"
import {AppContext} from '../App'

export const Menu = (props) => {
    const {username} = useContext(AppContext)
    return (
        <div>
            This is the Menu page user is: {username}
            <ChangeProfile />
        </div>
    )
}