import React, { useEffect, useRef, useState } from "react";
import "../css/Nav.css";
import { Link } from "react-router-dom";

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
      <Link to="/">
        <h1>
          Ball<span>hub</span>
        </h1>
      </Link>
      <nav>
        <a href="#pricing" className="hover:underline">
          Get updates
        </a>
        <Link to="/blog">Blog</Link>
        <Link to="/buy_me_a_coffe">
          <button className="coffee-btn">Buy me a coffee</button>
        </Link>
      </nav>

      {/* nav for small devices */}
      <div className="small-nav">
        <Link to="/buy_me_a_coffe">
          <button className="coffee-btn">Buy me a coffee</button>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
