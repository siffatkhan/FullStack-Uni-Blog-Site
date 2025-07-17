import React from 'react';
import './DeveloperInfo.css';

const DeveloperInfo = () => {
  return (
    <div className="about-container">
      <div className="hi-div">
  <p className="typing">Hi !!!</p>
</div>

      <div className="about-card">
        <div className="about-image-container">
          <img
            src="./2ndpic.jpeg"
            alt="Siffat Ullah"
            className="about-image"
          />
        </div>

        <div className="about-content">
          <h1 className="about-heading">
            I’m <span className="name">Siffat</span>, an Ex-GC (PMA) and currently a Computer Science student passionate about Fullstack Web Development.
          </h1>

          <p className="about-text">
            I’m exploring diverse areas of computer science including web development, data structures, and backend engineering. My focus is on building impactful fullstack applications with React, Next and Node.js.
          </p>

          <p className="about-text">
            These days, I spend my time learning advanced concepts, creating projects, and preparing for software engineering roles. I love teamwork, continuous learning, and applying knowledge to real-world solutions.
          </p>

          <p className="about-text">
            Outside of coding, you’ll find me working out at the gym, analyzing trading charts, or riding horses whenever I find one.
          </p>
        </div>
      </div>

      <div className="connect-div">
        <p>Let's Connect</p>
      </div>

      <div className="contact-container">
        <form 
          className="contact-form"
          action="https://formsubmit.co/siffatullah.321@example.com"
          method="POST"

          // will be needing this below in backend to get email programmatically
          // ============================================================
          // const express = require('express');
          // const nodemailer = require('nodemailer');
          // const app = express();
          // app.use(express.json());

          // app.post('/contact', async (req, res) => {
          //   const { name, email, message } = req.body;
          //   // setup nodemailer transporter & send mail here
          // });

          // app.listen(5000, () => console.log("Server running"));
          // ============================================================
        >
          <input
            type="text"
            placeholder="Your Name"
            className="contact-input"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="contact-input"
          />
          <textarea
            placeholder="Your Message"
            className="contact-textarea"
          ></textarea>
           {/* <input type="hidden" name="_captcha" value="false" /> */}
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeveloperInfo;
