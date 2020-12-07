import React from 'react'
import { GoSearch } from 'react-icons/go'
import { Container, Row, Col, Image } from 'react-bootstrap'
const SearchEmp = (props) => {

    return (
        <Row>
            <Col xs={1} style={{ paddingTop: '5%' }}>
                <GoSearch />
            </Col>
            <Col>
                <input
                    className='dropDownSearch mt-0.5 mb-0.5 m-2'
                    type='text'
                    placeholder='Search Employee....'
                    value={props.search}
                    onChange={e => props.setSearch(e.target.value)}
                />
            </Col>
            {props.search.length > 0 ? (
                <>
                    <Container className>{props.searchResult()}</Container>
                    <hr />
                </>
            ) : null}
        </Row>
    )
}
export default SearchEmp 