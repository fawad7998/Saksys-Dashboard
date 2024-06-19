import React from 'react';

const Card1 = () => {
    const campaigns = [
        {
            country: 'Australia',
            client: 'Beavis',
            changes: '2.43%',
            budget: '$1478',
            status: 'Active',
        },
        {
            country: 'Cuba',
            client: 'Felix',
            changes: '1.43%',
            budget: '$951',
            status: 'Closed',
        },
        {
            country: 'France',
            client: 'Cannibus',
            changes: '-8.43%',
            budget: '$632',
            status: 'Hold',
        },
        {
            country: 'Norway',
            client: 'Neosoft',
            changes: '7.43%',
            budget: '$325',
            status: 'Hold',
        },
        {
            country: 'South Africa',
            client: 'Hencework',
            changes: '9.43%',
            budget: '$258',
            status: 'Active',
        },
    ];

    return (
        <div className="bg-white rounded-md shadow-md p-16">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Country Campaigns</h2>
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
                            COUNTRY
                        </th>
                        <th className="px-4 py-2 border-b text-left text-gray-600 font-bold">
                            CLIENT
                        </th>
                        <th className="px-4 py-2 border-b text-left text-gray-600 font-bold">
                            CHANGES
                        </th>
                        <th className="px-4 py-2 border-b text-left text-gray-600 font-bold">
                            BUDGET
                        </th>
                        <th className="px-4 py-2 border-b text-left text-gray-600 font-bold">
                            STATUS
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map((campaign) => (
                        <tr key={campaign.country}>
                            <td className="px-4 py-2 border-b">{campaign.country}</td>
                            <td className="px-4 py-2 border-b">{campaign.client}</td>
                            <td className="px-4 py-2 border-b">
                                <span
                                    className={`font-bold ${campaign.changes.startsWith('-')
                                        ? 'text-red-500'
                                        : 'text-green-500'
                                        }`}
                                >
                                    {campaign.changes}
                                </span>
                            </td>
                            <td className="px-4 py-2 border-b">{campaign.budget}</td>
                            <td className="px-4 py-2 border-b">
                                <span
                                    className={`px-3 py-1 rounded-md font-bold text-white ${campaign.status === 'Active'
                                        ? 'bg-green-500'
                                        : campaign.status === 'Closed'
                                            ? 'bg-red-500'
                                            : 'bg-gray-500'
                                        }`}
                                >
                                    {campaign.status}
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
