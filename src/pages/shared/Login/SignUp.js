import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import svg from '../../../img/bg.svg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../../Hooks/Token/useToken';


const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [role, setRole] = useState(false)
    const [userEmail, setUserEmail] = useState('')
    const [token] = useToken(userEmail)
    const { signUp, UpdateProfileName, loginWithGoogle } = useContext(AuthContext)
    const navigate = useNavigate()


    if (token) {
        navigate('/')
    }


    const handelSignUp = async (data) => {

        try {
            const user = await signUp(data.email, data.password);

            
            //update name
            const info = { displayName: data.name }
            await UpdateProfileName(info);

            //post user
            userData(user.user)
            

        } catch (error) {
            console.log(error)
        }



    }



    //login with google
    const handelGoogleLogin = async () => {
        try {
            const user = await loginWithGoogle()
            toast.success('successfully login')
            console.log('login user-------------/',user)
            userData(user.user)

        } catch (error) {
            toast.error(error.message)
        }


    }

    // post users collection
    const userData = (userInfo) => {
        const user = {
            name: userInfo.displayName,
            email: userInfo.email,
            role: role ? 'seller' : 'buyer'
        }
        fetch(`http://localhost:5000/users?email=${userInfo.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setUserEmail(userInfo.email)

                if (data.acknowledged) {
                    toast.success('User Inserted Successfully')
                    

                }

            })
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
                                    {...register("role")}
                                    onChange={() => setRole(!role)}
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
                <button onClick={handelGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;