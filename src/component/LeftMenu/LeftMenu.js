
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

import AirEasy from"./../../Logo/aireasy.png";

import {Card,ListGroup,ListGroupItem} from 'react-bootstrap';

function LeftMenu() {
    return(

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
    )
}
export default LeftMenu;