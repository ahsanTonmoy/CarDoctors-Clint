import Header from "../../components/Header/Header";
import login from '../../assets/images/login/login.svg'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
const SignUp = () => {
    const {createUser} = useContext(AuthContext)
    const hendleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        const newUser = { 
            name,photoURL, email, password
        }
        console.log(newUser);

        createUser(email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
          });
    }
    return (

        <div>
            <Header></Header>
            {/*  */}
            <div className="max-w-7xl px-4 md:px-20 w-full mx-auto">
                <div className="hero min-h-screen bg-base-100">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="mx-6">
                            <figure><img src={login} alt="" /></figure>
                        </div>
                        <div className="card border flex-shrink-0 w-full max-w-sm  bg-base-100 mx-6">
                            <h1 className="text-2xl font-semibold text-center pt-4">Create Account</h1>
                            <form onSubmit={hendleSignUp} className="card-body">
                                {/*  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="your name" className="input input-bordered"  />
                                </div>
                                {/*  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">photo uri</span>
                                    </label>
                                    <input type="text" name="photoURL" placeholder="photo uri" className="input input-bordered"  />
                                </div>
                                {/*  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered"  />
                                </div>
                                {/*  */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered"  />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#FF3811] text-white capitalize font-semibold">sign up</button>
                                </div>

                                <div className=" w-full text-center">
                                    Have an account? <Link className="text-[#FF3811]" to={'/login'}> Sign In</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;