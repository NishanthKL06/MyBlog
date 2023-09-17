import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from'../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png'; 


const skills = () => {
  return (
    <section id='skills'>
      

      <span className='skillTittle'>What I Do</span>
      <span className='skillDesc'>I am a skilled and passianate web designer with expirence in creating visually appeding and user-friendly websites . i have a strong understanding of design and a keen eye for detail. I am preficient in HTML, CSS, and javascript as well as design software such as adobe photoshop and illustrator </span>
      <div className='skillBars'>
        <div className='skillBar'>
        <img src={UIDesign} alt="UIDesign" className='skillBarImg'/>
      <div className='skillBarText'>
          <h2>UI/UX Design</h2>
          <p>This is a demo text,you can write your own content here.</p>
          </div>
          </div>
          <div className='skillBar'>
        <img src={WebDesign} alt="WebDesign" className='skillBarImg'/>
      <div className='skillBarText'>
          <h2>Website Design</h2>
          <p>This demo text can be changed while making the production ready website.</p>
          </div>
          </div>
          <div className='skillBar'>
        <img src={AppDesign} alt="AppDesign" className='skillBarImg'/>
      <div className='skillBars'>
          <h2>App Design</h2>
          <p> You can write text related to mobile app devlopment.</p>
          
          </div>
        </div>
      </div>
          
     
     


    </section>
  );
}

export default skills;
