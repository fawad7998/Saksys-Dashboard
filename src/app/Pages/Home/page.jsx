import React from 'react';
import Dashboard from './dashboard/page';
import Card1 from './Card1/page';
import Card2 from './Card2/page';
import Card3 from './card3/page';

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
                <div className='flex pt-10'>
                    <Card3 />
                    <Card3 />
                </div>
            </div>
        </>
    );
}

export default Main;