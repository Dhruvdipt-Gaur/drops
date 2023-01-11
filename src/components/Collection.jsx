import React from 'react'
import { Row, Col } from 'react-bootstrap'
import alienHead from '../assets/images/png/alienHead.png'

const Collection = () => {
    return (
        <section className='vh-md-100 bg-cover bg-no-repeat bg-star d-flex align-items-center justify-content-between mb--1 pt-5'>
            <div className='container pt-5 mt-5'>
                <Row className='align-items-center justify-content-between'>
                    <Col xsm={12} lg={5}>
                        <Row>
                            <Col sm={6} lg={4} className='py-1 py-lg-2 px-1'>
                                <div className='box d-flex align-items-center justify-content-center'>
                                    <img src={alienHead} alt="alienHead" />
                                </div>
                            </Col>
                            <Col sm={6} lg={4} className='py-1 py-lg-2 px-1'>
                                <div className='box d-flex align-items-center justify-content-center'>
                                    <img src={alienHead} alt="alienHead" />
                                </div>
                            </Col>
                            <Col sm={6} lg={4} className='py-1 py-lg-2 px-1'>
                                <div className='box d-flex align-items-center justify-content-center'>
                                    <img src={alienHead} alt="alienHead" />
                                </div>
                            </Col>
                            <Col sm={6} lg={4} className='py-1 py-lg-2 px-1'>
                                <div className='box d-flex align-items-center justify-content-center'>
                                    <img src={alienHead} alt="alienHead" />
                                </div>
                            </Col>
                            <Col sm={6} lg={4} className='py-1 py-lg-2 px-1'>
                                <div className='box d-flex align-items-center justify-content-center'>
                                    <img src={alienHead} alt="alienHead" />
                                </div>
                            </Col>
                            <Col sm={6} lg={4} className='py-1 py-lg-2 px-1'>
                                <div className='box d-flex align-items-center justify-content-center'>
                                    <img src={alienHead} alt="alienHead" />
                                </div>
                            </Col>
                            <Col sm={6} lg={4} className='py-1 py-lg-2 px-1'>
                                <div className='box d-flex align-items-center justify-content-center'>
                                    <img src={alienHead} alt="alienHead" />
                                </div>
                            </Col>
                            <Col sm={6} lg={4} className='py-1 py-lg-2 px-1'>
                                <div className='box d-flex align-items-center justify-content-center'>
                                    <img src={alienHead} alt="alienHead" />
                                </div>
                            </Col>
                            <Col sm={6} lg={4} className='py-1 py-lg-2 px-1'>
                                <div className='box d-flex align-items-center justify-content-center'>
                                    <img src={alienHead} alt="alienHead" />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col xsm={12} lg={6}>
                        <h2 className='ff-comfortaa fw-bold fs-lg lh- text-white'>A Collection of 10,000 Dropz</h2>
                        <p className='ff-comfortaa fw-normal fs-xsm lh- text-white mw-690'>Nunc molestie faucibus eros nec pharetra. Etiam egestas augue justo, nec elementum orci commodo ut. Maecenas nec massa sit amet urna viverra pretium vitae vel eros. Nam aliquam purus in volutpat sollicitudin. </p>
                        <p className='ff-comfortaa fw-normal fs-xsm lh- text-white mw-690'>Nunc molestie faucibus eros nec pharetra. Etiam egestas augue justo, nec elementum orci commodo ut. Maecenas nec massa sit amet urna viverra pretium vitae vel eros. Nam aliquam purus in volutpat sollicitudin. </p>
                        <div>
                            <a href="/" className='py-3 px-4 ff-comfortaa fw-bold fs-xsm lh- text-white bg-green-gradient position-relative z-index-1 d-inline-block translate-active w-135'>Mint Now</a>
                            <span className='d-inline-block w-135 h-52 border-1-white translate-2'></span>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Collection