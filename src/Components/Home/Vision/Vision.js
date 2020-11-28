import React from 'react';
import Doctor from './visionSvg/doctor.svg';
import Consultation from './visionSvg/consultation.svg';
import Calendar from './visionSvg/calendar.svg';
import {Container,Row,Col} from 'react-bootstrap';
import './Vision.css';
const Vision =()=> {
    return (
        <div>
            <Container className="mt-5 mb-4 text-center">
            <Row className="mt-4">
                <Col className="mt-2" lg={4} md={4} xs={6}>
                    <img className="visionIcon" src={Doctor} alt="Doctor icon" />
                    <h5 className="mt-2">Best Treatment</h5>
                    <p className="mt-2">sit amet, consectetur adipiscing elit. </p>
                </Col>
                <Col className="mt-2" lg={4} md={4} xs={6}>
                    <img className="visionIcon" src={Consultation} alt="cosnultation icon" />
                    <h5 className="mt-2">Clinic Consultation</h5>
                    <p className="mt-2">sit amet, consectetur adipiscing elit. </p>
                </Col>
                <Col className="mt-2" lg={4} md={4} xs={12}>
                    <img className="visionIcon" src={Calendar} alt="calendar icon" />
                    <h5 className="mt-2">Book Appointment</h5>
                    <p className="mt-2">sit amet, consectetur adipiscing elit. </p>
                </Col>
            </Row>
            </Container>
        </div>
    )
}

export default Vision;
