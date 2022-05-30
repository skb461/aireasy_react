
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import {Card,Col,Row,Modal,Form,Button} from 'react-bootstrap';
import { useState } from "react";

function ProfitSimulation() {
    
    const [click,setClick]=useState(false);

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
                        <Row>
                            <Col>










                            <a href="#" onClick={()=> setClick(true)} className="m-1 p-2 btn btn-primary" style={{color: '#fff'}}>Sign Up</a>

{/* signup modal */}
<Modal show={click}>

  {/* <Modal.Header>Modal head</Modal.Header> */}

  <Modal.Body>
    <Form className="py-5 px-2">
      <h1 className="text-dark text-center text-bolder">Edit Details</h1>
      <hr variant="primary" className="py-1 bg-primary w-75 mx-auto" />

      
      <h3 className="text-dark text-center text-bolder py-2">Annual Expenses</h3>
      <Row>
        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="ManagementFee">
          <Form.Control type="text" placeholder="Management Fee" required />
        </Form.Group>

        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="PropertyTax">
          <Form.Control type="text" placeholder="Property Tax" required />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="LodgningTax">
          <Form.Control type="text" placeholder="Lodgning Tax" required />
        </Form.Group>

        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="MortgageFee">
          <Form.Control type="text" placeholder="Mortgage Fee" required />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="HOAFee">
          <Form.Control type="text" placeholder="HOA Fee" required />
        </Form.Group>

        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="Maintenance">
          <Form.Control type="text" placeholder="Maintenance" required />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="Insurance">
          <Form.Control type="text" placeholder="Insurance" required />
        </Form.Group>

        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="Electricity">
          <Form.Control type="text" placeholder="Electricity" required />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="Wifi">
          <Form.Control type="text" placeholder="Wifi" required />
        </Form.Group>

        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="Gas">
          <Form.Control type="text" placeholder="Gas" required />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="Other">
          <Form.Control type="text" placeholder="Other" required />
        </Form.Group>
      </Row>
      
      <h3 className="text-dark text-center text-bolder py-2">Annual Revenue</h3>
      <Row>
        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="OccupancyRate">
          <Form.Control type="text" placeholder="Occupancy Rate" required />
        </Form.Group>

        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="NightlyRate">
          <Form.Control type="text" placeholder="Nightly Rate" required />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="CleaningFee">
          <Form.Control type="text" placeholder="Cleaning Fee" required />
        </Form.Group>

        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="NumberOfBooking">
          <Form.Control type="text" placeholder="Number of Bookings Per Month" required />
        </Form.Group>
      </Row>
      
      <h3 className="text-dark text-center text-bolder py-2">Annual Revenue</h3>
      <Row>
        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="HomeFurnishing">
          <Form.Control type="text" placeholder="Home Furnishing" required />
        </Form.Group>

        <Form.Group className="mb-3 m-2 col-5 mx-auto" controlId="ClosingCost">
          <Form.Control type="text" placeholder="Closing Cost" required />
        </Form.Group>
      </Row>

      <a href="#" onClick={()=> setClick(false)} className="m-1 p-2 btn btn-primary" style={{color: '#fff'}}>Submit</a>

      <hr variant="primary" className="bg-primary w-75 mx-auto" />

    </Form>
  </Modal.Body>


  {/* <Modal.Footer></Modal.Footer> */}

</Modal>















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