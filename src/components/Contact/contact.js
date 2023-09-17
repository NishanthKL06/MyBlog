import React from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';


const contact = () => {
  return (
    <section id='contactPage'>
      <div id="clients">
        <h1 className="contactPageTitle">MY MEOW'S</h1>
        <p className=" clientDesc">
          I have had the oppertunity to work with a diverse group of companies.some of the notable companies I have worked with includes
        </p>
        <div>
          <img src={Walmart} alt="client" className="clientImg" />
          <img src={Adobe} alt="client" className="clientImg" />
          <img src={Microsoft} alt="client" className="clientImg" />
          <img src={Facebook} alt="client" className="clientImg" />
        </div>
      </div>
    <div id="contact">
      <h2 className="contactPageTitle">MEOW! ME</h2>

      <span className="contactDesc">Please fill out the force below to discuss any work oppertunities.
      </span>

      <form className="contactForm">
      <input type="text" className="name" placeholder="MEOW Name"/>
      <input type="email" className="email" placeholder="MEOW Email"/>
      <textarea className="msg" name="message" rows="s" placeholder="MEOW Message"></textarea>
      
      <button type='submit' value='Send' className='submitBtn' >Submit</button>
    <div className='links'>
      <img src={FacebookIcon} alt='Facebook' className='link'/>
      <img src={TwitterIcon} alt='Twitter' className='link'/>
      <img src={YouTubeIcon} alt='Youtube' className='link'/>
      <img src={InstagramIcon} alt='Instagram' className='link'/>
    </div>
    </form>
    </div>

      
    </section>
  );
}

export default contact;
