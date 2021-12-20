import React from "react";
import Layout from "../components/Layout";
import Button from "../components/Button";
import Video from "../components/Video";
import "../styles/index.css";

export default function Home() {
  return (
    <Layout>
      {/* hero */}
      <section className="hero">
        <div className="container flex">
          <h1>
            Passion <br /> is <br /> Limitless
          </h1>
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
            <form action="/success" method="post">
              <fieldset class="formGrid">
                <legend>Contact form</legend>
                <div class="form-control">
                  <label for="name">First Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your name"
                    required=""
                  />
                </div>

                <div class="form-control">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email"
                    required=""
                  />
                </div>
                <div class="form-control full">
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
                <button type="submit" class="btn full">
                  Send It
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
