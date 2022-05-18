import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Card,Col} from 'react-bootstrap';

function AverageDailyRate() {
    return(
        <Col>
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
        </Col>
    )
}
export default AverageDailyRate;

