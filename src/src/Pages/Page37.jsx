import React, { useState } from 'react';
import ProfileSidebar50 from '../components/ProfileSidebar50';
import Page12 from './Page12';

const Page37 = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (

        <div className="relative min-h-screen overflow-y-auto">
            {/* Background Layer (Page12) */}
            <div className={`absolute inset-0 z-0 ${isSidebarOpen ? 'blur-sm pointer-events-none' : ''}`}>
                <Page12 />
            </div>

            {/* Foreground Layer (Page37 content) */}
            <div className={`relative z-10 w-full min-h-screen flex flex-col ${isSidebarOpen ? 'bg-black/40' : 'pointer-events-none'}`}>

                <main className="flex-grow w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto px-4 sm:px-6 md:px-8 pt-4 sm:pt-5 md:pt-6 pb-6 sm:pb-7 md:pb-8">
                    {/* Button to reopen sidebar for testing/demo purposes if needed, or conditional rendering */}
                    {/* {!isSidebarOpen && (
                        <button
                            onClick={() => setIsSidebarOpen(true)}
                            className="bg-[#4B164C] text-white px-4 py-2 rounded-lg pointer-events-auto"
                        >
                            
                        </button>
                    )} */}

                    <ProfileSidebar50
                        open={isSidebarOpen}
                        onClose={() => setIsSidebarOpen(false)}
                    />
                </main>

            </div>
        </div>
    );
};
export default Page37;