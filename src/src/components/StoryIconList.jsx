import React from "react";
import MyStoryIcon from "./MyStoryIcon.jsx";
import OtherStoryIcon from "./OtherStoryIcon.jsx";
import "@fontsource/aldrich";
const StoryIconList = () => {
  return (
    <div
      className="
        flex
        gap-6
        mx-2
        overflow-x-auto
        scrollbar-hide
        snap-x
        snap-mandatory
      "
      style={{ fontFamily: "Aldrich, sans-serif" }}
    >
      {/* Inner wrapper prevents flex shrink */}
      <div className="flex gap-6 snap-start">
        <MyStoryIcon />
        <OtherStoryIcon />
      </div>
    </div>
  );
};

export default StoryIconList;

