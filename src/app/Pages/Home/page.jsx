import React from 'react';
import Dashboard from './dashboard/page';
import Card1 from './Card1/page';
import Card2 from './Card2/page';
import Card3 from './card3/page';
import Card4 from './Card4/page';
import Card5 from './Card5/page';
import Map from './Map/page';

function Main() {
    return (
        <>
            <div className='flex flex-col w-full h-full bg-gray-100 py-8 px-4'>
                <Dashboard />
                <div className='flex w-full items-center justify-evenly'>
                    <Card1 />
                    <Card1 />
                </div>
                <div className='pt-10'>
                    <Card2 />
                </div>
                <div className='flex justify-evenly pt-10'>
                    <Card3 name="Listing Enquiry" />
                    <Card3 name="Hotel Bookings" />
                </div>
                <div className='flex justify-evenly mt-10'>
                    <Card4 />
                    <Card5 />
                </div>
                <Map />
            </div>
        </>
    );
}

export default Main;