import { Badge, ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Cart = (props) => {
  return (
    <Modal {...props} size="lg" right>
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">CART</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup as="ol" numbered>
          <ListGroup.Item
            as="li"
            className="d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">Medicine name</div>
              description
            </div>
            <Button style={{ position: "relative" }}>
              Remove
              <Badge
                bg="danger"
                pill
                style={{ position: "absolute", top: "-8px", right: "-8px" }}
              >
                1
              </Badge>
            </Button>
          </ListGroup.Item>
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Close
        </Button>
        <Button variant="warning">Print Bill</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Cart;
