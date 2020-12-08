import React from "react";
import { Row, Col, Image } from "react-bootstrap";

const AllEmp = (props) => {
    const { index, person, selectEmploye, checkedVal } = props;

    const [checked, setChecked] = React.useState(person.selected);
    React.useEffect(() => {
        setChecked(person.selected);
    }, [checkedVal]);

    const changeHandler = () => {
        selectEmploye(person.id);

        setChecked(!checked);
    };

    return (
        <Row key={JSON.stringify(index)} className="empRow">
            <Col xs={2} className="mb-3 pr-0">
                <Image
                    style={{ height: "24px", width: "24px" }}
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
