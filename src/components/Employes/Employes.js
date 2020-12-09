import React, { useRef, useEffect } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./employee.css";
import SearchEmp from "./searchEmp";
import Category from "./category"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Employes = (props) => {
    const [employes, setEmployes] = React.useState([]);
    const [practitioners, setpractitioners] = React.useState([]);
    const [assistants, setassistants] = React.useState([]);

    const [search, setSearch] = React.useState("");
    const [selectedEmployes, setSelectedEmployes] = React.useState([]);
    const [clicked, setClicked] = React.useState(false);
    const [checkSelectAll, setCheckSelectAll] = React.useState(false);

    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setClicked(false);
                }
            };

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    };

    React.useEffect(() => {
        setEmployes(props.data);
    }, []);

    React.useEffect(() => {
        setEmpCategory()
        selectedEmp();
    }, [employes]);

    React.useEffect(() => {
        if (selectedEmployes.length === employes.length) {
            setCheckSelectAll(true);
        } else {
            setCheckSelectAll(false);
        }
    }, [selectedEmployes]);

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    // return <div ref={wrapperRef}>{props.children}</div>;
    const setEmpCategory = () => {
        let assistants = employes.filter(person => person.profile === "assistant")
        let practitioners = employes.filter(person => person.profile === "practitioner")
        setpractitioners(practitioners)
        setassistants(assistants)
    }

    const searchResult = () => {
        let result = employes.filter(
            (person) => person.name.toLowerCase().search(search.toLowerCase()) !== -1
        );
        let Assis = result.filter(p => p.profile === "assistant")
        let pract = result.filter(p => p.profile === "practitioner")

        return (
            <>
                <>
                    {
                        pract.length > 0 ? <><Category name="practitioners" category={pract} selectEmploye={selectEmploye} employes={employes} search={true} /><hr className="Line" /></> : null
                    }
                </>
                <>
                    {
                        Assis.length > 0 ? <>  <Category name="assistants" category={Assis} selectEmploye={selectEmploye} employes={employes} search={true} /></> : null
                    }
                </>


            </>
        );
    };

    const selectEmploye = (id) => {
        let emp = employes;
        let Person = emp.filter((person) => person.id === id);
        let index = emp.indexOf(Person[0]);
        let data = {
            id: id,
            name: Person[0].name,
            img: Person[0].img,
            selected: !Person[0].selected,
            profile: Person[0].profile
        };
        emp.splice(index, 1, data);
        setEmployes(emp);
        selectedEmp();
        setEmpCategory()
        // setClicked(!clicked)
    };

    const selectedEmp = () => {
        let sEmp = employes.filter((person) => person.selected === true);
        setSelectedEmployes(sEmp);
    };

    const selectAll = () => {
        if (checkSelectAll) {
            let newArray = [];
            employes.map((person) => {
                let data = {
                    id: person.id,
                    name: person.name,
                    img: person.img,
                    selected: false,
                    profile: person.profile
                };
                newArray.push(data);
            });
            setEmployes(newArray);
            selectedEmp();
        } else {
            employes.map((person) => {
                if (person.selected) {
                    // contonue
                } else {
                    selectEmploye(person.id);
                    selectedEmp();
                }
            });
        }
    };

    return (
        <>
            <Container ref={wrapperRef}>
                <div className="dropDown" onClick={() => setClicked(!clicked)}>
                    <Container>
                        <Row className="pl-4" >
                            <Col xs={2} className="mb-3 pr-0">
                                <h5 className="quote-wrapper">
                                    {employes.length}
                                </h5>
                            </Col>

                            <Col xs={2}>
                                {
                                    employes.map((d) => (
                                        <Image
                                            style={{ height: "29px", width: "22px" }}
                                            src={d.img}
                                            className="img-set"
                                            roundedCircle
                                            fluid
                                        />
                                    ))
                                }
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
                                    <Row className="pl-4">
                                        <Col xs={2} className="mb-3 pr-0">
                                            <h5 className="quote-wrapper">
                                                {selectedEmployes.length}
                                            </h5>
                                        </Col>

                                        <Col>
                                            {selectedEmployes.length > 0
                                                ? selectedEmployes.map((d) => (
                                                    <Image
                                                        style={{ height: "29px", width: "22px" }}
                                                        src={d.img}
                                                        className="img-set"
                                                        roundedCircle
                                                        fluid
                                                    />
                                                ))
                                                : null}
                                        </Col>

                                        <Col>
                                            {" "}
                                            <p className="D_para" style={{ marginLeft: "-95px" }}>All Employee</p>
                                        </Col>
                                        <Col xs={2}>
                                            {" "}
                                            <div className="cont">
                                                <input
                                                    type="checkbox"
                                                    onChange={() => selectAll()}
                                                    checked={checkSelectAll}
                                                />
                                                <span className="checkmark"></span>
                                            </div>
                                        </Col>
                                    </Row>{" "}
                                    <hr className="Line" />

                                    <Category name="practitioners" category={practitioners} selectEmploye={selectEmploye} employes={employes} /><hr className="Line" />
                                    <Category name="assistants" category={assistants} selectEmploye={selectEmploye} employes={employes} />




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
