import SearchHeader from '../components/SearchHeader';
import Help from '../components/Help';
import Footer from '../components/Footer';

const Page45 = () => {
    return (
        <div className='w-full min-h-screen flex flex-col bg-gray-100 '>
            <main className="flex-grow w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl md:mx-auto px-2 sm:px-6 md:px-8 py-2 sm:py-6 md:py-10">
                <div className="flex flex-col shadow-lg md:shadow-2xl bg-[#4B164C] rounded-lg sm:rounded-xl md:rounded-3xl border border-gray-100 overflow-hidden">
                    <SearchHeader title='Help' variant='back' align='center' />
                    <Help />
                    <div className="bg-white p-6 sm:p-8 md:p-12 rounded-t-3xl min-h-[50vh]">
                        <div className="max-w-3xl mx-auto space-y-8">
                            <h3 className="text-xl sm:text-2xl font-['Aldrich'] text-[#4B164C] border-b border-pink-100 pb-2">Frequently Asked Questions</h3>

                            <div className="space-y-4">
                                {[1, 2, 3].map((i) => (
                                    <div key={i} className="p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-pink-200 transition-colors cursor-pointer">
                                        <p className="font-bold text-[#4B164C] font-['Aldrich'] mb-1">How do I change my profile settings?</p>
                                        <p className="text-sm text-gray-500 line-clamp-2">You can navigate to the Privacy & Settings page from the sidebar to modify your personal information and preferences.</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Footer joined={true} />
                </div>
            </main>
        </div>
    );
};

export default Page45;
