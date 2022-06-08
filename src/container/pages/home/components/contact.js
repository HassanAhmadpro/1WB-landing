import React, { Fragment } from "react";
import ContactIcon from "../../../assets/images/contact-us.png";

export default function Contact() {
  return (
    <Fragment>
      <section id="contact">
        <div class="contact-box">
          <div class="contact-links">
            <h2 className="contact-heading">GET IN TOUCH</h2>
            <div className="row">
              <div className="col-lg-8 col-sm-8 col-xs-8 col-8 text-center m-auto">
                <div className="shadow-contact mt-lg-5 mt-md-4 mt-sm-4 mt-4">
                  <img src={ContactIcon} className="contact-icon m-auto" />
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-wrapper">
            <form>
              <div className="form-item mt-3">
                <input type="text" name="sender" required />
                <label>Full Name</label>
              </div>
              <div className="form-item mt-3">
                <input type="text" name="email" required />
                <label>Email</label>
              </div>
              <div className="form-item mt-3">
                <textarea className="" name="message" required></textarea>
                <label>Message</label>
              </div>
              {/* Button */}
              <button
                style={{ content: "Send" }}
                className="contact-btn"
                href="https://twitter.com/kamildyrek"
              >
                <div className="left"></div>
                Send
                <div className="right"></div>
              </button>
            </form>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
