import SearchHeader from '../components/SearchHeader';
import Help from '../components/Help';
import Footer from '../components/Footer';

const Page47 = () => {
    return (
        <div className='w-full min-h-screen flex flex-col bg-gray-100 '>
            <main className="flex-grow w-full md:max-w-4xl lg:max-w-5xl xl:max-w-6xl md:mx-auto px-2 sm:px-6 md:px-8 py-2 sm:py-6 md:py-10">
                <div className="flex flex-col shadow-lg md:shadow-2xl bg-[#4B164C] rounded-lg sm:rounded-xl md:rounded-3xl border border-gray-100 overflow-hidden">
                    <SearchHeader title='Privacy Policy' variant='back' align='center' />
                    <Help />
                    <div className="bg-white p-6 sm:p-10 md:p-16 rounded-t-3xl min-h-[50vh] flex flex-col items-start justify-start text-left">
                        <h3 className="text-xl sm:text-2xl font-['Aldrich'] text-[#4B164C] border-b border-pink-100 pb-2 mb-6 w-full">Privacy Statement</h3>
                        <div className="text-gray-500 text-sm sm:text-base md:text-lg max-w-4xl leading-loose font-['Aldrich'] text-justify space-y-6">
                            <p>
                                BuddyApp is an online matrimonial portal endeavouring constantly to provide you with dating and matrimonial services. This privacy statement is common to all the matrimonial Website/apps operated under BuddyApp.
                            </p>
                            <p>
                                Since we are strongly committed to your right to privacy, we have drawn out a privacy statement with regard to the information we collect from you. You acknowledge that you are disclosing information voluntarily.
                            </p>
                            <p>
                                By accessing /using the website/apps and/or by providing your information, you consent to the collection, use, share, store and process the info you disclose on the website/apps in accordance with this Privacy Policy.
                            </p>
                            <p>
                                If you do not agree for use of your information, please do not use or access this website/apps.
                            </p>
                        </div>
                        {/* <button className="mt-10 px-10 py-4 bg-[#4B164C] text-white rounded-full font-['Aldrich'] text-lg hover:bg-[#6A2E5E] transition-all transform hover:scale-105 shadow-lg active:scale-95 cursor-pointer">
                                                    Send us a message
                        </button> */}


                    </div>
                    <Footer joined={true} />
                </div>
            </main>
        </div>
    );
};

export default Page47;

