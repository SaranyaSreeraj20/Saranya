import React from 'react'
import { IoMdClose } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const menu = [
    { name: "Dating", path: "/Page11" },
    { name: "Matrimony", path: "/" },
    { name: "E commerce", path: "/" },
    { name: "Study Abroad", path: "/" },
    { name: "Job Portal", path: "/" },
];

const CategoryItems = ({ onclose }) => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
        onclose?.(); // Close menu if onclose function is provided
    };

    return (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-white backdrop-blur-sm p-4'>
            {/* card */}
            <div className='w-[250px] md:w-[350px] min-h-[400px] flex flex-col rounded-xl bg-[#6B4468]/95 backdrop-blur-lg text-white shadow-2xl overflow-hidden relative pb-8'>

                {/* close button */}
                <div className='p-3 flex justify-start'>
                    <button
                        onClick={onclose}
                        className='flex items-center justify-center w-6 h-6 rounded-full border border-white/40 text-white hover:bg-white/10 transition-colors focus:outline-none'
                    >
                        <IoMdClose size={14} />
                    </button>
                </div>

                {/* menu items */}
                <div className='px-6 space-y-1'>
                    {menu.map((item, index) => (
                        <div key={item.name}>
                            <div
                                onClick={() => handleNavigation(item.path)}
                                style={{ fontFamily: "aldrich" }}
                                className={`py-5 text-center text-lg md:text-xl cursor-pointer transition-all duration-200
                  ${index === 0 ? 'bg-white/20 rounded-xl font-semibold shadow-lg' : 'hover:bg-white/10 rounded-xl'}
                `}
                            >
                                {item.name}
                            </div>

                            {/* Divider */}
                            <div className="mx-auto w-[90%] h-px bg-white/30 my-1 mb-5" />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default CategoryItems    