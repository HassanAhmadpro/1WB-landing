import React, { useState, useEffect } from "react";
import LogoImage from "../../assets/images/logo.png";

function Header() {
  // Sticky Header
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset >= 90)
      );
    }
  }, []);

  return (
    <div>
      <nav
        class={`navbar${
          small ? " is-sticky" : ""
        } navbar-expand-sm header-nav pt-md-2`}
      >
        <div class="container">
          <img src={LogoImage} className="header-logo" />
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon">
              <i class="fa-solid fa-bars"></i>
            </span>
          </button>

          <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a href="#about-scroll" class="nav-link text-white active pr-4">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#section-services"
                  class="nav-link text-white active pr-4"
                >
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a href="blog." class="nav-link text-white active pr-4">
                  Blog
                </a>
              </li>
              <li class="nav-item">
                <a href="#hoi-scroll" class="nav-link text-white active pr-4">
                  Usage
                </a>
              </li>
              <li class="nav-item">
                <a href="#team-scroll" class="nav-link text-white active pr-4">
                  Team
                </a>
              </li>
              <li class="nav-item">
                <a href="#contact" class="nav-link text-white active">
                  Contact
                </a>
              </li>
              <div className="text-white text-md-center m-auto pl-4">
                <a href="https://www.instagram.com">
                  <i className="fa-brands fa-instagram text-white"></i>
                </a>
                <a href="https://www.twitter.com">
                  <i className="fa-brands fa-twitter text-white ml-2"></i>
                </a>
                <a href="https://discord.com/invite/3THrvzh6nR">
                  <i className="fa-brands fa-discord text-white ml-2"></i>
                </a>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
