import React from "react";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import Img1 from './images/1.png'
import Img2 from './images/2.png'
import Img3 from './images/3.png'
import Img4 from './images/4.png'
import Img5 from './images/5.png'

{/* 
  Carousel
  Carousel item >> Imagres
  Carousel caption
  Carousel inside container fluid
  Carousel fade effect 
  Carousel with no side effect
  Individual item interval
  Dark variant
*/}
function CrouselBs(){
    return(<>
          <h1>Carousel Bootstrap</h1>
            <Container>
                <Row>
                    <Col>
                       {/* <Carousel fade> */}
                       {/* <Carousel slide={false or true}> */}
                        {/* <Carousel variant="dark"> It will set Carousel Caption Item as black color */}
                        <Carousel variant="dark">
                          <Carousel.Item interval={2000}>
                              <img src={Img1} className="d-block w-100"></img>
                              <Carousel.Caption>
                                <h2>First Image</h2>
                                <p>Check Description</p>
                              </Carousel.Caption>
                          </Carousel.Item>
                         <Carousel.Item interval={2000}>
                              <img src={Img2} className="d-block w-100"></img>
                                 <Carousel.Caption>
                                <h2>Second Image</h2>
                                <p>Check Description</p>
                              </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item interval={2000}>
                            <img src={Img3} className="d-block w-100"></img>
                               <Carousel.Caption>
                                <h2>Third Image</h2>
                                <p>Check Description</p>
                                </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item interval={2000}>
                            <img src={Img4} className="d-block w-100"></img>
                              <Carousel.Caption>
                                <h2>Fourth Image</h2>
                                <p>Check Description</p>
                                </Carousel.Caption>
                          </Carousel.Item>
                          <Carousel.Item interval={2000}>
                             <img src={Img5} className="d-block w-100"></img>
                             <Carousel.Caption>
                                <h2>Five Image</h2>
                                <p>Check Description</p>
                            </Carousel.Caption>
                          </Carousel.Item>
                       </Carousel>
                    </Col>
                </Row>
            </Container>
         </>);
}

export default CrouselBs;