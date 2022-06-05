import React, { Fragment } from "react";

export default function footer() {
  return (
    <Fragment>
      <div className="container mt-5 footer-main">
        <div className="row text-sm-center text-center">
          <div className="text-white col-md-4 text-xs-center text-md-left footer-text">
            OneWB © 2022 developed by Hostollo.
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
        <br />
      </div>
    </Fragment>
  );
}
