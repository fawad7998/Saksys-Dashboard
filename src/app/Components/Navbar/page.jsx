"use client"
import Link from 'next/link';
import Image from 'next/image';
import Icons from '../SocailMediaIcons/page';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
            <div className="px-3 py-2 flex space-x-0 justify-between items-center">
                <Link href="/" className="font-bold text-xl">
                    <Image
                        src="/logo.png"
                        width={150}
                        height={100}
                        alt="Logo"
                    />
                </Link>
                <div className='flex'>
                    <div className="relative">
                        <input type="text" placeholder="Search..." className="rounded-3xl py-2 pl-[20px] w-[600px] border text-left focus:outline-none focus:border-blue-500" />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400 hover:cursor-pointer " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </span>
                    </div>
                </div>
                <Icons />
                <div className="hidden md:flex items-center">
                    <div className="ml-4 relative">
                        <button className="px-4 py-2 rounded-full flex flex-row items-center justify-center text-gray-700 font-bold">
                            <Image
                                src="/loginpic.png"
                                width={30}
                                height={10}
                                className='rounded-full mr-2 '
                                alt="User"
                            />
                            <span className="">My Account</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
