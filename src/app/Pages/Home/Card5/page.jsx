"use client";
import Image from "next/image";
import { useState } from "react";

const Card5 = ({ name }) => {
    const [selectedItems, setSelectedItems] = useState([]);

    const handleCheckboxChange = (event, hotel) => {
        const isChecked = event.target.checked;

        if (isChecked) {
            setSelectedItems([...selectedItems, hotel]);
        } else {
            setSelectedItems(selectedItems.filter((item) => item !== hotel));
        }
    };

    const hotels = [
        {
            img: "/link.png",
            name: "Linked In",
            desc: "Illunois, United States",
            share: "15k",
            like: "18k",
            members: "263",
        },
        {
            img: "/twi.png",
            name: "Twitter",
            desc: "Illunois, United States",
            share: "15k",
            like: "18k",
            members: "263",
        },
        {
            img: "/fb.png",
            name: "Facebook",
            desc: "Illunois, United States",
            share: "15k",
            like: "18k",
            members: "263",
        },
        {
            img: "/goo.png",
            name: "Google Plus",
            desc: "Illunois, United States",
            share: "15k",
            like: "18k",
            members: "263",
        },
        {
            img: "/you.png",
            name: "Youtube",
            desc: "Illunois, United States",
            share: "15k",
            like: "18k",
            members: "263",
        },
        {
            img: "/wat.png",
            name: "WhatsApp",
            desc: "Illunois, United States",
            share: "15k",
            like: "18k",
            members: "263",
        },
        {
            img: "/web.png",
            name: "VK",
            desc: "Illunois, United States",
            share: "15k",
            like: "18k",
            members: "263",
        },
        {
            img: "/twi.png",
            name: "Twitter",
            desc: "Illunois, United States",
            share: "15k",
            like: "18k",
            members: "263",
        },

    ];

    return (
        <div className="rounded-lg shadow-md bg-white p-16" style={{ width: '650px' }}>
            <h2 className="text-xl font-bold mb-4">Socail Media</h2>
            <p className="text-gray-600 mb-6">
                Airtport Hotels The Right Way To Start A Short Break Holiday
            </p>

            <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Media
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Share
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Likes
                            </th>
                            <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Members
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {hotels.map((hotel) => (
                            <tr key={hotel.name}>
                                <td className="px-4 py-2 whitespace-nowrap">
                                    <Image
                                        src={hotel.img}
                                        alt={hotel.name}
                                        className="rounded-full"
                                        width={40}
                                        height={40}
                                    />
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap flex flex-col">
                                    <div className="font-bold">

                                        {hotel.name}
                                    </div>
                                    <div className="text-sm">

                                        {hotel.desc}
                                    </div>
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap">
                                    <div className="font-medium text-gray-900">
                                        {hotel.share}
                                    </div>
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap">
                                    <div className="text-gray-900">{hotel.like}</div>
                                </td>
                                <td className="px-4 py-2 whitespace-nowrap">
                                    <span
                                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-100 text-green-800"
                                    >
                                        {hotel.members}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Card5;
