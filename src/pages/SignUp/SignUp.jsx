import React, { useContext } from 'react';
import login from '../../assets/login.png';
import { Link } from "react-router-dom";
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {
    const {createUser} =  useContext(AuthContext);

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value; 
        const email = form.email.value; 
        const password = form.password.value; 
        console.log(name,email,password);

        createUser(email,password)
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
          <form className="card-body" onSubmit={handleSignUp}>
        <h1 className="text-2xl font-bold text-center">Sign Up now!</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name='name'
                placeholder="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
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
                name='password'
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <button className="btn bg-purple-600 text-white hover:bg-cyan-600">Sign Up</button>
            </div>
          </form>
          <p className="text-center mb-8">Already have an Account ? <Link to='/signIn' className="text-purple-700 font-bold">Sign In</Link></p>
        </div>
      </div>
    </div>
    );
};

export default SignUp;