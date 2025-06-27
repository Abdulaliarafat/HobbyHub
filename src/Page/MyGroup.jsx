import React, {  useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import Loading from '../Components/Loading';
import Swal from 'sweetalert2';

const MyGroup = () => {
    const mainMyData = useLoaderData()
    const [myData,setMyData]=useState(mainMyData)
    console.log(myData)
    const handleDeleteGroup = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            console.log(result.isConfirmed)
            if (result.isConfirmed) {
                // DELETE..
                fetch(`http://localhost:3000/group/id/${id}`,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                   if(data.deletedCount){
                    const remainngGroup=myData.filter(data=>data._id !== id);
                    setMyData(remainngGroup)
                      Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
                   }
                })
               
            }
        });
    }
    return (
        <div className='max-w-5xl mx-auto px-2'>
            <div className="overflow-x-auto my-10 shadow-2xl p-4 rounded-xl">
                <table className="min-w-full table-auto md:table">
                    <thead className="hidden md:table-header-group">
                        <tr>
                            <th>Group no</th>
                            <th>Place photo</th>
                            <th>Category</th>
                            <th>Member</th>
                            <th>Join</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myData.map((data) => (
                            <tr
                                key={data?._id}
                                className="block md:table-row mb-4 border border-gray-200 rounded-md md:border-0 md:rounded-none"
                            >
                                <td className="block md:table-cell p-2">
                                    <span className="md:hidden font-bold">Group no: </span>
                                    {data?.groupname}
                                </td>
                                <td className="block md:table-cell p-2">
                                    <div className="flex flex-col md:flex-row md:items-center gap-3">
                                        <img
                                            className="rounded-xl w-full md:w-40 h-40 object-cover"
                                            src={data?.photoURL}
                                            alt="Place"
                                        />
                                        <div className="text-sm text-gray-700">
                                            <span className="font-bold">Location:</span> {data?.location}
                                        </div>
                                    </div>
                                </td>
                                <td className="block md:table-cell p-2">
                                    <span className="md:hidden font-bold">Category: </span>
                                    {data?.Category}
                                </td>
                                <td className="block md:table-cell p-2">
                                    <span className="md:hidden font-bold">Members: </span>
                                    {data?.members}
                                </td>
                                <td className="block md:table-cell p-2">
                                    <span className="md:hidden font-bold">Join Date: </span>
                                    {data?.date}
                                </td>
                                <td className="block md:table-cell p-2 space-y-2 md:space-y-1">
                                    <Link to={`/updateGroup/${data?._id}`} className="w-full md:w-auto bg-blue-800 hover:bg-blue-600 text-white btn btn-sm md:btn-md rounded-md">
                                        Update
                                    </Link>
                                    <button onClick={() => { handleDeleteGroup(data?._id) }} className="w-full md:w-auto bg-red-700 hover:bg-red-600 text-white btn btn-sm md:btn-md rounded-md px-5">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    );
};

export default MyGroup;