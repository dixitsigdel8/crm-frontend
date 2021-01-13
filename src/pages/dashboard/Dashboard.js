import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { TicketTable } from "../../components/ticket-table/TicketTable";
import tickets from "../../asset/dummy.data.json";
import { PageBreadcums } from "../../components/PageBreadcums/PageBreadcums";

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcums page="Dahobord" />
        </Col>
      </Row>
      <Row className="text-center mt-5 mb-2">
        <Col>
          <Button variant="info" style={{ fontSize: "1rem", padding: "10px" }}>
            Add New Ticket
          </Button>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mb-2">
          <div>Total Tickets:50</div>
          <div>Pending Tickets:5</div>
        </Col>
      </Row>
      <Row>
        <Col className=" mt-2">Recently Added Tickets</Col>
      </Row>
      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
