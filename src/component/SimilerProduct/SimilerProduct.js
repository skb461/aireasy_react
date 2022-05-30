
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Card,Col,Row} from 'react-bootstrap';

import AirEasyMobile from"./../../image/1.png";

function SimilerProduct() {
    return(
        <Col>
            <Card className="mt-3 px-2 displayCard_4 mx-4">
                <Row className="mt-3">

                    <Col lg={4}>
                        <Card border="light" className="m-1 rounded border-0">
                            <Card.Body>
                                <Card.Img variant="top" src={AirEasyMobile} className="d-block mx-auto w-50 mt-5 mb-1"/>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={8}>
                        <Card border="light border-0" >
                            <Card.Body className="">
                                <Card.Title>
                                    <h1>Best Home: 1Bd/1Ba and Steps to downtown MV</h1>
                                    <small>Account: Samszuo@gmail.com</small>
                                </Card.Title>
                                <Card.Text className="py-2">
                                    {/* <h1 className="h-1 boldText">lorem dummy text as wish as can</h1> */}
                                    <Row>
                                        <Col md={6}>
                                            <Card.Link href="#" className="btn btn-primary h1">Annual Occupancy</Card.Link>
                                            <p className="display-1 p-3 bolder text-muted border text-center m-4">55%</p>
                                        </Col>
                                        <Col md={6}>
                                            <Card.Link href="#" className="btn btn-primary h1">Annual Revenue</Card.Link>
                                            <p className="display-1 p-3 bolder text-muted border text-center m-4">24161USD</p>
                                        </Col>
                                    </Row>
                                </Card.Text>
                            </Card.Body>
                            {/* <Card.Footer>
                                <Card.Link href="#" className="btn Button">ABCD</Card.Link>
                            </Card.Footer> */}
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}
export default SimilerProduct;