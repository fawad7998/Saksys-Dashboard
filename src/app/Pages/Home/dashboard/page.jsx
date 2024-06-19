"use client"
import { useState } from 'react';
import {
    HomeIcon,
    ChartBarIcon,
    CurrencyDollarIcon,
    UserGroupIcon,
} from '@heroicons/react/24/solid';

function Dashboard() {
    const [stats, setStats] = useState({
        todayViews: 22520,
        earnings: 22520,
        users: 22520,
        enquiry: 22520,
    });

    return (
        <div className=" pb-11">
            <div className="flex justify-between mb-8">
                <div className='flex items-center justify-center'>

                    <HomeIcon className="h-5 w-5 text-gray-600 mr-2" />
                    <h1 className="text-xl ">Home/Dashboard</h1>
                </div>
                <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                    ← Back
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="flex items-center justify-center bg-blue-500 rounded-lg p-4">
                    <div className="flex items-center justify-center mb-2">
                        <ChartBarIcon className='text-white h-[20px] ' />
                    </div>
                    <h2 className="text-white text-2xl">{stats.todayViews}</h2>
                    <p className="text-white">Today Views</p>
                </div>

                <div className="bg-green-500 rounded-lg p-4">
                    <div className="flex items-center justify-center mb-2">
                        <CurrencyDollarIcon />
                    </div>
                    <h2 className="text-white text-2xl">{stats.earnings}</h2>
                    <p className="text-white">Earnings</p>
                </div>

                <div className="bg-yellow-500 rounded-lg p-4">
                    <div className="flex items-center justify-center mb-2">
                        <UserGroupIcon />
                    </div>
                    <h2 className="text-white text-2xl">{stats.users}</h2>
                    <p className="text-white">Users</p>
                </div>

                <div className="bg-red-500 rounded-lg p-4">
                    <div className="flex items-center justify-center mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                    </div>
                    <h2 className="text-white text-2xl">{stats.enquiry}</h2>
                    <p className="text-white">Enquiry</p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;



