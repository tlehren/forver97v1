import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Video from "../components/Video";
import "../styles/utilities.css";
import "../styles/index.css";

export default function Home() {
  return (
    <Layout>
      {/* hero */}
      <section className="hero">
        <div className="container flex">
          <Button to="#about" text="Learn" />
        </div>
      </section>

      {/* about */}
      <section className="about" id="about">
        <div className="container text-center">
          <Video />
          <Button to="#contact" text="Contact Us" />
        </div>
      </section>

      {/* contact */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="card">
            <form name="contact" method="POST" data-netlify="true">
              <fieldset>
                <legend>Contact form</legend>
                <div className="form-control">
                  <label for="name">First Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    required=""
                  />
                </div>

                <div className="form-control">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    required=""
                  />
                </div>
                <div className="form-control">
                  <label for="message">Your Message</label>
                  <textarea
                    name="message"
                    id=""
                    cols="1"
                    rows="1"
                    placeholder="Start typing here"
                    required=""
                  ></textarea>
                </div>
                <button type="submit" className="btn">
                  Submit
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
