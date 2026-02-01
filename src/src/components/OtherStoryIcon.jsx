import React from "react";
import image2 from "../assets/img2.jpg";
import images3 from "../assets/img3.jpg";
import image4 from "../assets/img4.jpg";

const OtherStoryIcon = () => {
  return (
    <ul className="flex space-x-4 sm:space-x-6">
      
      {/* Story 1 */}
      <li className="flex flex-col items-center space-y-1 flex-shrink-0">
        <div className="bg-linear-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
          <a href="#" className="block p-1 rounded-full bg-white">
            <img
              src={image2}
              alt="Selena"
              className="
                rounded-full
                h-16 w-16
                sm:h-20 sm:w-20
                md:h-24 md:w-24
                object-cover
              "
            />
          </a>
        </div>
        <a href="#" className="text-xs sm:text-sm md:text-base">
          Selena
        </a>
      </li>

      {/* Story 2 */}
      <li className="flex flex-col items-center space-y-1 flex-shrink-0">
        <div className="bg-linear-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
          <a href="#" className="block p-1 rounded-full bg-white">
            <img
              src={images3}
              alt="Clara"
              className="
                rounded-full
                h-16 w-16
                sm:h-20 sm:w-20
                md:h-24 md:w-24
                object-cover
              "
            />
          </a>
        </div>
        <a href="#" className="text-xs sm:text-sm md:text-base">
          Clara
        </a>
      </li>

      {/* Story 3 */}
      <li className="flex flex-col items-center space-y-1 flex-shrink-0">
        <div className="bg-linear-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full">
          <a href="#" className="block p-1 rounded-full bg-white">
            <img
              src={image4}
              alt="Fabian"
              className="
                rounded-full
                h-16 w-16
                sm:h-20 sm:w-20
                md:h-24 md:w-24
                object-cover
              "
            />
          </a>
        </div>
        <a href="#" className="text-xs sm:text-sm md:text-base">
          Fabian
        </a>
      </li>
    </ul>
  );
};

export default OtherStoryIcon;
