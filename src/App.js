import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Employes from "./components/Employes/Employes";
import Date from "./components/Date/Date";

export default function App() {
  return (

    <Container>
      <Row>
        <Col>
          <h4> select employee dropdown</h4>
          <Employes />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4> pick date dropdown</h4>
          <Date />
        </Col>
      </Row>
    </Container>
  );
}
