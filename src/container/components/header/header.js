import React, { useState, useEffect } from "react";

function Header() {
  // Sticky Menu Area
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  /* Method that will fix header after a specific scrollable */
  const isSticky = (e) => {
    const header = document.querySelector(".navbar");
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.classList.add("is-sticky")
      : header.classList.remove("is-sticky");
  };

  return (
    <div>
      <nav class="navbar navbar-expand-sm header-nav pt-md-4">
        <div class="container">
          <a href="/" class="navbar-brand text-white">
            OneWB
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
