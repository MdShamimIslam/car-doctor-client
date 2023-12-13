import React, { useContext } from "react";
import login from '../../assets/login.png';
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const SignIn = () => {
  const {signIn} =  useContext(AuthContext);

  const handleSignIn = e => {
      e.preventDefault();
      const form = e.target;
      const email = form.email.value; 
      const password = form.password.value; 
      console.log(email,password);

      signIn(email,password)
      .then(res => {
          const user = res.user;
          console.log(user);
          form.reset();
      })
      .catch(error => {
        console.error(error);
        form.reset();
      })

  }

  return (
    <div className="hero my-16">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="ml-12">
          <img src={login} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSignIn}>
        <h1 className="text-2xl font-bold text-center">Sign In now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn bg-purple-600 text-white hover:bg-cyan-600">Sign In</button>
            </div>
          </form>
          <p className="text-center mb-8">Create a new car ? <Link to='/signUp' className="text-purple-700 font-bold">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
