import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.css'
function Footer() {
  return (
    <div id='footer'>
    <Row>
    <Col sm={3}className='footer-sec'>
            <h4>About Us |</h4>
            <hr></hr>
            <p>Some quick example text to build on Some quick example text to build on the card title and make up the the card title and make up the bulk of the card's content.Some quick example text to build on Some quick example text to build on the card title and make up the the card title</p>
        </Col>

        <Col sm={3} className='footer-sec'>
            <h4>Quick Links |</h4>
            <hr></hr>
            <ul>
                <li><a href="#"> Home</a></li>
                <li><a href="#"> About Us</a></li>
                <li><a href="#"> Discount On Trips</a></li>
                <li><a href="#"> Contact Us</a></li>
                <li><a href="#"> About Us</a></li>
                <li><a href="#"> Discount On Trips</a></li>
                <li><a href="#"> Contact Us</a></li>
            </ul>
        </Col>

        <Col sm={3}className='footer-sec'>
            <h4>Our Location |</h4>
            <hr></hr>
           <p> <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d13212.5357602171!2d74.79221985000001!3d34.117320600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1666288224282!5m2!1sen!2sin" width="auto" height="auto" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe></p>
        </Col>


        <Col sm={3}className='footer-sec'>
            <h4>Short Vides |</h4>
            <hr></hr>
            <p><iframe width="auto" height="auto" src="https://www.youtube.com/embed/Svf7Ky8Z1HY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
        </Col>


    </Row>
    </div>
  )
}

export default Footer