import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import svg from '../../../img/bg.svg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const { signUp, UpdateProfileName } = useContext(AuthContext)
    const navigate = useNavigate()

    const handelSignUp = (data) => {
        console.log(data.seller)

        signUp(data.email, data.password)
            .then(result => {
                //update user
                const info = {
                    displayName: data.name
                }
                UpdateProfileName(info)
                
                navigate('/')
            })
            .then(err => console.error(err))

    }

    return (
        <div className='flex items-center justify-center'>
            <div className='hidden md:block'>
                <img style={{ width: '800px' }} src={svg}></img>
            </div>
            <div className='w-96 p-7'>
                <h2 className='text-2xl font-bold text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handelSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name", {
                                required: "Name is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {/* {errors.password && <p className='text-red-600'>{errors.password?.message}</p>} */}
                    </div>
                    <div>
                        <div className="form-control">
                            <label className="label cursor-pointer justify-start">
                                <input
                                {...register("seller")}
                                type="checkbox" className="checkbox checkbox-primary" />
                                <span className="label-text font-bold ml-3">Are You Seller??</span>
                            </label>
                        </div>
                    </div>
                    <input className='btn bg-primary text-white font-bold w-full' value="Sign Up" type="submit" />
                    <div>
                        {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                    </div>
                </form>
                <p>You have an account <Link className='text-secondary' to="/login">Please login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;