
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Card,Col,Row} from 'react-bootstrap';

function ProfitSimulation() {
    return(
    <>
        <Col lg={12}>
            <Card border="light" className="m-1 rounded displayCard_1">
                <Card.Body>
                    <Card.Title>Profit Simulation</Card.Title>
                    <Card.Text>
                        <Row>
                            <Col md={6}>
                                <p className="h5">Annual Revenue</p>
                                <p className="h3">$39984</p>
                            </Col>
                            <Col md={6}>
                                <p className="h5">Annual Expenses</p>
                                <p className="h3">$11650</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={5} className="">
                                <p className="h5">Purchase Price</p>
                                <p className="h3 py-2 border mx-2">$0</p>
                            </Col>
                            <Col md={6}>
                                <p className="h5">Startup Costs</p>
                                <p className="h3">$0</p>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <p className="">Cash Return: <b>Infinity%</b></p>
                    <p className="">Profit Before Tax: <b>$28,334</b></p>
                    <p className="">Net Return Yied: <b>Infinity%</b></p>
                    <p className="">Net Operating Income: <b>$43,634</b></p>
                </Card.Footer>
            </Card>
        </Col>
    </>
    )
}
export default ProfitSimulation;