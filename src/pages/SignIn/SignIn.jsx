import { useContext } from "react";
import { AuthContext } from "../../authContext/AuthContext";

const SignIn = () => {
    const { signInUser } = useContext(AuthContext);

    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInUser(email, password)
            .then(result => {
                console.log('signIn', result)
            })
            .catch(error => {
                console.log(error)
            })

    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignIn Now!</h1>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <form onSubmit={handleSignIn}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" required placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" required placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">SignIn</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;