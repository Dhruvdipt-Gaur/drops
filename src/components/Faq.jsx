import React, { useState } from 'react'
import { Row, Col, Accordion, } from 'react-bootstrap'
import halfEarth from '../assets/images/png/halfEarth.png'

const Faq = () => {
    return (
        <section className='vh-md-100 bg-cover bg-no-repeat bg-star d-flex align-items-center justify-content-between mb--1 pt-5'>
            <div className='container'>
                <Row className='d-flex align-items-center justify-content-center position-relative z-index-1'>
                    <Col lg={8}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey='0' className='item'>
                                <Accordion.Header className='ff-comfortaa fw-semibold fs-md text-white'>Nullam pulvinar sem at ipsum posuere tempo?</Accordion.Header>
                                <Accordion.Body className='ff-comfortaa fw-medium fs-xsm text-whi'>Nec purus eros phasellus massa congue consectetur arcu ante. Vitae et velit dolor amet. Etiam elit ac iaculis semper lacus vitae suspendisse erat tellus. </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='2' className='item'>
                                <Accordion.Header className='ff-comfortaa fw-semibold fs-md text-white'>Nullam pulvinar sem at ipsum posuere tempo?</Accordion.Header>
                                <Accordion.Body className='ff-comfortaa fw-medium fs-xsm text-whi'>Nec purus eros phasellus massa congue consectetur arcu ante. Vitae et velit dolor amet. Etiam elit ac iaculis semper lacus vitae suspendisse erat tellus. </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='3' className='item'>
                                <Accordion.Header className='ff-comfortaa fw-semibold fs-md text-white'>Nullam pulvinar sem at ipsum posuere tempo?</Accordion.Header>
                                <Accordion.Body className='ff-comfortaa fw-medium fs-xsm text-whi'>Nec purus eros phasellus massa congue consectetur arcu ante. Vitae et velit dolor amet. Etiam elit ac iaculis semper lacus vitae suspendisse erat tellus. </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='4' className='item'>
                                <Accordion.Header className='ff-comfortaa fw-semibold fs-md text-white'>Nullam pulvinar sem at ipsum posuere tempo?</Accordion.Header>
                                <Accordion.Body className='ff-comfortaa fw-medium fs-xsm text-whi'>Nec purus eros phasellus massa congue consectetur arcu ante. Vitae et velit dolor amet. Etiam elit ac iaculis semper lacus vitae suspendisse erat tellus. </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey='5' className='item'>
                                <Accordion.Header className='ff-comfortaa fw-semibold fs-md text-white'>Nullam pulvinar sem at ipsum posuere tempo?</Accordion.Header>
                                <Accordion.Body className='ff-comfortaa fw-medium fs-xsm text-whi'>Nec purus eros phasellus massa congue consectetur arcu ante. Vitae et velit dolor amet. Etiam elit ac iaculis semper lacus vitae suspendisse erat tellus. </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </div>
            <img src={halfEarth} alt="halfEarth" className='position-absolute end-0 z-index--1' />
        </section>
    )
}
export default Faq