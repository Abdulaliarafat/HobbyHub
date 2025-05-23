import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import logo from '/25c50e104102623.Y3JvcCwyOTUyLDIzMDksNTU1LDA.png'
import { AuthContext } from '../Authentication/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const { newUser, setUser, userProfile } = use(AuthContext)
     const navigation=useNavigate()
     const [error,setError]=useState('')
    const handleRegisterFrom = (e) => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        // createUser
         const passwordRegExp=/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
            if(passwordRegExp.test(password)===false){
                setError('Password must be at least 6 characters long and include at least one uppercase and one lowercase letter.')
                return
            }
        newUser(email, password)
            .then(result => {
                const userRes = result.user;
                console.log(userRes.photoURL)
                userProfile({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...userRes, displayName: name, photoURL: photo });
                        Swal.fire({
                            position: 'center',
                            icon: "success",
                            title: "Registration successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigation('/')
                    })
                    .catch(error => {
                        console.log(error)

                    })
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    position: 'center',
                    icon: "error",
                    title: "Please registration first ?",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }
    return (
        <div>
            <div className="card bg-base-100 w-full max-w-xl mx-auto shrink-0 shadow-2xl my-6">
                <div className="card-body bg-gradient-to-b from-blue-400 to-gray-300">
                    <div className='flex justify-center items-center'>
                        <img className='w-10 rounded-full md:w-14' src={logo} alt="" />
                        <a className="text-xl font-bold text-white ml-2"> HobbyHub</a>
                    </div>
                    <h1 className="text-2xl font-bold text-center text-white">Register your account</h1>
                    <form onSubmit={handleRegisterFrom} className="form  space-y-4 px-10 py-2">
                        <label className="label font-bold text-lg text-white">Name</label>
                        <input type="text" name='name' className="input w-full" placeholder="Name" required />
                        {/* {error && <p className='text-red-500 font-sans'>{error}</p>} */}
                        <label className="label font-bold text-lg text-white">Photo URL</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Photo URL" required />
                        <label className="label font-bold text-lg text-white">Email</label>
                        <input type="email" name='email' className="input w-full" placeholder="Email" required />
                        <label className="label font-bold text-lg text-white">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="input w-full"
                            placeholder="Password"
                        pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                        title="Password must be at least 6 characters long and include at least one uppercase and one lowercase letter."
                        />
                        {error && <p className='font-medium text-md text-red-500'>{error}</p>}
                        <button type='submit' className="btn w-full mt-3 bg-gradient-to-t from-blue-700 to-blue-400 text-white hover:rounded-2xl">Register</button>
                        <p className='mt-3 font-semibold text-center text-lg'>Already have an account please   ? <Link className='font-bold text-red-500 hover:text-red-600 underline' to='/authLayout/login'>Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;