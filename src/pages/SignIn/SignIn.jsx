import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const SignIn = () => {
    const { signInUser, signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('In signIn page', location);
    const from = location.state || '/';

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                console.log('signIn', result.user)
                navigate(from);
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <h1 className="text-5xl font-bold">SignIn Now!</h1>

                <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">

                                <input type="email" name="email" className="input" required placeholder="Email" />
                                <input type="password" name="password" className="input" required placeholder="Password" />

                                <button
                                    type="button"
                                    onClick={handleGoogleSignIn}
                                    className="btn mt-4 btn-secondary"
                                >
                                    SignIn With Google
                                </button>

                                <button type="submit" className="btn btn-neutral mt-4">
                                    SignIn
                                </button>

                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;