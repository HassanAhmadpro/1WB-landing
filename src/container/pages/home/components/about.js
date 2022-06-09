import React, { Fragment } from "react";

export default function About() {
  return (
    <Fragment>
      <div className="container" id="about-scroll">
        <div className="row mt-5 mb-5 video-section">
          <div className="col-lg-6 m-auto">
            <h1 className="video-heading mt-5">ABOUT US</h1>
            <h1 className="video-heading pt-2">WHAT IS OneWB?</h1>
            <p className="video-text pt-4">
              OneWB is a Single Staking Investment Pool focused on a portfolio
              of derivatives trading of Defi and Cefi. We provide our investors
              and clients with high yield of their pledged funds resulting in
              the highest income within our safe and secure DApp and APP
              portfolio of revenue projects. The DApp projects are in Crypto
              yield farming, Cross-Chain Bridge services, and NFT Marketplace.
            </p>
          </div>
          <div className="col-lg-6 mt-5">
            <iframe
              width="420"
              height="345"
              src="https://www.youtube.com/embed/dAl2eqadr8U?controls=0"
              className="video-sizing"
            ></iframe>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
