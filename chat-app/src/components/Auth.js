import { auth, provider} from '../firebase-config';
import{ signInWithPopup } from 'firebase/auth';
import Cookies from 'universal-cookie';
import '../styles/Auth.css'

const cookie = new Cookies()

export const Auth = (props) => {
    const {setIsAuth} = props

    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            // console.log(result.user.refreshToken)
            cookie.set("auth-token", result.user.refreshToken)
            setIsAuth(true)
        } 
        catch(err) {
            console.error(err)
        }
    }
    return (
        <div className="auth">
            <p>Sign In with google to continue</p>
            <button onClick={signInWithGoogle}>Sign In</button>
        </div>
    )
}