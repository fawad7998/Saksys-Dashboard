"use client"
import { useState } from "react";

const Card3 = () => {
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
            name: "Taaj Club House",
            location: "Illunois, United States",
            image: "/1.jpeg", // Replace with actual image path
            date: "12 may",
            city: "Hawaii",
            enquiry: 15,
        },
        {
            name: "Grand Hotel",
            location: "Rio, Brazil",
            image: "/2.jpeg", // Replace with actual image path
            date: "07 aug",
            city: "Hawaii",
            enquiry: 5,
        },
        {
            name: "Grand Pales",
            location: "Chennai, India",
            image: "/3.jpg", // Replace with actual image path
            date: "18 jun",
            city: "Hawaii",
            enquiry: 35,
        },
        {
            name: "Lake Palace Hotel",
            location: "Beijing, China",
            image: "/4.jpeg", // Replace with actual image path
            date: "09 apr",
            city: "Hawaii",
            enquiry: 24,
        },
        {
            name: "First Class Hotel",
            location: "Berlin, Germany",
            image: "/5.jpg", // Replace with actual image path
            date: "21 jun",
            city: "Hawaii",
            enquiry: 18,
        },
    ];

    return (
        <div className="rounded-lg shadow-md bg-white p-4 w-[650px]">
            <h2 className="text-xl font-bold mb-4">Listing Enquiry</h2>
            <p className="text-gray-600 mb-6">
                Airtport Hotels The Right Way To Start A Short Break Holiday
            </p>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Select
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Listing
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                City
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Enquiry
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {hotels.map((hotel) => (
                            <tr key={hotel.name}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <input
                                        type="checkbox"
                                        className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500"
                                        onChange={(event) =>
                                            handleCheckboxChange(event, hotel)
                                        }
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <img
                                        src={hotel.image}
                                        alt={hotel.name}
                                        className="w-10 h-10 rounded-full"
                                    />
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="font-medium text-gray-900">
                                        {hotel.name}
                                    </div>
                                    <div className="text-gray-500 text-sm">
                                        {hotel.location}
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-gray-900">{hotel.date}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-gray-900">{hotel.city}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-green-100 text-green-800`}
                                    >
                                        {hotel.enquiry}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Add a button for selected hotels, like "View selected" */}
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                View Selected
            </button>
        </div>
    );
};

export default Card3;