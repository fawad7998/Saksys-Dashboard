"use client"
import { useState } from 'react';

function Card4() {
    const [activities, setActivities] = useState([
        {
            date: '12 may, 2017',
            title: 'Arrival and Evening Dhow Cruise',
            description:
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
        },
        {
            date: '08 Jun, 2017',
            title: 'City Tour and Evening Free',
            description:
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
        },
        {
            date: '27 July, 2017',
            title: 'Desert Safari with Dinner',
            description:
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
        },
        {
            date: '14 Aug, 2017',
            title: 'Day at leisure',
            description:
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
        },
        {
            date: '24 Sep, 2017',
            title: 'Departure',
            description:
                'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.',
        },
    ]);

    return (
        <div className="bg-white rounded-lg shadow-md p-16 pb-10 w-[650px]">
            <div className="flex justify-between items-center mb-4 ">
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Latest Activity</h2>
                    <p className="text-gray-600 mb-6">
                        Airtport Hotels The Right Way To Start A Short Break Holiday
                    </p>
                </div>
                <div className="text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 6.253v13.5M19.809 12.498l-6.37-3.25M4.5 12.498l6.37-3.25"
                        />
                    </svg>
                </div>
            </div>
            {activities.map((activity, index) => (
                <div key={index} className="mb-4 flex items-start justify-center gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 text-white bg-blue-400 rounded-full w-24 h-12">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <div>
                        <h3 className="text-lg font-bold text-gray-800 flex gap-3"><p className="text-gray-500">{activity.date}</p>  {activity.title}</h3>
                        <p className="text-gray-600 text-sm">{activity.description}</p>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default Card4;