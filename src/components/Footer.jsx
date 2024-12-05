import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer id="contact" className="py-8 bg-gray-900 text-white text-center">
      <section className="flex gap-3 justify-center">
        <p>
          <Link to="/blog">football news</Link>
        </p>
      </section>
      <p>&copy; 2024 BallHub. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
