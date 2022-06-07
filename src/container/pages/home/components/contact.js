import React, { Fragment } from "react";

export default function Contact() {
  return (
    <Fragment>
      <section id="contact">
        <div class="contact-box">
          <div class="contact-links">
            <h2 className="contact-heading">GET IN TOUCH</h2>
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
