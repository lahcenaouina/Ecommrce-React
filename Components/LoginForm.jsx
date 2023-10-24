import {auth, signInwithGoogle} from "../../Firebase/firebase.jsx";
import {useStoreActions} from "easy-peasy";

const LoginForm = ({closepopup}) => {
    const SetUser = useStoreActions(actions => actions.User.setData)
    return (<>
            <form className="form">
                <label>Email or Username : </label>
                <input type="text" placeholder="Phone, email or username" size="{22}/"/>
                <label>Password : </label>
                <input type="text" placeholder="Enter password" size="{22}/"/>
                <br/>
                <input id="next" type="submit" defaultValue="Next"/>
            </form>
            <p>Or</p>
            <button className="button"
                    onClick={() => {
                        signInwithGoogle()
                        closepopup()
                        SetUser(auth.currentUser)
                     }
                    }
            >
                <img
                    src="https://img.icons8.com/color/48/undefined/google-logo.png"
                    alt="google logo"
                    className="img"

                />
                <p>Sign in with Google</p>
            </button>
            <p id="signup">
                Don't have an account ? <a href="#">Sign up</a>
            </p>
        </>

    )
}
export default LoginForm;