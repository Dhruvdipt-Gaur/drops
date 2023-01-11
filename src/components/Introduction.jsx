import React from 'react'
import { Row, Col } from 'react-bootstrap'
import twoPlanets from '../assets/images/png/twoPlanets.png'

const Indroduction = () => {
    return (
        <section className='vh-100 bg-cover bg-no-repeat bg-star d-flex align-items-center justify-content-between mb--1 pb-5' id='Introduction'>
            <div className='container'>
                <Row className='align-items-center justify-content-between pt-5 mt-5'>
                    <Col xsm={12} lg={5}>
                        <img src={twoPlanets} alt="twoPlanets" className='w-lg-50 w-lg-100' />
                    </Col>
                    <Col xsm={12} lg={6}>
                        <h2 className='ff-comfortaa fw-bold fs-lg lh- text-white'>Introduction</h2>
                        <div className='d-flex align-items-center'>
                            <span className='w-7 h-110 d-inline-block rounded-rectangle bg-green'></span>
                            <p className='ff-comfortaa fw-normal fs-xsm lh- text-white w-525 ps-2 mb-0'>Nunc molestie faucibus eros nec pharetra. Etiam egestas augue justo, nec elementum orci commodo ut. Maecenas nec massa sit amet urna viverra pretium vitae vel eros. Nam aliquam purus in volutpat sollicitudin. </p>
                        </div>
                        <div className='d-flex align-items-center pt-4'>
                            <span className='w-7 h-110 d-inline-block rounded-rectangle bg-green'></span>
                            <p className='ff-comfortaa fw-normal fs-xsm lh- text-white w-525 ps-2 mb-0'>Nunc molestie faucibus eros nec pharetra. Etiam egestas augue justo, nec elementum orci commodo ut. Maecenas nec massa sit amet urna viverra pretium vitae vel eros. Nam aliquam purus in volutpat sollicitudin. </p>
                        </div>
                        <div>
                            <a href="#" className='py-3 px-4 ff-comfortaa fw-bold fs-xsm lh- text-white bg-green-gradient position-relative z-index-1 d-inline-block translate-active w-156'>Learn More</a>
                            <span className='d-inline-block w-156 h-52 border-1-white translate-2 translate-3'></span>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Indroduction