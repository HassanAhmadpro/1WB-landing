import React from "react";

function Services() {
  return (
    <div>
      <section className="section-services" id="section-services">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-10 col-lg-8">
              <div className="header-section">
                <h2 className="title">
                  Exclusive <span>Services</span>
                </h2>
                <p className="description">
                  There are many variations of passages of Lorem Ipsum available
                  but the majority have suffered alteration in some injected
                  humour
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i class="fa-solid fa-money-check"></i>
                  {/* <i className="fab fa-500px"></i> */}
                  <h3 className="title">Cross Border Payment</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Lorem Ipsum available but the majority have suffered
                    alteration in some injected humour
                  </p>
                  <a href="#">
                    <i className="fas fa-arrow-circle-right"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  <i class="fa-solid fa-list-check"></i>
                  {/* <i className="fab fa-angellist"></i> */}
                  <h3 className="title">Asset Management</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Lorem Ipsum available but the majority have suffered
                    alteration in some injected humour
                  </p>
                  <a href="#">
                    <i className="fas fa-arrow-circle-right"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  {/* <i className="fas fa-award"></i> */}
                  <i class="fa-solid fa-file-invoice"></i>
                  <h3 className="title">Invoice Management</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Lorem Ipsum available but the majority have suffered
                    alteration in some injected humour
                  </p>
                  <a href="#">
                    <i className="fas fa-arrow-circle-right"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  {/* <i className="fab fa-asymmetrik"></i> */}
                  <i class="fa-solid fa-ticket-simple"></i>
                  <h3 className="title">PaaS Platform</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Lorem Ipsum available but the majority have suffered
                    alteration in some injected humour
                  </p>
                  <a href="#">
                    <i className="fas fa-arrow-circle-right"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  {/* <i className="fas fa-broadcast-tower"></i> */}
                  <i class="fa-solid fa-money-bill"></i>
                  <h3 className="title">Cashless Society</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Lorem Ipsum available but the majority have suffered
                    alteration in some injected humour
                  </p>
                  <a href="#">
                    <i className="fas fa-arrow-circle-right"></i>Read More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="single-service">
                <div className="part-1">
                  {/* <i className="fab fa-canadian-maple-leaf"></i> */}
                  <i class="fa-solid fa-network-wired"></i>
                  <h3 className="title">Wide Networks</h3>
                </div>
                <div className="part-2">
                  <p className="description">
                    Lorem Ipsum available but the majority have suffered
                    alteration in some injected humour
                  </p>
                  <a href="#">
                    <i className="fas fa-arrow-circle-right"></i>Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
