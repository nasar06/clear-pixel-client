import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import svg from '../../../img/bg.svg'
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../../Hooks/Token/useToken';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {loginUser, loginWithGoogle} = useContext(AuthContext)
    const [userEmail, setUserEmail] = useState('')
    const [token] = useToken(userEmail)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    if(token){
        navigate(from, {replace: true})
    }
    const handelLogin =(data) =>{
        loginUser(data.email, data.password)
        .then(result =>{
            setUserEmail(result.user.email)
            navigate(from, {replace: true})
        })
        .then(err => console.error(err))
    }

    //login with google
    const handelGoogleLogin =()=>{
        loginWithGoogle()
        .then(result =>{
            toast.success('successfully login')
            navigate(from, {replace: true})
            userData(result.user)
        })
        .then(err => console.log(err))
    }


    //post users
    const userData = (userInfo) =>{
        const user = {
            name : userInfo.displayName,
            email: userInfo.email,
            role: 'buyer'
        }
        fetch(`http://localhost:5000/users?email=${userInfo.email}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log('login then user exist---------', data)
            if(data?.acknowledged){
                toast.success('User Inserted Successfully')
                setUserEmail(userInfo.email)
            }
            
        })
    }
   

    return (
        <div className='flex items-center justify-center'>
            <div className='hidden md:block'>
                <img style={{width: '800px'}} src={svg}></img>
            </div>
            <div className='w-96 p-7'>
                <h2 className='text-2xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handelLogin)}>
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
                    <input className='btn bg-primary text-white font-bold w-full' value="Login" type="submit" />
                    <div>
                        {/* {loginError && <p className='text-red-600'>{loginError}</p>} */}
                    </div>
                </form>
                <p>New to Clear Pixel <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handelGoogleLogin} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;