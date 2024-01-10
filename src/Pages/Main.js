import React, { useEffect, useState } from "react";
import Hero from "../Components/Hero";
import Pros from "../Components/Pros";
import Discover from "../Components/Discover";
import Elevate from "../Components/Elevate";
import Uhackathon from "../Components/UHackathon";

import Curriculum from "../Components/Curriculum";
import Stories from "../Components/Stories";
import Footer from "../Components/Footer";

const Main = () => {
  const [showButton, setShowButton] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      const hackHeroBottom = document
        .querySelector(".hero-inner-cont")
        .getBoundingClientRect().bottom;

      if (window.scrollY < hackHeroBottom) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <a
        href="https://chat.whatsapp.com/C551a1rsjAeCFhO6glWPIb"
        target="_blank"
        rel="noreferrer"
      >
        <div
          className={`hack-btn mob-btn-hack ${showButton ? "hideBtnMob" : ""}`}
          onClick={() => window.fbq("track", " AddtoWhatsapp")}
        >
          Join Now For Free
        </div>
      </a>
      <Hero />
      <Pros />
      <Discover />
      <Elevate />
      <Uhackathon />
      <Curriculum />
      <Stories />
      <Footer />
    </>
  );
};

export default Main;