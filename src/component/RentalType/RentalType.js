
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Card,Col} from 'react-bootstrap';

function RentalType() {
    return(
    <>
        <Col lg={12}>
            <Card border="light" className="m-1 rounded displayCard_2">
                <Card.Body>
                    <Card.Title>Rental type</Card.Title>
                    <Card.Text> </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </>
    )
}
export default RentalType;