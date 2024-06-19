import React from 'react';

const Card1 = () => {
    const campaigns = [
        {
            country: 'Australia',
            name: 'Marsha Hogan',
            Phone: '+01 3214 6522',
            email: 'chadengle@dummy.com',
            listing: '02',
            img: "/1.png",
            enquiry: "12",
            booking: "24",
            Review: "36",
        },
        {
            country: 'Australia',
            name: 'Marsha Hogan',
            Phone: '+01 3214 6522',
            email: 'chadengle@dummy.com',
            listing: '02',
            img: "/2.png",
            enquiry: "12",
            booking: "24",
            Review: "36",
        },
        {

            country: 'Australia',
            name: 'Marsha Hogan',
            Phone: '+01 3214 6522-8.43%',
            email: 'chadengle@dummy.com',
            listing: '02',
            img: "/3.png",
            enquiry: "12",
            booking: "24",
            Review: "36",
        },
        {
            country: 'Australia',
            name: 'Marsha Hogan',
            Phone: '+01 3214 6522',
            email: 'chadengle@dummy.com',
            listing: '02',
            img: "/4.png",
            enquiry: "12",
            booking: "24",
            Review: "36",
        },
        {
            country: 'Australia',
            name: 'Marsha Hogan',
            Phone: '+01 3214 6522',
            email: 'chadengle@dummy.com',
            listing: '02',
            img: "/5.png",
            enquiry: "12",
            booking: "24",
            Review: "36",
        },
    ];

    return (
        <div className="bg-white rounded-md shadow-md p-16">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">User Details</h2>
                <div className="text-gray-500">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                    </svg>
                </div>
            </div>
            <p className="text-gray-600 text-sm mb-4">
                Airtport Hotels The Right Way To Start A Short Break Holiday
            </p>
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2 border-b text-left text-gray-600 font-bold">
                            User
                        </th>
                        <th className="px-4 py-2 border-b text-left text-gray-600 font-bold">
                            name
                        </th>
                        <th className="px-4 py-2 border-b text-left text-gray-600 font-bold">
                            Phone
                        </th>
                        <th className="px-4 py-2 border-b text-left text-gray-600 font-bold">
                            Email
                        </th>
                        <th className="px-4 py-2 border-b text-left text-gray-600 font-bold">
                            Country
                        </th>
                        <th className="px-4 py-2 border-b text-left text-gray-600 font-bold">
                            Lisitng
                        </th>
                        <th className="px-4 py-2 border-b text-left text-gray-600 font-bold">
                            Enquiry
                        </th>
                        <th className="px-4 py-2 border-b text-left text-gray-600 font-bold">
                            Booking
                        </th>
                        <th className="px-4 py-2 border-b text-left text-gray-600 font-bold">
                            Reviews
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map((campaign) => (
                        <tr key={campaign.country}>
                            <td className="px-4 py-2 border-b"><img src={campaign.img} className='rounded-full w-9' /></td>
                            <td className="px-4 py-2 border-b">{campaign.name}</td>
                            <td className="px-4 py-2 border-b">
                                <span
                                    className=''
                                >
                                    {campaign.Phone}
                                </span>
                            </td>
                            <td className="px-4 py-2 border-b">{campaign.email}</td>
                            <td className="px-4 py-2 border-b">
                                <span
                                    className='text-black'
                                >
                                    {campaign.country}
                                </span>
                            </td>
                            <td className="px-4 py-2 border-b">
                                <span
                                    className='text-white rounded bg-blue-600 p-2'
                                >
                                    {campaign.listing}
                                </span>
                            </td>
                            <td className="px-4 py-2 border-b">
                                <span
                                    className='text-white rounded bg-red-500 p-2'
                                >
                                    {campaign.enquiry}
                                </span>
                            </td>
                            <td className="px-4 py-2 border-b">
                                <span
                                    className='text-white rounded bg-green-600 p-2'
                                >
                                    {campaign.booking}
                                </span>
                            </td>
                            <td className="px-4 py-2 border-b">
                                <span
                                    className='text-white rounded bg-blue-400 p-2'
                                >
                                    {campaign.Review}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Card1;
