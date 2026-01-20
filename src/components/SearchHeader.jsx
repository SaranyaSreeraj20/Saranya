import React from "react";
import { ChevronLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchHeader = ({ title = "Sent", variant = "search", align = "center" }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#4B164C] pt-12 pb-8 sm:pt-14 sm:pb-9 md:pt-16 md:pb-10 lg:pt-20 lg:pb-12 relative transition-colors duration-300">
            <div className={`px-4 sm:px-6 md:px-8 lg:px-10 flex items-center relative w-full md:max-w-3xl lg:max-w-4xl xl:max-w-5xl md:mx-auto ${align === 'left' ? 'justify-start gap-4 sm:gap-5' : 'justify-center'
                }`}>
                {variant === "back" ? (
                    <button
                        onClick={() => navigate(-1)}
                        className={`${align === 'center' ? 'absolute left-4 sm:left-6 md:left-8 lg:left-10' : ''} cursor-pointer flex items-center justify-center w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] lg:w-[48px] lg:h-[48px] rounded-full bg-transparent border border-white/50 hover:bg-white/10 transition-all`}
                    >
                        <ChevronLeft size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" color="#fff" strokeWidth={1.5} />
                    </button>
                ) : (
                    <div className={`${align === 'center' ? 'absolute left-4 sm:left-6 md:left-8 lg:left-10' : ''} cursor-pointer flex items-center justify-center w-[36px] h-[36px] sm:w-[40px] sm:h-[40px] md:w-[44px] md:h-[44px] lg:w-[48px] lg:h-[48px] rounded-full bg-[#D68FC3] border-2 border-white/60`}>
                        <Search size={18} className="sm:w-5 sm:h-5 md:w-6 md:h-6" color="#fff" strokeWidth={2.0} />
                    </div>
                )}

                <h2 className={`${align === 'left' ? 'text-left' : 'w-full text-center'} text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-white font-['Aldrich'] tracking-wide`}>
                    {title}
                </h2>
            </div>
        </div>
    );
};

export default SearchHeader;
