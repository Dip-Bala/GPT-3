import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  console.log(year);
  return (
    <div className = "gpt3-footer section-padding">
      <div className = "gpt3-footer-heading">
        <h1 className = "gradient-text">Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
      </div>
      <div className="gpt3-footer-links">
        <div className="gpt3-footer-links-logo">
          <h3>GPT-3</h3>
          <p>Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved</p>
        </div>
        <div className="gpt3-footer-links-div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3-footer-links-div">
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3-footer-links-div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Alknjkcb</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="gpt3-footer-copyright">
        <p>@{year} GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer