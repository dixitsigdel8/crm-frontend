import React from "react";
import { Button, Form, Jumbotron, Row, Col } from "react-bootstrap";

export const AddTicketForm = ({ handleOnChange }) => {
  return (
    <Jumbotron className="bg-white">
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="text"
              placeholder="Enter Subject"
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              placeholder="Issused Date"
              onChange={handleOnChange}
              required
            />
          </Col>
        </Form.Group>
        <Form.Group>
          <Form.Label>Added</Form.Label>
          <Form.Control as="textarea" placeholder="Date" rows={3} />
        </Form.Group>

        <Button variant="info" type="submit" block>
          Submit
        </Button>
      </Form>
    </Jumbotron>
  );
};
