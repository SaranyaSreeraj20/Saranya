import React, { useState } from "react";
import "@fontsource/aldrich";
import {
  HeartIcon,
  ChatBubbleOvalLeftIcon,
  HandThumbUpIcon,
} from "@heroicons/react/24/solid";

import image1 from "../assets/img1.jpg";
import image2 from "../assets/img2.jpg";
import image5 from "../assets/img5.jpeg";
import image7 from "../assets/img7.jpg";
import image8 from "../assets/img8.png";
import image9 from "../assets/img9.jpg";

/* ===================== */
/* 🔹 MAIN COMPONENT     */
/* ===================== */

function ProfileCards() {
  const profiles = [
    { id: 1, img: image1 },
    { id: 2, img: image2 },
    { id: 3, img: image5 },
    { id: 4, img: image7 },
    { id: 5, img: image8 },
    { id: 6, img: image9 },
  ];

  return (
    <div className="min-h-screen bg-[#FDF7FD] px-4 py-6"
    style={{ fontFamily: "Aldrich, sans-serif" }}>
      <div
        className="
          grid
          grid-cols-2
          sm:grid-cols-3
          lg:grid-cols-3
          gap-4
          max-w-5xl
          mx-auto
        "
      >
        {profiles.map((p) => (
          <ProfileCard key={p.id} image={p.img} />
        ))}
      </div>
    </div>
  );
}

/* ===================== */
/* 🔹 PROFILE CARD       */
/* ===================== */

function ProfileCard({ image }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(12);
  const [online] = useState(true);

  const toggleLike = () => {
    setLiked((prev) => !prev);
    setLikes((prev) => (liked ? prev - 1 : prev + 1));
  };

  return (
    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-sm cursor-pointer">
      
      {/* IMAGE */}
      <img
        src={image}
        alt=""
        className="w-full h-full object-cover"
      />

      {/* GRADIENT */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      {/* ONLINE BADGE */}
      {online && (
        <span className="absolute top-3 left-3 bg-white/80 text-[10px] sm:text-xs px-3 py-1 rounded-full">
          Online
        </span>
      )}

      {/* ACTION ICONS */}
      <div className="absolute top-1/2 right-3 -translate-y-1/2 flex flex-col gap-2">
        <ActionIcon>
          <HandThumbUpIcon />
        </ActionIcon>

        <ActionIcon>
          <ChatBubbleOvalLeftIcon />
        </ActionIcon>

        <ActionIcon onClick={toggleLike} active={liked}>
          <HeartIcon />
        </ActionIcon>
      </div>

      {/* TEXT */}
      <div className="absolute bottom-3 left-3 right-3 text-white">
        <p className="text-sm sm:text-base font-semibold">
          Sithara Nair
        </p>
        <p className="text-[10px] sm:text-xs uppercase opacity-80">
          Developer · Hyderabad
        </p>
        <p className="text-[10px] sm:text-xs mt-1 opacity-70 ">
          ❤️ {likes} likes
        </p>
      </div>
    </div>
  );
}

/* ===================== */
/* 🔹 ACTION ICON        */
/* ===================== */

function ActionIcon({ children, onClick, active = false }) {
  return (
    <button
      onClick={onClick}
      className={`
        w-7 h-7
        sm:w-8 sm:h-8
        rounded-full
        flex items-center justify-center
        backdrop-blur-sm
        transition
        cursor-pointer
        ${active ? "bg-pink-500" : "bg-white/30"}
      `}
    >
      {React.cloneElement(children, {
        className: "w-4 h-4 sm:w-5 sm:h-5 text-white",
      })}
    </button>
  );
}

export default ProfileCards;
