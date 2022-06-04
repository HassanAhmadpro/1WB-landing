import React, { Fragment } from "react";
import HeroImage from "../../../assets/images/earth-image.png";

export default function heroSection() {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="video-container">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GSJPueAJnu8?controls=0&autoplay=1&mute=1&showinfo=0"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className="text-center main-heading mt-2">1 World Blockchain</p>
            <img src={HeroImage} className="hero-img" effect="blur" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 main-sub-heading">
            A Modern Solution to levitate business with Web3 and BlockChain.
          </div>
        </div>
      </div>
    </Fragment>
  );
}
