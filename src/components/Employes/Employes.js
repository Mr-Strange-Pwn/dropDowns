import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./employee.css";
import SearchEmp from "./searchEmp";
import AllEmp from "./allEmp";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'

const Employes = (props) => {
    const [employes, setEmployes] = React.useState([]);
    const [search, setSearch] = React.useState("");
    const [clicked, setClicked] = React.useState(false);

    React.useEffect(() => {
        setEmployes(props.data);
    }, []);

    const searchResult = () => {
        let result = employes.filter((person) => person.name.search(search) !== -1);
        console.log(result);
        return (
            <Col>
                {result.map((person, index) => (
                    <AllEmp key={index} index={index} person={person} selectEmploye={selectEmploye} />
                ))}
            </Col>
        );
    };


    const selectEmploye = (id) => {
        let emp = employes
        let Person = emp.filter(person => person.id === id)
        let index = emp.indexOf(Person[0])
        let data = {
            id: id,
            name: Person[0].name,
            img: Person[0].img,
            selected: !Person[0].selected
        }
        emp.splice(index, 1, data)
        setEmployes(emp)
        // setClicked(!clicked)
        console.log("emp", emp)
        console.log("per", Person)
        console.log("ind", index)
        console.log("data", data)
    }

    return (
        <>
            <Container>
                <div className="dropDown" onClick={() => setClicked(!clicked)}>
                    <Container>
                        <Row>
                            <Col className="mt-1" xs={2}>
                                <Image
                                    style={{ height: "42px" }}
                                    src="https://img.icons8.com/officel/2x/person-male.png"
                                    roundedCircle
                                    fluid
                                />
                            </Col>
                            <Col className="text-left ">
                                <p style={{ paddingTop: "10px" }}>select Employee</p>
                            </Col>
                            <Col style={{ paddingTop: "10px", marginRight: "10px" }} xs={1}>
                                {clicked ? <IoIosArrowUp /> : <IoIosArrowDown />}
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="dropDown-container">

                    {clicked ? (
                        <Container className="dropDownItems ">
                            <SearchEmp
                                search={search}
                                setSearch={setSearch}
                                searchResult={searchResult}
                            />
                            <Row>
                                <hr className="Line" />

                                <Col>
                                    <Row className="pl-4"> <p className="D_para">All practitioners</p></Row>
                                    {employes.map((person, index) => (
                                        <AllEmp key={index} index={index} person={person} selectEmploye={selectEmploye} />
                                    ))}
                                </Col>
                                <hr className="Line" />
                            </Row>
                        </Container>
                    ) : null}
                </div>
            </Container>
        </>
    );
};

export default Employes;
