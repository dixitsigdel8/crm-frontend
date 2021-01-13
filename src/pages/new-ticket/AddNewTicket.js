import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm";
import { PageBreadcums } from "../../components/PageBreadcums/PageBreadcums";

export const AddNewTicket = () => {
  const hndleOnChange = () => {};
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcums page="New Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <AddTicketForm />
        </Col>
      </Row>
    </Container>
  );
};
