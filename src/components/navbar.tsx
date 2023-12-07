import { Link } from "react-router-dom";
import {auth} from '../config/firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import { signOut } from "firebase/auth";

export const Navbar = () => {

    const [user] = useAuthState(auth);

    const signuserOut = async () => {
        await signOut(auth);
    };

    return (
        <div className="navbar">
            <div className="links">
            <Link to='/'>Home</Link>
           { !user ? ( <Link to='/login'>Login</Link> 
           ) : (
            <Link to='/createpost'>Create Post</Link>
           )}
            </div>
        <div>
         <div className="user">
                {user && (
            <>
            <p>{user?.displayName}</p>
            <img src={user?.photoURL || ""} 
            alt="profile pic" width="20" height="20"/>
            <button onClick={signuserOut}>Sign out</button>
            </>
                )}
            </div>
        </div>

        </div>

    );
}