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
            <div className='flex justify-evenly'>

                <section className='flex'>
                    <div className='h-[80px] w-[80px] flex items-center justify-center rounded bg-blue-400 '>
                        <ChartBarIcon className='size-12 text-white ' />
                    </div>
                    <div className='w-[200px] bg-white flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                            </svg>
                            Today views

                        </div>
                        <div className='font-bold'>
                            22520
                        </div>
                    </div>
                </section>
                <section className='flex'>
                    <div className='h-[80px] w-[80px] flex items-center justify-center rounded bg-green-500 '>
                        <CurrencyDollarIcon className='size-12 text-white ' />
                    </div>
                    <div className='w-[200px] bg-white flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                            </svg>
                            Earnings

                        </div>
                        <div className='font-bold'>
                            22520
                        </div>
                    </div>
                </section>
                <section className='flex'>
                    <div className='h-[80px] w-[80px] flex items-center justify-center rounded bg-blue-900 '>
                        <UserGroupIcon className='size-12 text-white ' />
                    </div>
                    <div className='w-[200px] bg-white flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                            </svg>
                            Users

                        </div>
                        <div className='font-bold'>
                            22520
                        </div>
                    </div>
                </section>
                <section className='flex'>
                    <div className='h-[80px] w-[80px] flex items-center justify-center rounded bg-red-500 '>
                        {/* <ChartBarIcon className='size-12 text-white ' /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-9 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                        </svg>

                    </div>
                    <div className='w-[200px] bg-white flex flex-col items-center justify-center'>
                        <div className='flex items-center justify-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
                            </svg>
                            Enquiry

                        </div>
                        <div className='font-bold'>
                            22520
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Dashboard;

