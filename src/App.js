
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./Assets/style.css"

import AirEasy from"./Logo/aireasy.png";

import { Button,Row,Container,Col,Card,CardGroup,ListGroup,ListGroupItem,Navbar,Nav,Form,FormControl} from 'react-bootstrap';

function App() {
  return (
    <div className="body">
      <Container fluid className="m-0 p-0">
        <Row>

          {/* left menu */}

          <Col lg={2} className="md-2 m-0 p-0 SaidMenu">

            <Card style={{height: '100%'}} className="leftMenuCard p-0">
              <Card.Img variant="top" src={AirEasy} className="Image d-block mx-auto mt-5 mb-1"/>
              <Card.Body>
                <Card.Text>
                  <Card.Body className="leftMenuCard_1 rounded p-0">
                    <Card.Title>
                      <h4 className="text-bolder p-2">Research</h4>
                    </Card.Title>
                    <Card.Text className="ml-0 mr-0">

                      <ListGroup className="list-group-flush listItem rounded">

                        <ListGroupItem className="bg-transparent">
                          <Card.Link href="#" className="btn col-12 Button">Overview</Card.Link>
                        </ListGroupItem>

                        <ListGroupItem className="bg-transparent">
                          <Card.Link href="#" className="btn col-12 Button">Similar Properties</Card.Link>
                        </ListGroupItem>

                      </ListGroup>

                    </Card.Text>
                  </Card.Body>
                </Card.Text>
              </Card.Body>

              <Card.Footer>
                <Card.Text>
                  <h6 className="text-light pl-5">COPYRIGHT © 2022</h6>
                </Card.Text>
              </Card.Footer>

            </Card>
          </Col>

          {/* main body */}
          <Col lg={10} className="m-0 pb-3">

            {/* top navigation */}
            <Col lg={12}>
          
              <Navbar bg="light" expand="lg" className="">
                <Container fluid className="px-3">
                  <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-1" />
                  <Navbar.Collapse>
                      <Form className="d-flex">
                          <FormControl
                            type="search"
                            placeholder="Search location"
                            className="me-1"
                            aria-label="Purchase"
                          />
                        <Button variant="primary" className="m-1 p-2">Purchase</Button>
                      </Form>
                      <Nav.Link className="m-1 p-2 btn btn-secondary" href="#" style={{color: '#fff'}}>View Unlocked Market</Nav.Link>

                      <hr className="w-100 SimilarPropertiesQuary" />
                      <Nav.Link className="m-1 p-2 btn btn-primary SimilarPropertiesQuary" href="#" style={{color: '#fff'}}>Overview</Nav.Link>
                      <Nav.Link className="m-1 p-2 btn btn-primary SimilarPropertiesQuary" href="#" style={{color: '#fff'}}>Similar Properties</Nav.Link>
                      <hr className="w-100 SimilarPropertiesQuary" />
                        
                    <Nav
                      className="ms-auto my-2 my-lg-0"
                      style={{ maxHeight: '100px' }}
                      navbarScroll
                    >
                      <Nav.Link href="#" className="m-1 p-2 btn btn-primary" style={{color: '#fff'}}>Sign Up</Nav.Link>
                      <Nav.Link href="#" className="m-1 p-2 btn btn-secondary" style={{color: '#fff'}}>Log In</Nav.Link>
                      <div className="vr mx-2"></div>
                      <Nav.Link href="#" className="m-1 p-2 btn btn-primary" style={{color: '#fff'}}>Filter</Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>

            </Col>
            
            {/* top 3 card */}
            <Col lg={12}>

              <Row className="">

                <CardGroup className="px-4 mt-4">

                  <Card border="light" className="m-1 rounded">
                    <Card.Body>
                      <Card.Title>Average Daily Rate</Card.Title>
                      <Card.Text>
                        <h1 className="display-3 boldText">220$</h1>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted text-right">Dummy text</small>
                    </Card.Footer>
                  </Card>

                  <Card border="light" className="m-1 rounded">
                    <Card.Body>
                      <Card.Title>Occupancy Rate</Card.Title>
                      <Card.Text>
                        <h1 className="display-3 boldText">68%</h1>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted text-right">Dummy text</small>
                    </Card.Footer>
                  </Card>

                  <Card border="light" className="m-1 rounded">
                    <Card.Body>
                      <Card.Title>Revenue</Card.Title>
                      <Card.Text>
                        <h1 className="display-3 boldText">$2000</h1>
                      </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small className="text-muted text-right">Dummy text</small>
                    </Card.Footer>
                  </Card>

                </CardGroup>

              </Row>

            </Col>

            {/* Profit simulation and Map */}
            <Col lg={12}>

              <Row className="mt-3 px-4">

                {/* Profit simulation */}
                <Col lg={4}>
                  <Card border="light" className="m-1 rounded displayCard_1">
                    <Card.Body>
                      <Card.Title>Profit Simulation</Card.Title>
                      <Card.Text> </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Map */}
                <Col lg={8}>
                  <Card border="light" className="m-1 rounded displayCard">
                    <Card.Body>
                      <Card.Title>Map</Card.Title>
                      <Card.Text> </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card border="light" className="m-1 mt-3 rounded displayCard_3">
                    <Card.Body>
                      <Card.Title>Rental Setting</Card.Title>
                      <Card.Text> </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

            </Col>

            {/* Rental Type and Rental Size */}
            <Col lg={12}>

              <Row className="mt-3 px-4">

                {/* Rental Type */}
                <Col lg={6}>
                  <Card border="light" className="m-1 rounded displayCard_2">
                    <Card.Body>
                      <Card.Title>Rental Type</Card.Title>
                      <Card.Text> </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Rental Size */}
                <Col lg={6}>
                  <Card border="light" className="m-1 rounded displayCard_2">
                    <Card.Body>
                      <Card.Title>Rental Size</Card.Title>
                      <Card.Text> </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

            </Col>

            {/* Amenities and Airbnb Size */}
            <Col lg={12}>

              <Row className="mt-3 px-4">

                {/* Amenities */}
                <Col lg={6}>
                  <Card border="light" className="m-1 rounded displayCard_2">
                    <Card.Body>
                      <Card.Title>Amenities</Card.Title>
                      <Card.Text> </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Airbnb Size */}
                <Col lg={6}>
                  <Card border="light" className="m-1 rounded displayCard_2">
                    <Card.Body>
                      <Card.Title>Airbnb Size</Card.Title>
                      <Card.Text> </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>

            </Col>
            
            
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;