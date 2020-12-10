import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Employes from "./components/Employes/Employes";
import Date from './components/datepicker/datepicker';

export default function App() {

  const [empl, setEmpl] = React.useState([])
  const [dt, setDt] = React.useState('')

  const Employee = [
    {
      id: "1",
      name: 'One',
      img: 'https://img.icons8.com/officel/2x/person-male.png',
      selected: false,
      profile: "practitioner"
    },
    {
      id: "2",
      name: 'Two',
      img: 'https://www.publicdomainpictures.net/pictures/270000/velka/avatar-people-person-business-.jpg',
      selected: false,
      profile: "assistant"
    },
    {
      id: "3",
      name: 'Three',
      img: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_1280.png',
      selected: false,
      profile: "assistant"
    },
    {
      id: "4",
      name: 'Four',
      img: 'https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg',
      selected: false,
      profile: "practitioner"
    },
    {
      id: "5",
      name: 'Five',
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8&w=1000&q=80',
      selected: false,
      profile: "assistant"
    },
    {
      id: "6",
      name: 'six',
      img: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png',
      selected: false,
      profile: "practitioner"
    }
  ]

  console.log("selected emp ", empl)
  return (
    <>
      <Container>
        <Row>
          <Col>
            <h4> select employee dropdown</h4>
            <Employes data={Employee} onChange={e => setEmpl(e)} />
            <h3>ready to test</h3>
          </Col>
          <Col>
            <h4> pick date2 dropdown picked Date: {dt}</h4>
            <Date onChange={e => setDt(e)} />
            <h3>ready to test</h3>
          </Col>
        </Row>
      </Container>

      <div>
        <p>selected Employes</p>
        <ul>
          {empl.map(emp => (<li>name: {emp.name} profile: {emp.profile}</li>))}
        </ul>
      </div>
    </>


  );
}
