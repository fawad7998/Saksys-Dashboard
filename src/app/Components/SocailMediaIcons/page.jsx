"use client"
import { useState } from 'react';

const Icons = () => {
    const [notificationsCount, setNotificationsCount] = useState(5);
    const [emailsCount, setEmailsCount] = useState(5);
    const [tagsCount, setTagsCount] = useState(5);

    return (
        <div>
            <div className="flex gap-4">
                <span className="relative">
                    <span className="text-1xl text-gray-600">💬</span>
                    {notificationsCount > 0 && (
                        <span className="absolute top-[-5px] right-[-5px] bg-green-500 text-white rounded-full px-2 py-1 text-[7px]">{notificationsCount}</span>
                    )}
                </span>
                <span className="relative">
                    <span className="text-1xl text-gray-600">✉️</span>
                    {emailsCount > 0 && (
                        <span className="absolute top-[-5px] right-[-5px] bg-green-500 text-white rounded-full px-2 py-1 text-[7px]">{emailsCount}</span>
                    )}
                </span>
                <span className="relative">
                    <span className="text-1xl text-gray-600">🏷️</span>
                    {tagsCount > 0 && (
                        <span className="absolute top-[-5px] right-[-5px] bg-green-500 text-white rounded-full px-2 py-1 text-[7px]">{tagsCount}</span>
                    )}
                </span>
            </div>
        </div>
    );
};

export default Icons;