import React from 'react';
import SearchHeader from '../components/SearchHeader';
import Footer from '../components/Footer';
import InviteFriendsContent from '../components/InviteFriendsContent';

const InvitePage = () => {
    return (
        <div className='w-full min-h-screen flex flex-col bg-gray-100 '>
            <main className="flex-grow w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl md:mx-auto px-2 sm:px-6 md:px-8 py-2 sm:py-6 md:py-10">
                <div className="flex flex-col shadow-lg md:shadow-2xl bg-[#4B164C] rounded-lg sm:rounded-xl md:rounded-3xl border border-gray-100 overflow-hidden">
                    <SearchHeader title='Invite Friends' variant='back' align='center' />
                    <div className="bg-white rounded-t-3xl min-h-[50vh] flex flex-col items-center">
                        <InviteFriendsContent />
                    </div>
                    <Footer joined={true} />
                </div>
            </main>
        </div>
    );
};

export default InvitePage;
