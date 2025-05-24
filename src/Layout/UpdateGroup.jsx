import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateGroup = () => {
    const update = useLoaderData();
    console.log(update)
    const handleUpdateGroup = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const newData = Object.fromEntries(formData.entries())
        console.log(newData)
        // put data
        fetch(`https://assignment-server-10-lovat.vercel.app/group/id/${update._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newData)
        }
        )
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'center',
                        icon: "success",
                        title: "Updated group successfully",
                        showConfirmButton: false,
                        timer: 2000
                    });
                    form.reset()
                }
            })
    }
    return (
        <div>
            <div className='max-w-5xl mx-auto px-24 py-5 bg-gradient-to-b from-blue-400 to-gray-300 rounded-2xl shadow-2xl my-5'>
                <div className=' px-12 py-5  text-center space-y-4'>
                    <h1 className='font-bold text-white text-3xl text-balance '>Update hobby group</h1>
                    <p className='text-md font-medium text-white text-balance'>Friendly hobby group meets weekly to share skills, laughs, and creativity</p>
                </div>
                <form onSubmit={handleUpdateGroup} className='md:px-4 py-2' >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label font-bold">Group Name
                            </label>
                            <input defaultValue={update.groupname} type="text" name='groupname' className="input w-full " placeholder="Enter Group Name" required />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                            <label className="label font-bold">Hobby Category</label>
                            <select name="Category" className="select w-full" required>
                                <option value="">Select Hobby Category</option>
                                <option value="Photography">🚴‍♀️ Cycling </option>
                                <option value="Video Gaming">🥾 Running</option>
                                <option value="Video Gaming">🌼 Gardening</option>
                                <option value="Fishing">🎨 Drawing & Painting</option>
                                <option value="Cooking">
                                    🍳 Cooking
                                </option>
                                <option value="Reading">📖 Reading
                                </option>
                                <option value="Writing">🎣 Fishing</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label font-bold">Meeting Location
                            </label>
                            <input defaultValue={update.location} type="text" name='location' className="input w-full " placeholder="Enter Meeting Location" required />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label font-bold">Max Members
                            </label>
                            <input defaultValue={update.members} type="text" name='members' className="input w-full " placeholder="Enter Max Members" required />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label font-bold">Start Date</label>
                            <input defaultValue={update.date} type="date" name='date' className="input w-full " placeholder="Enter Start Date" required />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label font-bold">Image URL
                            </label>
                            <input defaultValue={update.photoURL} type="text" name='photoURL' className="input w-full " placeholder="Enter Image URL" required />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label font-bold">User Name</label>
                            <input type="text" name='name' defaultValue={update.name} className="input w-full font-semibold bg-gray-200" placeholder="Enter User Name" required readOnly />
                        </fieldset>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                            <label className="label font-bold">User Email</label>
                            <input type="text" name='email' defaultValue={update.email} className="input w-full font-semibold bg-gray-200 " placeholder="Enter User Email" required readOnly />
                        </fieldset>
                    </div>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4 my-4">
                        <label className="label  font-bold">Description</label>
                        <input defaultValue={update.description} type="text" name='description' className="input w-full h-20" placeholder="Write your description here" required />
                    </fieldset>
                    <input type="submit" className='btn  bg-blue-500 text-white w-full font-bold mt-2 hover:rounded-2xl hover:bg-blue-700' value="Create group" />
                </form>
            </div>
        </div>
    );
};

export default UpdateGroup;