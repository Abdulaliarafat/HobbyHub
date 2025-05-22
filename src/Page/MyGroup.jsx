import React from 'react';
import { useLoaderData } from 'react-router';

const MyGroup = () => {
    const myData = useLoaderData()
    console.log(myData)
    return (
        <div>
            <div className="overflow-x-auto my-10">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Group no</th>
                            <th>Place photo</th>
                            <th>Discription</th>
                            <th>Category</th>
                            <th>Member</th>
                            <th>Join</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>

                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="">
                                        <div className=" ">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Name : Hart Hagerty</div>
                                        <div className="text-sm opacity-50">Location:United States</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                Zemlak, Daniel and Leannon
                                <br />
                                <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                            </td>
                            <td>Purple</td>
                            <td>20</td>
                            <td>12/3/2025</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>

                    </tbody>


                </table>
            </div>
        </div>
    );
};

export default MyGroup;