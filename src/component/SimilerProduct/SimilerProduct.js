
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Card,Col,Row} from 'react-bootstrap';

import AirEasyMobile from"./../../Logo/aireasy-mobile-logo.png";

function SimilerProduct() {
    return(
        <Col>
            <Card className="mt-3 px-2">
                <Row className="mt-3">

                    <Col lg={4}>
                        <Card border="light" className="m-1 rounded">
                            <Card.Body>
                                <Card.Img variant="top" src={AirEasyMobile} className="Image_smipl d-block mx-auto mt-5 mb-1"/>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col lg={8}>
                        <Card border="light" >
                            <Card.Body>
                                <Card.Title>ABCDE</Card.Title>
                                <Card.Text>
                                    <h1 className="h-1 boldText">lorem dummy text as wish as can</h1>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Card.Link href="#" className="btn Button">ABCD</Card.Link>
                            </Card.Footer>
                        </Card>
                    </Col>
                </Row>
            </Card>
        </Col>
    )
}
export default SimilerProduct;