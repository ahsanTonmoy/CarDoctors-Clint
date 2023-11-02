import Header from "../../components/Header/Header";
import login from '../../assets/images/login/login.svg'
import { Link } from "react-router-dom";
const LogIn = () => {
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
                            <h1 className="text-2xl font-semibold text-center pt-4">Sign In</h1>
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" placeholder="password" className="input input-bordered" required />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-[#FF3811] text-white capitalize font-semibold">sign in</button>
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn border-[ text-[#FF3811] bg-transparent capitalize font-semibold">google</button>
                                </div>

                                <div className=" w-full text-center">
                                    Don't Have an account? <Link className="text-[#FF3811]" to={'/signup'}> Sign up</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;