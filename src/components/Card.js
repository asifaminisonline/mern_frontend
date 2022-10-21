import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function BasicExample() {
  return (
    <Row className='card-section' style={{ paddingTop:50 }}>
      <Col sm={12} style={{textAlign:'center', color:'#0d6efd', padding:10}}><h1>( Our Services )</h1></Col>
    <Col sm={4}>
    <Card style={{ width: '100%', padding:10 }}>
      <Card.Img variant="top" src="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Galleries/20191018103944_hyundai-creta-side.jpg&w=872&h=578&q=75&c=1" />
      <Card.Body>
        <Card.Title>Hyundai Creta</Card.Title>
        <Card.Text>
          Some quick example text to Some quick example text to build on the card title and make up the build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </Col>

<Col sm={4}>
    <Card style={{ width: '100%', padding:10 }}>
        
      <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/LT_471_%28LTZ_1471%29_Arriva_London_New_Routemaster_%2819522859218%29.jpg/1200px-LT_471_%28LTZ_1471%29_Arriva_London_New_Routemaster_%2819522859218%29.jpg"/>
      <Card.Body>
        <Card.Title>Hyundai Bus</Card.Title>
        <Card.Text>
        Some quick example text to build on Some quick example text to build on the card title and make up the the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </Col>

<Col sm={4}>
    <Card style={{ width: '100%', padding:10 }}>
        
      <Card.Img variant="top" src="https://stimg.cardekho.com/images/carexteriorimages/930x620/Bentley/Flying-Spur/7776/1645012163948/front-left-side-47.jpg?tr=h-48" />
      <Card.Body>
        <Card.Title>Mercedes Creta</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content Some quick example text to build on the card title and make up the.
        </Card.Text>
        <Button variant="primary">View More</Button>
      </Card.Body>
    </Card>
    </Col>
    </Row>

  );
}

export default BasicExample;