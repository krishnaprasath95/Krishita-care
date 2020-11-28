import React from 'react';
import './Home.css';
import Vision from './Vision/Vision';
import {Container,Row,Col} from 'react-bootstrap';
import Footer from '../Footer/Footer';
 const Home = () => {
    return (
        <>
        <div className="bannerHome"></div>
        <Container className="mt-5 mb-4">
            <Row className="text-center mt-5">
                <Col xs={12} md={6} lg={6}>
                    <h3>Mind Care</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales, eros in tincidunt egestas, nibh ipsum condimentum magna, nec malesuada lacus tellus eu nunc. Nulla sit amet eros quis elit porta efficitur. Vestibulum porttitor lorem non accumsan tincidunt. Vestibulum at metus bibendum,</p>
                </Col>
                <Col xs={12} md={6} lg={6}>
                    <h3>Why see a Psychiatrist?</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sodales, eros in tincidunt egestas, nibh ipsum condimentum magna, nec malesuada lacus tellus eu nunc. Nulla sit amet eros quis elit porta efficitur. Vestibulum porttitor lorem non accumsan tincidunt. Vestibulum at metus bibendum,</p>
                </Col>
            </Row>
        </Container>
        <Container className="text-center mt-5 bg-light w-100 d-block">
            <h3 className="p-2">Psychiatrist in Coimbatore</h3>
            <h5>About Krishita Psychiatrict Clinic</h5>
            <p className="mt-3 p-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras malesuada placerat nulla, id facilisis magna ornare non. Aliquam finibus interdum orci rutrum pretium. Phasellus sit amet erat eget tellus lacinia porttitor. Phasellus efficitur ligula vitae purus imperdiet, nec iaculis libero placerat. Nunc sagittis imperdiet sem, et tincidunt arcu pharetra vel. Maecenas id lorem at est auctor fermentum. Curabitur id placerat ipsum. Duis in egestas lorem, sed ultrices ipsum.</p>
            <p className="mt-3 p-2">Quisque efficitur ultrices erat, vel posuere ex lobortis ac. Suspendisse suscipit neque a enim porttitor, consequat malesuada neque egestas. Ut porttitor lobortis augue eu vehicula. Mauris a nisl in metus sagittis tempus sed in massa. Maecenas sed diam sit amet ipsum auctor porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consequat rutrum lectus, vel dictum diam gravida vel. Maecenas sodales hendrerit ultricies. Aliquam risus nulla, pulvinar et aliquam id, auctor nec nunc. Integer malesuada, ligula a porttitor vehicula, nunc nibh aliquam lacus, eget efficitur nulla ante vitae neque.</p>
        </Container>
        
        <Vision/>

        <Container className="mt-5 mb-4 scheduleContainer">
            <Row className="mt-4 mb-2">
                <Col  className="mt-4 " lg={8}  md={8} xs={6}>
                    <h2>Start your Journey by Scheduling a call now or visit us</h2>
                </Col>
                <Col className="mt-4 text-center" lg={4} md={4} xs={6}>
                    <button className="btn  btn-md btn-outline-danger">Book an appointment</button>
                </Col>
            </Row>
        </Container>
        <Footer/>
        </>
    )
}
export default Home;