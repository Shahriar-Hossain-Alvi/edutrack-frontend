import React, { useState } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa6';

const Signin = () => {
    const [showPassword, setShowPassword] = useState(false);
    
    


    return (
        <div className="hero min-h-screen">
            <div className="p-8 bg-base-200 rounded-2xl flex-col w-3/4 lg:w-1/3">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">Login</h1>
                    <p className="py-6">
                        Use your email and password to login
                    </p>
                </div>
                <div className="card bg-base-100 w-full shrink-0 shadow-2xl">
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <input type="email" className="input w-full" placeholder="Email" />

                            <div className='relative'>
                                <input type={showPassword ? "text" : "password"} className="input w-full" placeholder="Password" />
                                {
                                    showPassword ?
                                        <button onClick={()=>setShowPassword(false)} className="btn btn-sm bg-base-100 btn-ghost absolute z-10 right-4 top-1/2 transform -translate-y-1/2">
                                            <FaEyeSlash />
                                        </button>
                                        :
                                        <button onClick={()=>setShowPassword(true)} className="btn btn-sm bg-base-100 btn-ghost absolute z-10 right-4 top-1/2 transform -translate-y-1/2">
                                            <FaEye />
                                        </button>
                                }
                            </div>

                            <div><a className="link link-hover">Forgot password?</a></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;