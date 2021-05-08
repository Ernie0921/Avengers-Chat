import { auth, firebaseRef} from "../config" // importing firebae and firebase authenication 

const Login = () => ( //creating component that will be display at login
    <div className="login">

        {/**run auth to pop up a wondow to log into firebase auth google log in  */}
        <button onClick={() => {auth.signInWithPopup(new firebaseRef.auth.GoogleAuthProvider());}}> 
        
            Login with Google
        
        </button>
    
    </div>

)

export default Login