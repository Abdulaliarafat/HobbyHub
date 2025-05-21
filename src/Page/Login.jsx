import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import logo from '/25c50e104102623.Y3JvcCwyOTUyLDIzMDksNTU1LDA.png'
import { AuthContext } from '../Authentication/AuthProvider';
import Swal from 'sweetalert2';


const Login = () => {
    const { loginUser, googleSignIn } = use(AuthContext)
    const [error,setError]=useState('')
    const navigation = useNavigate()
    const handleSignIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        // loginUser
        loginUser(email, password)
            .then(result => {
                const userLog = result.user;
                console.log(userLog)
                Swal.fire({
                    position: 'center',
                    icon: "success",
                    title: "Login successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigation('/')
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    position: 'center',
                    icon: "success",
                    title: "Enter valid email and password",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        if (passwordRegExp.test(password) === false) {
            setError('Password must be at least 6 characters long and include at least one uppercase and one lowercase letter.')
            return
        }
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result)
                Swal.fire({
                    position: 'center',
                    icon: "success",
                    title: "Login with email successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigation('/')
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    position: 'center',
                    icon: "success",
                    title: "Enter your valid email",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div>
            <div>
                <div className="card bg-base-100 w-full max-w-xl mx-auto my-5 shrink-0 shadow-2xl">
                    <div className="card-body bg-gradient-to-b from-blue-400 to-gray-300">
                        <div className='flex justify-center items-center'>
                            <img className='w-10 rounded-full md:w-14' src={logo} alt="" />
                            <a className="text-xl font-bold text-white ml-2"> HobbyHub</a>
                        </div>
                        <h1 className="text-2xl font-bold text-center text-white">Login your account</h1>
                        <form onSubmit={handleSignIn} className="form space-y-4 px-10 py-3">
                            <label className="label  font-bold text-lg text-white">Email</label>
                            <input type="email" name='email' className="input w-full" placeholder="Email" required />
                            <label className="label font-bold  text-white text-lg">Password</label>
                            <input
                                type="password"
                                name='password'
                                className="input w-full"
                                placeholder="Password"
                                pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                                title="Password must be at least 6 characters long and include at least one uppercase and one lowercase letter."
                            />
                             {error && <p className='font-medium text-md text-red-500'>{error}</p>}
                            <button type='submit' className="btn  w-full  bg-gradient-to-t from-blue-700 to-blue-400 text-white hover:rounded-2xl">Login</button>
                            <button onClick={handleGoogleSignIn} className="btn btn-ghost bg-white text-black border-[#e5e5e5] w-full hover:rounded-2xl">
                                <svg aria-label="Google logo" width="30" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                                Login with Google
                            </button>
                            <p className='mt-3 font-semibold text-center text-lg'>Dont’t have an account please  ? <Link className='font-bold text-red-500 underline hover:text-red-600' to='/authlayout/register'>Register</Link>
                            </p>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;