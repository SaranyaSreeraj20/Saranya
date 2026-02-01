import React from "react";

/* COMPONENTS */
import AppHeader from '../components/AppHeader.jsx'        
import StoryIconList from '../components/StoryIconList.jsx'   
import CategoryToggleBar from '../components/CategoryToggleBar.jsx'
import ProfileList from '../components/ProfileList.jsx'     
import Footer from '../components/Footer.jsx'       


function Page12() {
  return (
    // PHONE SCREEN WRAPPER
    <div className="min-h-screen bg-[#FDF7FD] relative">

      {/* HEADER */}
      <div className="sticky top-0 z-40 bg-white">
        <AppHeader />
      </div>

      {/* CONTENT */}
      <main className="pb-28"> {/* space for footer */}
        
        {/* STORIES */}
        <section className="px-4 pt-4">
          <StoryIconList />
        </section>

        {/* CATEGORY TOGGLE */}
        <section className="px-4 mt-4">
          <CategoryToggleBar />
        </section>

        {/* PROFILE CARDS */}
        <section className="px-4 mt-4">
          <ProfileList />
        </section>

      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
};



export default Page12;
