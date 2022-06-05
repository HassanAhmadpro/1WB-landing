import React, { useState, useEffect, Fragment } from "react";
import FooterLogo from "../../assets/images/logo.png";

export default function Footer() {
  // Sticky Footer
  const [small, setSmall] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset >= 90)
      );
    }
  }, []);
  return (
    <Fragment>
      <br />{" "}
      <div className={small ? "footer-main pt-3 pb-3" : "pt-3 pb-3"}>
        <div className="container">
          <div className="row text-sm-center text-center">
            <div className="text-white col-md-4 text-xs-center text-md-left footer-text">
              <img src={FooterLogo} className="footer-logo" /> © 2022 developed
              by Hostollo.
            </div>
            <div className="text-white col-md-4 text-md-center">
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter ml-2"></i>
              <i class="fa-brands fa-linkedin ml-2"></i>
            </div>
            <div className="text-white col-md-4 text-md-right footer-text">
              hi@onewb.com
            </div>
          </div>
        </div>
      </div>
      <br />
    </Fragment>
  );
}
