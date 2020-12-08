import React from  'react';
import { Container, Row, Col, Card, Button} from 'react-bootstrap';
import Slider from './Slider';
import Jumbotron from './Jumbotron';
import fon from '../img/fon.png';

const Home =()=>{
    
    return(
<>
    <Slider/>
    <Container style ={{paddingTop: '2rem', paddingBottom: '2rem'}}>
        <Row>
          <Col>
            <Card style ={{width: '18rem'}}>
                <Card.Img variant="top" src={fon}/>
                <Card.Body>
                    <Card.Title>Web Blog</Card.Title>
                    <Card.Text>
                        Smth info - lets read
                    </Card.Text>
                    <Button variant="primary">Learn more</Button>
                </Card.Body>
            </Card>
          </Col>
          
          <Col>
            <Card style ={{width: '18rem'}}>
                <Card.Img variant="top" src={fon}/>
                <Card.Body>
                    <Card.Title>Web Blog</Card.Title>
                    <Card.Text>
                        u should read this
                    </Card.Text>
                    <Button variant="primary">Learn more</Button>
                </Card.Body>
            </Card>
          </Col>
          
          <Col>
            <Card style ={{width: '18rem'}}>
                <Card.Img variant="top" src={fon}/>
                <Card.Body>
                    <Card.Title>Web Blog</Card.Title>
                    <Card.Text>
                        Let's read!
                    </Card.Text>
                    <Button variant="primary">Learn more</Button>
                </Card.Body>
            </Card>
          </Col>
        </Row>
    </Container>
    <Jumbotron/>
    <Container style={{marginBottom:'30px'}}>
        <Row>
            <Col md={7}>
                <img src={fon} height={400}/>
            </Col>
            <Col md={10}>
                <h2>Web Developer Blog</h2>
                <p>
                    laalalalalallalalalllall allal allal l lal la la la l al la la lal allalalal al laal l ala 
                </p>
            </Col>
        </Row>
    </Container>
</>
    )}
export default Home;