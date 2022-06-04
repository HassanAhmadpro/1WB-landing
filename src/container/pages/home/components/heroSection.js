import React, { Fragment } from "react";
import HeroImage from "../../../assets/images/earth-image.png";

export default function heroSection() {
  return (
    <Fragment>
      <div className="container">
        {/* <div className="row">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/VvokCJFIRK0&t=70?controls=0&autoplay=1&mute=1&showinfo=0&loop=1&playlist=VvokCJFIRK0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div> */}
        <div className="row">
          <div className="d-flex flex-column justify-content-center w-100 h-100"></div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-6 mt-5">
            <h1 className="main-heading mt-2">ONE</h1>
            <h1 className="main-heading mt-2">WORLD</h1>
            <h1 className="main-heading mt-2">BLOCKCHAIN</h1>
            <p className="main-sub-heading">
              A Modern Solution to levitate business with Web3 and BlockChain.
            </p>
            <br />
            <br />
            <br />
            <br />
          </div>
          <div className="col-lg-6">
            <img
              src={HeroImage}
              className="hero-img"
              effect="blur"
              alt="Hero Section"
            />
          </div>
        </div>

        {/* <div className="row">
          <div className="col-lg-12 main-sub-heading">
            
          </div>
        </div> */}
      </div>
    </Fragment>
  );
}
