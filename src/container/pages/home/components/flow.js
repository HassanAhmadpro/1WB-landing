import React, { Fragment } from "react";
import ChartImg from "../../../assets/images/Chart.png";
import FlowImg from "../../../assets/images/flow-img.png";
// import MetaMask from "../../../assets/images/metamask.png";
// import Binance from "../../../assets/images/binance.png";
// import Visa from "../../../assets/images/visa.png";
// import MasterCard from "../../../assets/images/mastercard.png";
// import CloudStorage from "../../../assets/images/cloud-storage.png";
// import Computer from "../../../assets/images/computer.png";
// import Database from "../../../assets/images/database.png";
// import Vision from "../../../assets/images/vision.png";
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
                <div className="col-lg-5 m-auto">
                  <img src={ChartImg} className="about-flow-img" />
                </div>
                <div className="col-lg-2 col-sm-6 col-xs-6 col-8 text-center m-auto">
                  <div className="shadow mt-lg-0 mt-md-4 mt-sm-4 mt-4">
                    <img src={LogoImage} className="about-logo m-auto" />
                  </div>
                </div>
                <div className="col-lg-5 m-auto">
                  <img src={FlowImg} className="about-chart-img" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
