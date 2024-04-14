import { Link } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {
  const { logInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    //way to access form data
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // console.log(email, password);

    //another way to access form  data

    // console.log(e.currentTarget);

    const form = new FormData(e.currentTarget);

    const email = form.get("email");
    const password = form.get("password");
    console.log(email, password);

    //Sign in user

    logInUser(email, password)
      .then((result) => console.log(result.user))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col gap-6">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="text-center p-4">
              Don't have an Account?
              <span className="text-lg font-semibold">Please</span>
              <Link to="/register">
                <a className="text-blue-600 underline ml-6">Register</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
