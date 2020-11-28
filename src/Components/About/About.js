import React from 'react'
import {Container,Jumbotron} from 'react-bootstrap';
import avatar from './avatar.jpg';
import Footer from '../Footer/Footer';
import './About.css';

export const About = () => {
    return (
        <div className="about-head p-2">
            <Container className="mt-5 mb-4 text-center">
                <img src={avatar} alt="doctor name" />
                <h3 className="mt-2">Doctor Name</h3>
                <p className="mt-2">nec malesuada lacus tellus eu nunc. Nulla sit amet eros quis elit porta efficitur. Vestibulum porttitor lorem non accumsan tincidunt. Vestibulum at metus bibendum,</p>
            </Container>
            <Jumbotron className="text-center mt-4 mb-2 p-2">
            <h3>About Doctor</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales, eros in tincidunt egestas, nibh ipsum condimentum magna, nec malesuada lacus tellus eu nunc. Nulla sit amet eros quis elit porta efficitur. Vestibulum porttitor lorem non accumsan tincidunt. Vestibulum at metus bibendum,</p>
            </Jumbotron>
            <div className="mt-4 mb-0">
                <Footer/>
            </div>
        </div>
    );
}

export default About;