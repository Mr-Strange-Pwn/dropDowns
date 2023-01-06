import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./employee.css";
import SearchEmp from "./searchEmp";
import Category from "./category"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Scrole from 'react-scrollbars-custom'
import PropTypes from 'prop-types';

const Employes = (props) => {
    const [employes, setEmployes] = useState([]);
    const [practitioners, setpractitioners] = useState([]);
    const [assistants, setassistants] = useState([]);
    const [allCategory, setAllCatagory] = useState([]);

    const [search, setSearch] = useState("");
    const [selectedEmployes, setSelectedEmployes] = useState([]);
    const [clicked, setClicked] = useState(false);
    const [checkSelectAll, setCheckSelectAll] = useState(false);

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

    useEffect(() => {
        setEmployes(props.data);
    }, []);

    useEffect(() => {
        setEmpCategory()
        selectedEmp();
    }, [employes]);

    useEffect(() => {
        if (selectedEmployes.length === employes.length) {
            setCheckSelectAll(true);
        } else {
            setCheckSelectAll(false);
        }
        props.onChange(selectedEmployes)
    }, [selectedEmployes]);

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    // return <div ref={wrapperRef}>{props.children}</div>;

    // to devide as category 
    const setEmpCategory = () => {
        let allcalt = []
        let Cat = []
        let catObject = []
        employes.map(p => allcalt.push(p.profile))

        for (let i = 0; i < allcalt.length; i++) {
            if (!Cat.includes(allcalt[i])) {
                Cat.push(allcalt[i])
            }
        }

        for (let i = 0; i < Cat.length; i++) {
            let element
            let data = employes.filter(p => p.profile === Cat[i])
            let name = Cat[i]
            element = { [name]: data }
            catObject.push(element)

        }

        setAllCatagory(catObject)
        setpractitioners(practitioners)
        setassistants(assistants)
    }

    const searchResult = () => {
        let result = employes.filter(
            (person) => person.name.toLowerCase().search(search.toLowerCase()) !== -1
        );

        let allP = []
        let resCat = []
        let resultObj = []
        result.map(p => allP.push(p.profile))
        for (let i = 0; i < allP.length; i++) {
            if (!resCat.includes(allP[i])) {
                resCat.push(allP[i])
            }
        }
        for (let i = 0; i < resCat.length; i++) {
            let element
            let data = result.filter(p => p.profile === resCat[i])
            let name = resCat[i]
            element = { [name]: data }
            resultObj.push(element)
        }

        return <React.Fragment>
            <Scrole style={{ width: "350px", height: "180px" }} noScrollX={true}>
                {
                    resultObj.map((category, index) => {
                        let name = Object.keys(category)[0]
                        let array = category[name]
                        return <Category key={index} name={name} category={array} selectEmploye={selectEmploye} employes={employes} search={true} />

                    })
                }
            </Scrole>
        </React.Fragment>


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
        <React.Fragment>
            <Container ref={wrapperRef} >
                <div className="dropDown" onClick={() => setClicked(!clicked)}>
                    <Container>
                        <Row className="pl-4 pt-2" >
                            <Col xs={2} className="mb-3 pl-0">
                                <h5 className="quote-wrapper">
                                    {employes.length}
                                </h5>
                            </Col>

                            <Col xs={2}>
                                {
                                    employes.map((d, i) => (
                                        <Image
                                            key={i}
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
                                <p style={{ paddingTop: "2px" }}>select Employee</p>
                            </Col>
                            <Col style={{ paddingTop: "3px", marginRight: "10px" }} xs={1}>
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
                                        <Col xs={2} className="mb-3 pl-0">
                                            <h5 className="quote-wrapper">
                                                {selectedEmployes.length}
                                            </h5>
                                        </Col>

                                        <Col>
                                            {selectedEmployes.length > 0
                                                ? selectedEmployes.map((d, i) => (
                                                    <Image
                                                        key={i}
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
                                    <Scrole style={{ width: "355px", height: "380px" }} noScrollX={true}>
                                        {
                                            allCategory.map((category, index) => {
                                                let name = Object.keys(category)[0]
                                                let array = category[name]
                                                return <Category key={index} name={name} category={array} selectEmploye={selectEmploye} employes={employes} />

                                            })
                                        }
                                    </Scrole>

                                </Col>
                                <hr className="Line" />
                            </Row>
                        </Container>
                    ) : null}
                </div>
            </Container>
        </React.Fragment>
    );
};

Employes.propTypes = {
    data: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default Employes;
