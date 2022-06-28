import React from "react";

function Team() {
  return (
    <div>
      <section className="section-team" id="team-scroll">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-md-8 col-lg-6">
              <div className="header-section">
                <h3 className="small-title">Our Team</h3>
                <h2 className="title">Let's meet with our team members</h2>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="single-person">
                <div className="person-image">
                  <img src="https://i.ibb.co/25zdRMr/person3.jpg" alt="" />
                  <span className="icon">
                    <i class="fa-solid fa-globe"></i>
                  </span>
                </div>
                <div className="person-info">
                  <h3 className="full-name">Edward Ng</h3>
                  <span className="speciality">Founder & Chairman</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-6 col-xl-3">
              <div className="single-person">
                <div className="person-image">
                  <img src="https://i.ibb.co/25zdRMr/person3.jpg" alt="" />
                  <span className="icon">
                    <i class="fa-solid fa-globe"></i>
                  </span>
                </div>
                <div className="person-info">
                  <h3 className="full-name">Waiki Hui</h3>
                  <span className="speciality">Chief Architect Fintech</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="single-person">
                <div className="person-image">
                  <img src="https://i.ibb.co/25zdRMr/person3.jpg" alt="" />
                  <span className="icon">
                    <i className="fa-solid fa-globe"></i>
                  </span>
                </div>
                <div className="person-info">
                  <h3 className="full-name">Victor</h3>
                  <span className="speciality">CTO Blockchain</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="single-person">
                <div className="person-image">
                  <img src="https://i.ibb.co/25zdRMr/person3.jpg" alt="" />
                  <span className="icon">
                    <i className="fa-solid fa-globe"></i>
                  </span>
                </div>
                <div className="person-info">
                  <h3 className="full-name">Dao</h3>
                  <span className="speciality">
                    Director Project Management
                  </span>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3">
              <div className="single-person">
                <div className="person-image">
                  <img src="https://i.ibb.co/25zdRMr/person3.jpg" alt="" />
                  <span className="icon">
                    <i className="fa-solid fa-globe"></i>
                  </span>
                </div>
                <div className="person-info">
                  <h3 className="full-name">Obinna Simon</h3>
                  <span className="speciality">Director Operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
