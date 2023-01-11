import React from 'react'
import { Col, Row } from 'react-bootstrap'
import greenEarth from '../assets/images/png/greenEarth.png'
import discordIcon from '../assets/images/svg/discordIcon.svg'
import twitterIcon from '../assets/images/svg/twitterIcon.svg'
import instagramIcon from '../assets/images/svg/instagramIcon.svg' 
import flyingAustronaut from '../assets/images/png/flyingAustronaut.png'

const Villian = () => {
    return (
        <footer>
            <section className='bg-cover bg-no-repeat bg-star d-flex align-items-center flex-column justify-content-between mb--1 pt-5'>
                <div className='container'>
                    <Row className='d-flex align-items-center justify-content-center'>
                        <Col md={3}>
                            <img src={flyingAustronaut} alt="" className='w-1 00' />
                        </Col>
                        <Col md={4}>
                            <div className='text-center'>
                                <h1 className='ff-comfortaa fw-bold fs-lg lh- text-white'>Drops </h1>
                                <p className='ff-comfortaa fw-medium fs-xsm lh- text-white mt-4'>Nec purus eros phasellus massa congue consectetur arcu ante. Vitae et velit </p>
                                <div className='d-flex align-items-center justify-content-center'>
                                    <a href="https://twitter.com/" className='me-3' target="_blank">
                                        <img src={twitterIcon} alt="twitterIcon" className='p-2 rounded-circle outline-1-white bx-shad-1-blur' />
                                    </a>
                                    <a href="https://instagram.com/" className='me-3' target="_blank">
                                        <img src={instagramIcon} alt="instagramIcon" className='p-2 rounded-circle outline-1-white bx-shad-1-blur' />
                                    </a>
                                    <a href="https://discord.com/" target="_blank">
                                        <img src={discordIcon} alt="discordIcon" className='p-2 rounded-circle outline-1-white bx-shad-1-blur' />
                                    </a>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <img src={greenEarth} alt="" className='pt-1' />
                        </Col>
                    </Row>
                </div>
                <span className='border-top-1 d-inline-block w-100'></span>
                <p className='ff-comfortaa fw-medium fs-xsm lh- text-white my-3'>@copy right2022</p>
            </section>
        </footer>

    )
}

export default Villian