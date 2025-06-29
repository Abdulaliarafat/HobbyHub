import React, { use } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
import Loading from '../Components/Loading';


const CreateGroup = () => {
    const navigate=useNavigate()
    const {loading}=use(AuthContext)
    if(loading){
        return <Loading></Loading>
    }
    const { user } = use(AuthContext)
    const handleAddGroup = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const newFormData = Object.fromEntries(formData.entries())
        console.log(newFormData)
        // post data
        fetch('https://y-flame-eight-20.vercel.app/group', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFormData)
        })
            .then(res => res.json())
            .then(data => {
                console.log('after save database', data)
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: "success",
                        title: "Created group successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    form.reset()
                    navigate(`/myGroup/${user?.email}`)
                }
            })
    }
    return (
        <div>
            <div className='max-w-5xl md:mx-auto mx-1 px-5 md:px-24 py-5 bg-gradient-to-b from-blue-400 to-gray-300 rounded-2xl shadow-2xl my-5'>
                <div className=' px-12 py-5  text-center space-y-4'>
                    <h1 className='font-bold text-white text-3xl text-balance '>Make hobby group</h1>
                    <p className='text-md font-medium text-white text-balance'>Join HobbyHub to share, explore, and enjoy hobbies together daily</p>
                </div>
                <form onSubmit={handleAddGroup} className='md:px-4 py-2' >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 ">
                            <label className="label font-bold">Group Name
                            </label>
                            <input type="text" name='groupname' className="input w-full " placeholder="Enter Group Name" required />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label font-bold">Hobby Category</label>
                           <select name="Category" className="select w-full" required>
                               <option value="">Select Hobby Category</option>
                                <option value="Cycling">🚴‍♀️ Cycling</option>
                                <option value="Running">🥾 Running</option>
                                <option value="Gardening">🌼 Gardening</option>
                                <option value="Drawing and Painting">🎨 Drawing and Painting</option>
                                <option value="Cooking">🍳 Cooking</option>
                                <option value="Reading">📖 Reading</option>
                                <option value="Fishing">🎣 Fishing</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label font-bold">Meeting Location
                            </label>
                            <input type="text" name='location' className="input w-full " placeholder="Enter Meeting Location" required />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label font-bold">Max Members
                            </label>
                            <input type="text" name='members' className="input w-full " placeholder="Enter Max Members" required />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label font-bold">Start Date</label>
                            <input type="date" name='date' className="input w-full " placeholder="Enter Start Date" required />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label font-bold">Image URL
                            </label>
                            <input type="text" name='photoURL' className="input w-full " placeholder="Enter Image URL" required />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label font-bold">User Name</label>
                            <input type="text" name='name' defaultValue={user.displayName} className="input w-full font-semibold bg-gray-200" placeholder="Enter User Name" required readOnly />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label font-bold">User Email</label>
                            <input type="text" name='email' defaultValue={user.email} className="input w-full font-semibold bg-gray-200 " placeholder="Enter User Email" required readOnly />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-4">
                        <label className="label  font-bold">Description</label>
                        <input type="text" name='description' className="input w-full h-20" placeholder="Write your description here" required />
                    </fieldset>
                    <input type="submit" className='btn  bg-blue-500 text-white w-full font-bold mt-2 hover:rounded-2xl hover:bg-blue-700' value="Create group" />
                </form>
            </div>
        </div>
    );
};

export default CreateGroup;