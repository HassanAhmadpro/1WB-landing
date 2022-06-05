import React, { Fragment } from "react";
import MetaMask from "../../../assets/images/metamask.png";
import Binance from "../../../assets/images/binance.png";
import Visa from "../../../assets/images/visa.png";
import MasterCard from "../../../assets/images/mastercard.png";

export default function About() {
  return (
    <Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 col-12">
            <div className="about-main pt-5 pb-5">
              <h1 className="about-heading">How it works</h1>
              <div className="row">
                <div className="col-lg-5">
                  <div className="row">
                    <div className="col-lg-12 text-center">
                      <img src={Binance} className="about-img" />
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-lg-6 text-center">
                      <img src={MetaMask} className="about-img" />
                    </div>
                    <div className="col-lg-6 text-center m-auto">
                      <img src={Visa} className="about-img" />
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-12 text-center">
                      <img src={MasterCard} className="about-img" />
                    </div>
                  </div>
                </div>
                <div className="col-lg-2">
                  <p className="text-white">Logo</p>
                </div>{" "}
                <div className="col-lg-5">
                  <div className="row mt-5">
                    <div className="col-lg-6 text-center">
                      <img src={MasterCard} className="about-img" />
                    </div>
                    <div className="col-lg-6 text-center">
                      <img src={MasterCard} className="about-img" />
                    </div>
                  </div>
                  <div className="row mt-5">
                    <div className="col-lg-6 text-center">
                      <img src={MasterCard} className="about-img" />
                    </div>
                    <div className="col-lg-6 text-center">
                      <img src={MasterCard} className="about-img" />
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
