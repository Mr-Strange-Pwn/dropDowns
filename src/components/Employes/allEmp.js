import React, { useState, useEffect } from "react";
import { Row, Col, Image } from "react-bootstrap";

const AllEmp = (props) => {
    const { index, person, selectEmploye, checkedVal } = props;

    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(person.selected);
    }, [person.selected]);

    // React.useEffect(() => {
    //     let per = checkedVal.filter(p => p.id === person.id)
    //     console.log("p e", per)
    //     if (per.length > 0) {
    //         setChecked(per[0].selected)
    //     }
    // }, [checkedVal])

    const changeHandler = () => {
        selectEmploye(person.id);
    };

    return (
        <Row key={JSON.stringify(index)} className="empRow">
            <Col xs={2} className="mb-3 pr-0">
                <Image
                    style={{ height: "26px", width: "26px" }}
                    src={person.img}
                    roundedCircle
                    fluid
                />
            </Col>
            <Col xs={8} className="text-left empName">
                {person.name}
            </Col>
            <Col xs={2}>
                <div className="cont">
                    <input
                        type="checkbox"
                        onChange={() => changeHandler()}
                        checked={checked}
                    />
                    <span className="checkmark"></span>
                </div>
            </Col>
        </Row>
    );
};
export default AllEmp;
