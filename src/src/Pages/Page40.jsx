import SearchHeader from '../components/SearchHeader';
import Component55 from '../components/Component55';
import Footer from '../components/Footer';

const Page40 = () => {
    return (
        <div className='w-full min-h-screen flex flex-col bg-gray-100 '>
            <main className="flex-grow w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto px-4 sm:px-6 md:px-8 pt-4 sm:pt-5 md:pt-6 pb-6 sm:pb-7 md:pb-8">
                <div className="flex flex-col shadow-lg md:shadow-2xl bg-[#4B164C] rounded-xl md:rounded-2xl lg:rounded-3xl border border-gray-100">
                    <SearchHeader title='Privacy & Settings' variant='back' align='center' />
                    {/* <main className="flex-grow w-full max-w-md mx-auto px-4 py-6"> */}
                    <Component55 />
                    <Footer joined={true} />
                </div>
            </main>

        </div>
    );
};

export default Page40;
