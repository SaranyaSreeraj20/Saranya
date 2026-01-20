import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiXCircle } from "react-icons/fi";
import { SlLogout } from "react-icons/sl";

const ProfileSidebar50 = ({
  open = true,
  onClose = () => { },
  user = {
    name: "Stone Stellar",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&h=200",
    status: "Online",
    isPrime: true,
  },
  menuItems = [
    { name: "My Profile", path: "/Page12" },
    { name: "Sent Request", path: "/Page27" },
    { name: "Viewed My Profile", path: "/Page16" },
    { name: "Accept Request", path: "/Page28" },
    { name: "Reject", path: "/Page29" },
    { name: "Revived", path: "/Page30" },
    { name: "Shortlisted By", path: "/Page33" },
    { name: "Shortlisted", path: "/Page31" },
    { name: "Contacted", path: "/Page32" },
    { name: "Message", path: "/Page34" },
    { name: "Groups", path: "/Page35" },
    { name: "Settings", path: "/Page39" },
  ],
}) => {
  const [activeItem, setActiveItem] = useState("My Profile");
  const navigate = useNavigate();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-white px-4 sm:px-6 md:px-8 pt-15 sm:pt-20 md:pt-24 lg:pt-5 overflow-y-auto">
      {/* POPUP CARD */}
      <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] rounded-2xl md:rounded-3xl bg-[#6B4468]/95 p-5 sm:p-6 md:p-7 lg:p-8 text-white shadow-xl">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-5 sm:right-5 md:top-6 md:right-6 text-white/80 hover:text-white cursor-pointer"
        >
          <FiXCircle size={20} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
        </button>

        {/* PROFILE HEADER */}
        <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6 md:mb-7 p-2 sm:p-3 rounded-lg">
          <div className="relative">
            <img
              src={user.avatar}
              alt="avatar"
              className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full border-2 border-pink-600"
            />
            <span className="absolute top-0 right-0 w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-green-500 rounded-full border-2 border-[#6A2E5E]" />
          </div>

          <div>
            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-pink-600">
              {user.name}
            </h3>

            {user.isPrime && (
              <p className="text-xs sm:text-sm md:text-base text-yellow-300">👑 Prime Member</p>
            )}

            <p className="text-xs sm:text-sm md:text-base text-green-400">{user.status}</p>
          </div>
        </div>


        {/* MENU LIST */}
        <div>
          {menuItems.map((item, index) => {
            const isActive = activeItem === item.name;

            return (
              <div key={item.name}>
                <button
                  onClick={() => {
                    setActiveItem(item.name);
                    navigate(item.path);
                  }}
                  className={`w-full text-left px-3 sm:px-4 md:px-5 py-3 sm:py-3.5 md:py-5 rounded-lg text-base sm:text-lg md:text-xl font-aldrich transition mb-2 mt-1
            ${isActive ? "bg-white/25" : "hover:bg-white/10"}
          `}
                >
                  {item.name}
                </button>

                {/* UNDERLINE HIDDEN ) */}
                {index !== menuItems.length - 0 && !isActive && (
                  <div className="h-px bg-white/60 mx-3 sm:mx-4 md:mx-5" />
                )}
              </div>
            );
          })}
        </div>



        {/* LOGOUT */}
        <div className="mt-6 sm:mt-7 md:mt-8 flex justify-center">
          <button
            onClick={() => navigate('/Page39')}
            className="flex items-center gap-2 text-sm sm:text-base md:text-lg text-white/80 hover:text-white cursor-pointer"
          >
            <SlLogout size={16} className="sm:w-5 sm:h-5 md:w-6 md:h-6" />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSidebar50;
