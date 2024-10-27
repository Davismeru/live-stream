import React, { useEffect, useRef, useState } from "react";
import "../css/Nav.css";

function Nav() {
  const navRef = useRef(null);
  const [fixedNav, setFixedNav] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const navHeight = navRef.current.clientHeight;
    if (navHeight) {
      scrollPosition > navHeight ? setFixedNav(true) : setFixedNav(false);
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div ref={navRef} className={fixedNav ? "fixed-nav" : "nav-container"}>
      <h1>Foota.live</h1>
      <nav>
        <a href="#features" className="hover:underline">
          top matches
        </a>
        <a href="#pricing" className="hover:underline">
          Leagues
        </a>
        <a href="#contact" className="hover:underline coffee-btn">
          Buy me a coffee
        </a>
      </nav>
    </div>
  );
}

export default Nav;
