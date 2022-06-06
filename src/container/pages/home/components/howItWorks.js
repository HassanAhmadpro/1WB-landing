import React, { Fragment } from "react";

export default function HowItWorks() {
  return (
    <Fragment>
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-lg-12 col-12">
            <h1 className="hiw-heading mt-5">How It Works</h1>
          </div>
          <div className="col-lg-8 col-md-12 col-sm-12 col-12 mt-3 m-auto">
            <iframe
              width="600"
              height="450"
              src="https://www.youtube.com/embed/vRlu7KAYo5k?controls=0"
              className="hiw-video-sizing"
            ></iframe>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
