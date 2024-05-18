import React from "react";
import "./contact.css";
import { ValidationError, useForm } from "@formspree/react";
import Lottie from "lottie-react";
import doneanimation from "../../../src/animation/done.json";
import contactanimation from "../../../src/animation/contact.json";


export default function Contactus() {
  const [state, handleSubmit] = useForm("xayrkzzv");

  return (
    <section className="contactus">
      <h1 className="title">
        <span className="icon-envelope"></span>Contact us
      </h1>
      <p className="subtitle">Contact us for more information and Get notified when i publish something new.</p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit} className="">
          <div className="flex">
            <label htmlFor="email">Email Address :</label>
            <input required type="email" name="email" id="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message :</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>
          {state.succeeded && (
            <h1
              className="flex"
              style={{
                color: "var(--title)",
                fontSize: "18px",
                marginTop: "1.7rem",
              }}
            >
              <Lottie
                loop={false}
                style={{ height: "45px" }}
                animationData={doneanimation}
              />
              Your message has been sent successfully 🚀
            </h1>
          )}
        </form>
        <div className="animation">
          <Lottie
           className="contactanimation"
            style={{ height: "450px" }}
            animationData={contactanimation}
          />
        </div>
      </div>
    </section>
  );
}
