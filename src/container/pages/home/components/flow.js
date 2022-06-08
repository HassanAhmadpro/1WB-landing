import React, { Fragment } from "react";
import MetaMask from "../../../assets/images/metamask.png";
import Binance from "../../../assets/images/binance.png";
import Visa from "../../../assets/images/visa.png";
import MasterCard from "../../../assets/images/mastercard.png";
import CloudStorage from "../../../assets/images/cloud-storage.png";
import Computer from "../../../assets/images/computer.png";
import Database from "../../../assets/images/database.png";
import Vision from "../../../assets/images/vision.png";
import LogoImage from "../../../assets/images/logo.png";

export default function Flow() {
  return (
    <Fragment>
      <div className="container" id="section-scroll">
        <div className="row mt-5">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
            <div className="about-main pt-5 pb-5 text-center">
              <h1 className="about-heading">THE IDEAOLOGY</h1>
              <div className="row">
                <div className="col-lg-5">
                  <div className="row">
                    <div className="col-lg-12 col-md-6 col-sm-6 col-6 text-center">
                      <img src={Binance} className="about-img" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center">
                      <img src={MetaMask} className="about-img" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-6 text-center m-auto">
                      <img src={Visa} className="about-img-visa" />
                    </div>
                    <div className="col-lg-12 col-md-6 col-sm-6 col-6 mt-3 text-center">
                      <img src={MasterCard} className="about-img" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2 col-sm-6 col-xs-6 col-8 text-center m-auto">
                  <div className="shadow mt-lg-0 mt-md-4 mt-sm-4 mt-4">
                    <img src={LogoImage} className="about-logo m-auto" />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="row mt-5">
                    <div className="col-lg-6 col-sm-5 col-md-5 text-end col-5">
                      <img src={CloudStorage} className="about-img" />
                    </div>
                    <div className="col-lg-6 col-sm-5 text-center col-6">
                      <img src={Computer} className="about-img" />
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-6 col-sm-5 col-md-5 text-end mt-3 col-5">
                      <img src={Database} className="about-img" />
                    </div>
                    <div className="col-lg-6 col-sm-5 text-center mt-3 col-6">
                      <img src={Vision} className="about-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
