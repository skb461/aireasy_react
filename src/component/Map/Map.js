
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Card,Col} from 'react-bootstrap';

function Map() {
    return(
    <>
        <Col lg={12}>
            <Card border="light" className="m-1 rounded displayCard">
                <Card.Body>
                    <Card.Title>Map</Card.Title>
                    <Card.Text> </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </>
    )
}
export default Map;