import { useState } from 'react';
import CategoryItems from '../components/CategoryItems';
import Page12 from './Page12';

const Page38 = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(true);

    return (
        <div className="relative min-h-screen overflow-y-auto">
            {/* Background Layer (Page12) */}
            <div className={`absolute inset-0 z-0 ${isMenuOpen ? 'blur-sm pointer-events-none' : ''}`}>
                <Page12 />
            </div>

            {/* Reopen Button (visible when menu is closed) */}
            {/* {!isMenuOpen && (
                <div className="absolute top-4 right-4 z-20">
                    <button
                        onClick={() => setIsMenuOpen(true)}
                        className="bg-[#4B164C] text-white px-4 py-2 rounded-lg shadow-lg hover:bg-[#5a1a5b] transition"
                    >
                    
                    </button>
                </div>
            )} */}

            {/* Foreground Layer (CategoryItems) */}
            {isMenuOpen && (
                <div className="relative z-10 w-full min-h-screen">
                    <CategoryItems onclose={() => setIsMenuOpen(false)} />
                </div>
            )}
        </div>
    );
};
export default Page38;