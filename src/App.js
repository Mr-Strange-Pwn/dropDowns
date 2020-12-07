import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Employes from "./components/Employes/Employes";
import Date from './components/datepicker/datepicker';

export default function App() {
  const Employee = [
    {
      id: "1",
      name: 'one',
      img: 'https://img.icons8.com/officel/2x/person-male.png',
      selected: false
    },
    {
      id: "2",
      name: 'two',
      img: 'https://img.icons8.com/officel/2x/person-male.png',
      selected: false
    },
    {
      id: "3",
      name: 'three',
      img: 'https://img.icons8.com/officel/2x/person-male.png',
      selected: false
    },
    {
      id: "4",
      name: 'four',
      img: 'https://img.icons8.com/officel/2x/person-male.png',
      selected: false
    },
    {
      id: "5",
      name: 'five',
      img: 'https://img.icons8.com/officel/2x/person-male.png',
      selected: false
    },
    {
      id: "6",
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
          <h3>ready to test</h3>
        </Col>
        <Col>
          <h4> pick date2 dropdown</h4>
          <Date />
          <h3>ready to test</h3>
        </Col>
      </Row>
    </Container>
  );
}
