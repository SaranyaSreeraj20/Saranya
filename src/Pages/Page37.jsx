import React, { useState } from 'react';
import ProfileSidebar50 from '../components/ProfileSidebar50';
import SearchHeader from '../components/SearchHeader';


const Page37 = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <div className='w-full min-h-screen flex flex-col bg-gray-100'>
            <SearchHeader title='Profile' />
            <main className="flex-grow w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto px-4 sm:px-6 md:px-8 pt-4 sm:pt-5 md:pt-6 pb-6 sm:pb-7 md:pb-8">
                {/* Button to reopen sidebar for testing/demo purposes if needed, or conditional rendering */}
                {!isSidebarOpen && (
                    <button
                        onClick={() => setIsSidebarOpen(true)}
                        className="bg-[#4B164C] text-white px-4 py-2 rounded-lg"
                    >
                        Open Profile Menu
                    </button>
                )}

                <ProfileSidebar50
                    open={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                />
            </main>

        </div>
    );
};
export default Page37;