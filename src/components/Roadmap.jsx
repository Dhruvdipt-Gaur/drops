import React from 'react'
import neptunePlanet from '../assets/images/png/neptunePlanet.png'
import { Col, Row } from 'react-bootstrap'

const Roadmap = () => {
    return (
        <section className='vh-md-100 bg-cover bg-no-repeat bg-star d-flex align-items-center justify-content-between mb--1 pt-5'>
            <div className='container'>
                <h2 className='ff-comfortaa fw-bold fs-lg lh- text-white text-center pb-5'>Roadmap</h2>
                <Row className='align-items-center justify-content-between'>
                    <Col xsm={10} lg={8}>
                        <div className='timeline'>
                            <div className='post-container left'>
                                <div>
                                    <h2 className='ff-comfortaa fw-bold fs-sm lh- text-white'>Phase 1</h2>
                                    <p className='ff-comfortaa fw-medium fs-xsm lh- text-white w-750'>Nec purus eros phasellus massa congue consectetur arcu ante. Vitae et velit dolor amet. Etiam elit ac iaculis semper lacus vitae suspendisse erat tellus. Urna ut hac enim, id a. Arcu, sed malesuada urna egestas scelerisque in id. Malesuada id id tempor metus suspendisse pulvinar nisi, lobortis. Vestibulum ipsum eget viverra malesuada non ut.</p>
                                </div>
                            </div>
                            <div className='post-container left'>
                                <div>
                                    <h2 className='ff-comfortaa fw-bold fs-sm lh- text-white'>Phase 1</h2>
                                    <p className='ff-comfortaa fw-medium fs-xsm lh- text-white w-750'>Nec purus eros phasellus massa congue consectetur arcu ante. Vitae et velit dolor amet. Etiam elit ac iaculis semper lacus vitae suspendisse erat tellus. Urna ut hac enim, id a. Arcu, sed malesuada urna egestas scelerisque in id.</p>
                                </div>
                            </div>
                            <div className='post-container left'>
                                <div>
                                    <h2 className='ff-comfortaa fw-bold fs-sm lh- text-white'>Phase 1</h2>
                                    <p className='ff-comfortaa fw-medium fs-xsm lh- text-white w-750'>Nec purus eros phasellus massa congue consectetur arcu ante. Vitae et velit dolor amet. Etiam elit ac iaculis semper lacus vitae suspendisse erat tellus. Urna ut hac enim, id a. Arcu, sed malesuada urna egestas scelerisque in id.lobortis. Vestibulum ipsum eget viverra malesuada non ut.</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xsm={12} lg={4}>
                        <img src={neptunePlanet} alt="neptunePlanet" className='w-100' />
                    </Col>
                </Row>
            </div>
        </section >
    )
}

export default Roadmap