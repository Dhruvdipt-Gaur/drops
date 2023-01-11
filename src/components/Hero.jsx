import { Icon } from 'react-icons-kit'
import React, { useState } from 'react'
import { x } from 'react-icons-kit/feather/x'
import { menu } from 'react-icons-kit/feather/menu'
import scrollDown from '../assets/images/svg/scrollDown.svg'
import discordIcon from '../assets/images/svg/discordIcon.svg'
import twitterIcon from '../assets/images/svg/twitterIcon.svg'
const Hero = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  }
  function hideElement() {
    var hide = document.gethideById("hide");
    hide.classList.add("overflow-hidden");
  }

  return (
    <header className='mb--12 vh-100 bg-cover bg-no-repeat bg-green-space position-relative'>
      <nav className={toggle ? 'navbar expanded' : 'navbar'}>
        <div className='container d-flex align-items-center justify-content-between'>
          <a href="#" className='ff-comfortaa fw-bold fs-lg lh- text-white logo'>Drops</a>
          <div className='toggle-icon' onClick={handleToggle}>
            {toggle ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} onClick={hideElement} />}
          </div>
          <ul className='links ps-0 mb-0'>
            <a href="#" className='line-up-down ff-comfortaa fw-bold fs-xsm lh- text-white me-lg-3 me-xl-4 me-xxl-5'>About</a>
            <a href="#" className='line-up-down ff-comfortaa fw-bold fs-xsm lh- text-white me-lg-3 me-xl-4 me-xxl-5 mt-3 mt-lg-0'>Roadmap</a>
            <a href="#" className='line-up-down ff-comfortaa fw-bold fs-xsm lh- text-white me-lg-3 me-xl-4 me-xxl-5 mt-3 mt-lg-0'>Whitepaper </a>
            <a href="#" className='line-up-down ff-comfortaa fw-bold fs-xsm lh- text-white me-lg-3 me-xl-4 me-xxl-5 mt-3 mt-lg-0'>Team</a>
            <a href="#" className='line-up-down ff-comfortaa fw-bold fs-xsm lh- text-white me-lg-3 me-xl-4 me-xxl-5 mt-3 mt-lg-0'>Faq</a>
            <a href="https://twitter.com/" className='me-lg-2 me-xxl-3 me-xxl- mt-3 mt-lg-04 mt-3 mt-lg-0' target="_blank">
              <img src={twitterIcon} alt="twitterIcon" className='p-2 rounded-circle outline-1-white bx-shad-1-blur' />
            </a>
            <a href="https://discord.com/" className='me-lg-2 me-xxl-3 me-xxl-4 mt-3 mt-lg-0' target="_blank">
              <img src={discordIcon} alt="discordIcon" className='p-2 rounded-circle outline-1-white bx-shad-1-blur' />
            </a>
            <li className='mt-lg-5 mt-3 mt-lg-0'>
              <a href="#" className='py-3 px-4 ff-comfortaa fw-bold fs-xsm lh- text-white bg-green-gradient position-relative z-index-1 d-inline-block translate-active w-100'>Connect wallet</a>
              <span className='d-inline-block w-185 h-52 border-1-white translate w-100'></span>
            </li>
          </ul>
        </div>
      </nav>
      <section>
        <div className='vh-till-lg-100 vh-70 d-flex align-items-center justify-content-center flex-column'>
          <h2 className='ff-comfortaa fw-bold fs-xl lh- text-white border-text-white'>WELCOME TO</h2>
          <h1 className='ff-comfortaa fw-bold fs-xxl lh- text-white border-text-white'>THE DROPS</h1>
        </div>
      </section>
      <section className='bg-linear-gradient position-absolute bottom-0 start-50 translate-middle-x overflow-hidden'>
        <div className='d-flex align-items-center justify-content-center '>
          <a href="#Introduction">
            <img src={scrollDown} alt="scrollDown" />
          </a>
        </div>
      </section>
    </header>
  )
}

export default Hero