import React from 'react'
import twitterIcon from '../assets/images/svg/twitterIcon.svg'
import seriousGirl from '../assets/images/png/seriousGirl.png'
import smilingBoy from '../assets/images/png/smilingBoy.png'
import instagramIcon from '../assets/images/svg/instagramIcon.svg'


import { Row, Col } from 'react-bootstrap'

const Team = () => {
    return (
        <section className='vh-md-100 bg-cover bg-no-repeat bg-star d-flex align-items-center justify-content-between mb--1 pt-5'>
            <div className='container'>
                <h2 className='ff-comfortaa fw-bold fs-lg lh- text-white text-center pb-5'>Our Team</h2>
                <Row>
                    <Col sm={12} md={6} lg={4}>
                        <div className='box-2'>
                            <img src={seriousGirl} alt="seriousGirl" className='w-100' />
                            <div className='d-flex align-items-center justify-content-center flex-column'>
                                <h3 className='pt-4 ff-comfortaa fw-semibold fs-md text-white'>John Doe</h3>
                                <p className='ff-comfortaa fw-semibold fs-xsm text-white'>Cras a nunc facilisis</p>
                                <div className='d-flex pb-4'>
                                    <a href="https://twitter.com/" target="_blank">
                                        <img src={twitterIcon} alt="twitterIcon" className='p-2 rounded-circle outline-1-white bx-shad-1-blur' />
                                    </a>
                                    <a href="https://discord.com/" className='ms-3' target="_blank">
                                        <img src={instagramIcon} alt="discordIcon" className='p-2 rounded-circle outline-1-white bx-shad-1-blur' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className='box-2 mt-5 mt-md-0'>
                            <img src={smilingBoy} alt="smilingBoy" className='w-100' />
                            <div className='d-flex align-items-center justify-content-center flex-column'>
                                <h3 className='pt-4 ff-comfortaa fw-semibold fs-md text-white'>John Doe</h3>
                                <p className='ff-comfortaa fw-semibold fs-xsm text-white'>Cras a nunc facilisis</p>
                                <div className='d-flex pb-4'>
                                    <a href="https://twitter.com/" target="_blank">
                                        <img src={twitterIcon} alt="twitterIcon" className='p-2 rounded-circle outline-1-white bx-shad-1-blur' />
                                    </a>
                                    <a href="https://discord.com/" className='ms-3' target="_blank">
                                        <img src={instagramIcon} alt="discordIcon" className='p-2 rounded-circle outline-1-white bx-shad-1-blur' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <div className='box-2 mt-5 mt-lg-0'>
                            <img src={seriousGirl} alt="seriousGirl" className='w-100' />
                            <div className='d-flex align-items-center justify-content-center flex-column'>
                                <h3 className='pt-4 ff-comfortaa fw-semibold fs-md text-white'>John Doe</h3>
                                <p className='ff-comfortaa fw-semibold fs-xsm text-white'>Cras a nunc facilisis</p>
                                <div className='d-flex pb-4'>
                                    <a href="https://twitter.com/" target="_blank">
                                        <img src={twitterIcon} alt="twitterIcon" className='p-2 rounded-circle outline-1-white bx-shad-1-blur' />
                                    </a>
                                    <a href="https://discord.com/" className='ms-3' target="_blank">
                                        <img src={instagramIcon} alt="discordIcon" className='p-2 rounded-circle outline-1-white bx-shad-1-blur' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Team