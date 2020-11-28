import React from 'react';
import {Accordion,Card} from 'react-bootstrap';
import Footer from '../Footer/Footer';
import './Treatment.css';

function Treatment() {
    return (
        <div>
                <Accordion  className="treatmentaccord" defaultActiveKey="0">
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="0">
        Psychotherapy
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
        <Card.Body>Nunc sagittis imperdiet sem, et tincidunt arcu pharetra vel. Maecenas id lorem at est auctor</Card.Body>
        </Accordion.Collapse>
    </Card>
    <Card>
        <Accordion.Toggle as={Card.Header} eventKey="1">
        Stress Management
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="1">
        <Card.Body>Nunc sagittis imperdiet sem, et tincidunt arcu pharetra vel. Maecenas id lorem at est auctor</Card.Body>
        </Accordion.Collapse>
    </Card>
    
    <Card>
    <Accordion.Toggle as={Card.Header} eventKey="2">
    
        Counselling
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
        <Card.Body>Nunc sagittis imperdiet sem, et tincidunt arcu pharetra vel. Maecenas id lorem at est auctor</Card.Body>
        </Accordion.Collapse>
    </Card>
    </Accordion>
    <div>
        <h4>This content comes in home page and this page is all about lists of services provided
            and a seperate contact page will be developed with contact details and form.
        </h4>
    </div>
        <div>
    <Footer className="mt-5 mb-0 footerTreat"/>
    </div>
            </div>
    )
}

export default Treatment;
