import React from 'react'
import AllEmp from "./allEmp";
import { Row, Col } from "react-bootstrap";


const Category = (props) => {
    const { name, selectEmploye, employes } = props
    const [category, setCategory] = React.useState(props.category)
    const [check, setCheck] = React.useState(false)

    React.useEffect(() => {
        let ticked = props.category.filter(p => p.selected === true)
        if (ticked.length === category.length) { setCheck(true) }
        else { setCheck(false) }
        setCategory(props.category)
    }, [props.category])

    const selectAllCategory = () => {
        if (check) {
            category.map(p => {
                if (p.selected === true) {
                    selectEmploye(p.id)
                }
            })
        } else {
            category.map(p => {
                if (p.selected === false) {
                    selectEmploye(p.id)
                }
            })
        }
    }

    return (
        <>
            <Row className="pl-4">

                <Col> <p className="D_para">All {name}</p></Col>
                <>
                    {props.search ? null : <Col xs={2}>
                        <div className="cont">
                            <input
                                type="checkbox"
                                onChange={() => selectAllCategory()}
                                checked={check}
                            />
                            <span className="checkmark"></span>
                        </div></Col>
                    }
                </>
            </Row>
            {
                category.map((person, index) => (
                    <AllEmp
                        key={index}
                        index={index}
                        person={person}
                        selectEmploye={selectEmploye}
                        checkedVal={employes}
                    />
                ))
            }
        </>
    )
}

export default Category