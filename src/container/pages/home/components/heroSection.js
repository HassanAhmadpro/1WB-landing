import React, { Fragment } from "react";
import Sound from "react-sound";
import Regency from "../../../assets/music/NinjaTracksRegency.mp3";

export default function heroSection() {
  return (
    <Fragment>
      <div className="container">
        <Sound
          url={Regency}
          playStatus={Sound.status.PLAYING}
          autoLoad={true}
          loop={true}
          volume={10}
        />
        <div className="row">
          <div className="d-flex flex-column justify-content-center w-100 h-100"></div>
        </div>
      </div>
      <div className="container">
        <div className="row mt-lg-5 mt-md-2 mt-sm-0 mt-xs-0">
          <div className="col-xl-7 col-lg-7 col-md-12 mt-lg-5 mt-md-2 mt-sm-0 mt-xs-5 mt-5">
            <h1 className="main-heading fade-in-text mt-2">ONE</h1>
            <h1 className="main-heading fade-in-text mt-2">WORLD</h1>
            <h1 className="main-heading fade-in-text mt-2">BLOCKCHAIN</h1>
            <p className="main-sub-heading fade-in-text">
              A Modern Solution to levitate business with Web3 and BlockChain.
            </p>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-12 mt-lg-5 mt-md-4 mt-sm-0 mt-xs-0">
            <div className="img-wrapper">
              <div className="img-wrapper-2">
                <div className="img-wrapper-3"></div>
              </div>
            </div>
          </div>
        </div>
        {/* Mouse Scroll */}
        <div class="field mt-lg-0 mt-md-3 mt-sm-3 mt-xs-3 mt-3 mb-3">
          <div class="mouse"></div>
        </div>
      </div>
    </Fragment>
  );
}
