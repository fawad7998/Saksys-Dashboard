// components/Sidebar.js
import Link from 'next/link';
import {
    ChevronRightIcon,
    HomeIcon,
    ClipboardDocumentListIcon,
    UserIcon,
    GiftIcon,
    BuildingOfficeIcon,
    EyeIcon,
    CalendarIcon,
    Squares2X2Icon,
    TagIcon,
    DocumentTextIcon,
    ChatBubbleOvalLeftEllipsisIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';

const Sidebar = () => {
    const items = [
        { name: 'Dashboard', icon: HomeIcon, href: '/dashboard' },
        { name: 'Listing', icon: ClipboardDocumentListIcon, href: '/listing' },
        { name: 'Users', icon: UserIcon, href: '/users' },
        { name: 'Tour Packages', icon: GiftIcon, href: '/tour-packages' },
        { name: 'Hotels', icon: BuildingOfficeIcon, href: '/hotels' },
        { name: 'Sight Seeings', icon: EyeIcon, href: '/sight-seeings' },
        { name: 'Events', icon: CalendarIcon, href: '/events' },
        { name: 'Ui-Kits', icon: Squares2X2Icon, href: '/ui-kits' },
        { name: 'Discounts', icon: TagIcon, href: '/discounts' },
        { name: 'Offers', icon: DocumentTextIcon, href: '/offers' },
        { name: 'Booking & Enquiry', icon: ChatBubbleOvalLeftEllipsisIcon, href: '/booking-enquiry' },
        { name: 'Blog & Articles', icon: HomeIcon, href: '/blog-articles' }, // Adjusted href
    ];

    return (
        <div className="flex h-full ">
            {/* Sidebar */}
            <div className="w-64 bg-gray-100 overflow-auto">
                <div className="fixed top-16 left-0 h-full">
                    <div className="flex flex-col items-center bg-white shadow-md rounded-lg p-4">
                        <div className="w-24 h-24 mb-4">
                            <Image
                                className="rounded-full"
                                src="/avatar.jpg" // Replace with your avatar image path
                                alt="Victoria Baker"
                                width={96}
                                height={96}
                            />
                        </div>
                        <h2 className="text-xl font-semibold text-gray-900">Victoria Baker</h2>
                        <p className="text-gray-500">Santa Ana, CA</p>
                    </div>
                    <div className="flex flex-col mt-4">
                        <ul>
                            {items.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        className="flex justify-between items-center py-2 px-4 border-b hover:bg-blue-300"

                                        href={item.href}>
                                        <div className="flex items-center transform transition-transform duration-300 hover:translate-x-2">
                                            <item.icon className="h-5 w-5 text-gray-600 mr-2" />
                                            {item.name}
                                        </div>
                                        <ChevronRightIcon className="h-5 w-5 text-gray-600" />

                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Sidebar;
