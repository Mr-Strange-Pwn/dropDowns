import React from 'react'
import { Row, Col, Image } from 'react-bootstrap'


const AllEmp = (props) => {
    const { index, person, selectEmploye, selected } = props
    return (
        <Row key={JSON.stringify(index)} className='empRow'>
            <Col xs={2}>
                <Image
                    style={{ height: '46px' }}
                    src={person.img}
                    roundedCircle
                    fluid
                />
            </Col>
            <Col xs={9}>{person.name}</Col>
            <Col xs={1}>
                <input type='checkbox' onChange={() => selectEmploye(person.name)} checked={selected} />
            </Col>
        </Row>
    )
}
export default AllEmp