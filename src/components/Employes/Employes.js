import React from "react";
import { Dropdown, Container, Row, Col, Image } from "react-bootstrap";
import "./employee.css";
import { GoSearch } from 'react-icons/go'

const Employes = () => {
    const Employee = [
        { name: "one", img: "https://img.icons8.com/officel/2x/person-male.png", selected: false },
        { name: "two", img: "https://img.icons8.com/officel/2x/person-male.png", selected: false },
        { name: "three", img: "https://img.icons8.com/officel/2x/person-male.png", selected: false },
        { name: "four", img: "https://img.icons8.com/officel/2x/person-male.png", selected: false },
        { name: "five", img: "https://img.icons8.com/officel/2x/person-male.png", selected: false },
        { name: "six", img: "https://img.icons8.com/officel/2x/person-male.png", selected: false }
    ];

    const [search, setSearch] = React.useState("");
    const [clicked, setClicked] = React.useState(false)

    const searchResult = () => {
        let result = Employee.filter(person => person.name.search(search) !== -1)
        console.log(result)
        return (
            <Col>
                {
                    result.map((person) => (
                        <Row className="empRow">
                            <Col xs={2}>
                                <Image
                                    style={{ height: "46px" }}
                                    src={person.img}
                                    roundedCircle
                                    fluid
                                />
                            </Col>
                            <Col >{person.name}</Col>
                            <Col xs={1}>
                                <input
                                    type="checkbox"
                                />
                            </Col>
                        </Row>
                    ))
                }
            </Col>

        )
    }

    return (

        <>
            <Container>
                <div className="dropDown" onClick={() => setClicked(!clicked)}>
                    <Container>
                        <Row>
                            <Col xs={3}><Image style={{ height: "46px" }} src="https://img.icons8.com/officel/2x/person-male.png" roundedCircle fluid /></Col>
                            <Col ><p>select Employee</p></Col>
                            <Col xs={1}>{clicked ? <>▲</> : <>▼</>}</Col>
                        </Row>
                    </Container>

                </div>

                <div className="dropDown-container">
                    {
                        clicked ?
                            (
                                <Container className="dropDownItems ">
                                    <Row>
                                        <Col xs={1}><GoSearch /></Col>
                                        <Col>
                                            <input
                                                className="dropDownSearch mt-0.5 mb-0.5 m-2"
                                                type="text"
                                                placeholder="Search Employee...."
                                                value={search}
                                                onChange={(e) => setSearch(e.target.value)}
                                            /></Col>
                                        {search.length > 0 ? <><Container className>{searchResult()}</Container><hr /></> : null}
                                    </Row>
                                    <Row><hr className="Line" />
                                        <Col>
                                            {Employee.map((person) => (

                                                <Row className="empRow">
                                                    <Col xs={2}>
                                                        <Image style={{ height: "46px" }} src={person.img} roundedCircle fluid />
                                                    </Col>
                                                    <Col xs={9}>{person.name}</Col>
                                                    <Col xs={1}>
                                                        <input
                                                            type="checkbox"
                                                        />
                                                    </Col>
                                                </Row>
                                            ))}
                                        </Col><hr className="Line" />
                                    </Row>
                                </Container>
                            ) : null
                    }

                </div>
            </Container>
        </>
    );
};

export default Employes;
