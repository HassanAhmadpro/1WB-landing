import React, { Fragment } from "react";
import ContactIcon from "../../../assets/images/contact-us.png";

export default function Contact() {
  return (
    <Fragment>
      <section id="contact">
        <div class="contact-box">
          <div class="contact-links">
            <h2 className="contact-heading pt-5">GET IN TOUCH</h2>
            <div className="row">
              <div className="col-lg-12 col-sm-12 col-xs-12 col-12">
                <div class="social-container">
                  <ul class="social-icons">
                    <li>
                      <a href="#">
                        <i class="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://discord.com/invite/3THrvzh6nR">
                        <i class="fa fa-discord"></i>
                      </a>
                    </li>
                  </ul>
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
