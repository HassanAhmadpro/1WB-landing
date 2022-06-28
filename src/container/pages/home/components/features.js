import React from "react";

function features() {
  return (
    <div className="m-section">
      <main>
        <div className="row justify-content-center text-center mt-5">
          <div className="col-md-10 col-lg-8">
            <div className="header-section">
              <h2 className="title text-white">Powered by 1WB.</h2>
              <p className="description text-white">
                {" "}
                Lorem Ipsum available but the majority have suffered alteration
                in some injected humour
              </p>
            </div>
          </div>
        </div>
        <br />
        <ul className="cards-container m-auto">
          <li className="cyan-feature-card">
            <h2 className="feat-head">Monetization</h2>
            <p className="feat-desc">
              Lorem Ipsum available but the majority have suffered alteration.
            </p>
            {/* <img
              src="https://alfonsosuarezg.github.io/four-card-feature-section/images/icon-supervisor.svg"
              alt="supervisor feature icon"
            /> */}
          </li>

          <li className="red-feature-card">
            <h2 className="feat-head">Tokenization</h2>
            <p className="feat-desc">
              Lorem Ipsum available but the majority have suffered alteration.
            </p>
          </li>

          <li className="orange-feature-card">
            <h2 className="feat-head">Asset Management</h2>
            <p className="feat-desc">
              Lorem Ipsum available but the majority have suffered alteration.
            </p>
          </li>

          <li className="blue-feature-card">
            <h2 className="feat-head">Fiat Conversion</h2>
            <p className="feat-desc">
              Lorem Ipsum available but the majority have suffered alteration.
            </p>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default features;
