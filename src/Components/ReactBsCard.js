import React from "react";
import { Button,Container,Row,Col,Card } from "react-bootstrap";
import flowers_1  from './images/1.png';
import flowers_2 from './images/2.png';

/*
Card
Card Image
Card Body
Card title
Card text
Card subtitle
Card button
Card block level buttons
Card link
Card header
Card footer
Card background color
Card border color
Card Image overlay
*/

function ReactBsCard(){
  return(<Container>
          <Row>
            <Col md={4}>
            <Card bg='info' border="secondary">
                <Card.Header>This Is Card Header</Card.Header>
                <Card.Img src={flowers_1}></Card.Img>
                <Card.Body>
            {/* <Card.ImgOverlay> Image Over Lap on Text */}
            <Card.Title>This Is Card Title</Card.Title>
            <Card.Subtitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Card.Subtitle>
            <Card.Text>
 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            </Card.Text>
            <Card.Link>This Is Card Link.</Card.Link>
            <div className="d-grid">
            <Button variant="primary">Click Here</Button>
            </div>
            {/* </Card.ImgOverlay> */}
            </Card.Body>
            <Card.Footer>This Is Card Footer</Card.Footer>
            </Card>
            </Col>
          </Row>
        </Container>);
}

export default ReactBsCard;