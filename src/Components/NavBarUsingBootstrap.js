import React from "react";
import { Button,Col,Container,Nav,NavDropdown,NavLink,Navbar, NavbarBrand, Row } from "react-bootstrap";
import logo from './images/1.png'

function NavBarUsingBootstrap(){
  return (<>
           <Container>
            <Row>
            <Col>{/* fixed='top' fix your navbar on top */}
                <Navbar bg='primary' expand='sm' fixed="top">
                    <Container>
                      {/* <NavbarBrand href="#">My Website..</NavbarBrand>   */}
                      <Navbar.Brand href="#">
                    <img src={logo} width={50} height={50}></img>
                        My Website...
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="my-nav"></Navbar.Toggle>
                    <Navbar.Collapse id='my-nav'>
                    <Nav className="me-auto fw-bold">
                        <NavLink href="#">Home</NavLink>
                        <NavLink href="#">About</NavLink>
                        <NavDropdown title='Services' id='my-nav'>
                            <NavDropdown.Header>Top Most Services</NavDropdown.Header>
                            <NavDropdown.Item>Service 1</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Service 2</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Header>Other Services</NavDropdown.Header>
                            <NavDropdown.Item>Service 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Service 4</NavDropdown.Item>
                        </NavDropdown>
                        <NavLink href="#">Contact</NavLink>
                    </Nav>
                    <Navbar.Text>
                        Sign In Here <a href="#">Login</a>
                    </Navbar.Text>
                    </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Col>
            </Row>
           </Container>
        </>);
}

export default NavBarUsingBootstrap;