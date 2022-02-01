import AuthContext from "../../authentication/AuthContext";
import { signInWithGoogle, signOut } from '../../authentication/firebaseConfig';
import { FcGoogle } from "react-icons/fc";
import { useContext } from 'react';


function SignIn( ) {

    const { user } = useContext(AuthContext);


    return (

        <div className='gbuttons'>
        {
            user?
            <span>{user.displayName}<button onClick={signOut}>Sign out</button></span> : 
            <button onClick={signInWithGoogle}><FcGoogle/>Sign in</button>
        }
        </div>

    )
}

export default SignIn;