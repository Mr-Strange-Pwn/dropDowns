import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Employes from "./components/Employes/Employes";
import Date from './components/datepicker/datepicker';

export default function App() {
  const Employee = [
    {
      name: 'one',
      img: 'https://img.icons8.com/officel/2x/person-male.png',
      selected: false
    },
    {
      name: 'two',
      img: 'https://img.icons8.com/officel/2x/person-male.png',
      selected: false
    },
    {
      name: 'three',
      img: 'https://img.icons8.com/officel/2x/person-male.png',
      selected: false
    },
    {
      name: 'four',
      img: 'https://img.icons8.com/officel/2x/person-male.png',
      selected: false
    },
    {
      name: 'five',
      img: 'https://img.icons8.com/officel/2x/person-male.png',
      selected: false
    },
    {
      name: 'six',
      img: 'https://img.icons8.com/officel/2x/person-male.png',
      selected: false
    }
  ]
  return (

    <Container>
      <Row>
        <Col>
          <h4> select employee dropdown</h4>
          <Employes data={Employee} />
        </Col>
      </Row>
      <Row>
        <Col>
          <h4> pick date2 dropdown</h4>
          <Date />
        </Col>
      </Row>
    </Container>
  );
}
