
import GridImage from '../assets/images/gridimage2.jpg'
import FormLeft from '../assets/images/formleft.png'
import Form from './Form.js'
import './BodyForm.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function ResponsiveAutoExample() {
  return (
    
      <Row className='backimg'>
        <Col sm={12}><img src={GridImage} className="grid-image" style={{height:'auto'}}/>
        </Col>
         <h1 style={{paddingTop:10}}>( Book Your Trip )</h1>
         <p style={{paddingLeft:10, paddingBottom:50}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

        <Col sm={6} className="boddyform">
             <h2>( Book Your Trip )</h2>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.to make a type specimen book.</p>;
             <img src={FormLeft} className="formleft"/>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.to make a type specimen book.</p>;
            
          
        </Col>
        <Col sm={5} className="boddyform">
             <h2>( Book Your Trip Now )</h2>
            <Form/>
          
        </Col>
      </Row>
   
  );
}

export default ResponsiveAutoExample;