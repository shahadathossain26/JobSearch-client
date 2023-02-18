import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import loginImage from "../../images/login.jpg"

const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { logIn } = useContext(AuthContext);
    const location = useLocation();
    const [loginError, setLoginError] = useState('')

    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/'

    const handleLogin = data => {
        logIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate('/')


            })
            .catch(err => {
                console.log(err)
                setLoginError(err.message)
            })
    }

    return (
        <div className='lg:flex block justify-between items-center lg:px-16 mb-16'>
            <div>
                <img className='lg:w-3/5 w-full' src={loginImage} alt="" />
            </div>
            <div className='lg:w-2/5 w-full '>
                <div className='w-[385px]  shadow-xl border mx-auto lg:mx-0 px-[29px] py-[25px]'>
                    <h2 className='text-xl text-center'>Login</h2>

                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Email</span>
                            </label>
                            <input type="text" {...register("email", { required: "Email Address is required" })} className="input input-bordered w-full max-w-xs" />
                            {errors.email && <p role="alert" className='text-red-700'>{errors.email?.message}</p>}
                        </div>

                        <div className="form-control w-full max-w-xs">
                            <label className="label"><span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: 'Password is required',
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })} className="input input-bordered w-full max-w-xs" />
                            {errors.password && <p role="alert" className='text-red-700'>{errors.password?.message}</p>}
                        </div>
                        <p className='text-[14px] mb-[18px]'>Forgot Password ?</p>

                        <p className='text-red-700'>{loginError}</p>
                        <button className="btn btn-primary w-full mb-[11px] text-white">SignIn</button>
                        <p>New to Doctors Portal? <span className='text-primary font-semibold'><Link to='/signup'>Please SignUp</Link></span></p>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignIn;