import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <footer class="py-5 bg-dark fixed-bottom">
        <div class="container">
          <p class="m-0 text-center text-white">
            Copyright &copy; FAHAD'S SOCCER SHOES 2022
          </p>{" "}
          <FaFacebookF /> <FaTwitter /> <FaInstagram />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
