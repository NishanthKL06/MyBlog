import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnimg from '../../assets/hireme.png';
import { Link } from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
      <div className='introContent'>
        <span className='MEOW'>MEOW!!</span>
        <span className='introText'>I'm
          <span className='introName'>MR.KAT</span><br /> Website Designer  </span>


        <p className='introPara'>I am a skilled web designer with
          experience in creating visual appealing and user friendly Website.</p>

        <Link>
          <button className='btn'><img src={btnimg} alt="" className='btnImg' /> hire me</button>
        </Link>

      </div>
      <img src={bg} alt="Profile" className='bg' />
    </section>
  );
}

export default Intro;
