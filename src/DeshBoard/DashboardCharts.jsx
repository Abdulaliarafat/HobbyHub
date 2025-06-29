import React, { use, useEffect, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import axios from 'axios';
import { AuthContext } from '../Authentication/AuthProvider';
import CountUp from 'react-countup';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff8042', '#00C49F'];

const DashboardCharts = () => {
    const { user } = use(AuthContext)
    const [pieData, setPieData] = useState([]);
    const [lineData, setLineData] = useState([]);
    const [AllLengthData, setAllLengthData] = useState([]);
    const [AllLengthDataMy, setAllLengthDataMy] = useState([]);
    // Fetch both APIs
    useEffect(() => {
        axios.get('https://y-flame-eight-20.vercel.app/group/all')
            .then(res => {
                const data=res.data
                setAllLengthData(data)
                const transformed = data.map(item => ({
                    name: item.groupname,
                    value: parseInt(item.members),
                }));
                setPieData(transformed);
            });

        axios.get(`https://y-flame-eight-20.vercel.app/group/email/${user?.email}`)
            .then(res => {
             const data=res.data
             setAllLengthDataMy(data)
                const transformed = data.map(item => ({
                    date: item.date,
                    members: parseInt(item.members),
                }));
                setLineData(transformed);
            });
    }, []);

    return (
        <div>
          <div className=' flex justify-evenly my-3 gap-2'>
           <div className="p-4 rounded-xl shadow-md text-white bg-gradient-to-r from-blue-400  to-blue-500 md:w-60 lg:w-90 ">
             <h2 className="text-xl font-bold text-center">All group Arrived</h2>
            <p className="text-3xl mt-2 font-bold text-center text-yellow-400">
             <CountUp end={AllLengthData.length} duration={8}></CountUp>
            </p>
           </div>
           <div className="p-4 rounded-xl shadow-md text-white bg-gradient-to-r from-blue-400  to-blue-500 md:w-60 lg:w-90">
             <h2 className="text-xl font-bold text-center">My group Arrived</h2>
            <p className="text-3xl mt-2 font-bold text-center   text-yellow-400">
               <CountUp end={AllLengthDataMy.length}  duration={8}></CountUp>
            </p>
           </div>
        </div>
        {/* Chart */}
          <div className="grid md:grid-cols-2 gap-6 p-6">
            {/* Pie Chart */}
            <div className="bg-white rounded-xl shadow-md p-4 mx-auto">
                <h2 className="text-xl font-semibold mb-4 text-center">Group Members (Pie Chart)</h2>
                <PieChart width={300} height={300}>
                    <Pie
                        data={pieData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label
                    >
                        {pieData.map((_, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </div>
            {/* Line Chart */}
            <div className="bg-white rounded-xl shadow-md p-4 w-full max-w-full">
                <h2 className="text-xl font-semibold mb-4 text-center">Group Members Over Time</h2>
                <div className="w-full h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={lineData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="members" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
        </div>
       
    );
};

export default DashboardCharts;
