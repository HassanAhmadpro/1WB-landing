import React, { useState, useEffect } from "react";
import LogoImage from "../../assets/images/logo.png";
function Header() {
  // Sticky Header
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset >= 80)
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
          <a href="/" class="navbar-brand">
            <img src={LogoImage} className="header-logo" />
          </a>
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
                <a href="#" class="nav-link text-white active pr-4">
                  About
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-white active pr-4">
                  How to use
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link text-white active">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
