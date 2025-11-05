import React from "react";
import { Button,Container,Row,Col } from "react-bootstrap";
import flowers_1  from './images/1.png';
import flowers_2 from './images/2.png';

function ReactAdvanceBs(){
  return(<>
  <div>
{/* <h2>React Bootstrap Advance Button</h2>
<Button variant="outline-danger">Submit Here..</Button>
<Button variant="outline-success">Submit Here..</Button> */}
<Container>
    <Row>
            <Col>
            <div className="bg-primary p-4">My Div</div>
            </Col>
            <Col>
            <div className="bg-danger p-4">My Div</div>
            </Col>
            <Col>
            <div className="bg-success p-4">My Div</div>
            </Col>
            <Col>
            <div className="bg-secondary p-4">My Div</div>
            </Col>
    </Row>
</Container>

<br/>

<Container fluid='xxl'>
    <Row>
            <Col>
            <div className="bg-primary p-4">My Div</div>
            </Col>
            <Col>
            <div className="bg-danger p-4">My Div</div>
            </Col>
            <Col>
            <div className="bg-success p-4">My Div</div>
            </Col>
            <Col>
            <div className="bg-secondary p-4">My Div</div>
            </Col>
    </Row>
</Container>

<br/>

<Container fluid>
    <h1>Span Padding</h1>
    <Row>
            <Col md={{span:3}}>
            <div className="bg-primary p-4">My Div</div>
            </Col>
            <Col md={4}>
            <div className="bg-danger p-4">My Div</div>
            </Col>
            <Col md={4}>
            <div className="bg-success p-4">My Div</div>
            </Col>
    </Row>
</Container>
<br/>

<Container>
        <h1>Offset Padding</h1>
    <Row>
            <Col md={{offset:3}}>
            <div className="bg-primary p-4">My Div</div>
            </Col>
            <Col md={3}>
            <div className="bg-danger p-4">My Div</div>
            </Col>
            <Col md={3}>
            <div className="bg-success p-4">My Div</div>
            </Col>
    </Row>
</Container>

<br/>

<Container>
    <Row>
            <Col md={6} sm={3}>
            <div className="bg-primary p-4">My Div</div>
            </Col>
            <Col md={6}>
            <div className="bg-danger p-4">My Div</div>
            </Col>
    </Row>
</Container>

<Container>
    <h1>This Is Images</h1>
    
    <p>This Is Img 1</p>
    <img src={flowers_1} height='200' weight='200'></img>
    
    <p>This Is Img 2</p>
    <img src={require('./images/2.png')} height='200' weight='200'></img>
</Container>
  </div>
       </>);
}

export default ReactAdvanceBs;