import SearchHeader from '../components/SearchHeader';
import Component52 from '../components/Component52';
import Footer from '../components/Footer';

const Page39 = () => {
    return (
        <div className='w-full min-h-screen flex flex-col bg-gray-100'>
            <main className="flex-grow w-full md:max-w-2xl lg:max-w-3xl xl:max-w-4xl md:mx-auto px-4 sm:px-6 md:px-8 pt-4 sm:pt-5 md:pt-6 pb-6 sm:pb-7 md:pb-8">
                <div className="flex flex-col shadow-lg md:shadow-2xl overflow-hidden border border-gray-100 bg-[#4B164C]  rounded-xl md:rounded-2xl lg:rounded-3xl">
                    <SearchHeader title='Settings' align='left' />
                    <Component52 />
                    <Footer joined={true} />
                </div>
            </main>
        </div>
    );
};
export default Page39;