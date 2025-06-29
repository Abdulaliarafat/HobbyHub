import { Link, useLoaderData } from 'react-router';;

const DashMyGroup = () => {
     const mainMyData = useLoaderData()
     console.log(mainMyData)
             
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
                               </tr>
                           </thead>
                           <tbody>
                               {mainMyData.map((data) => (
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
                                   </tr>
                               ))}
                           </tbody>
                       </table>
                   </div>
               </div>
    );
};

export default DashMyGroup;