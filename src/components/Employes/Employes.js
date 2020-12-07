import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import './employee.css'
import SearchEmp from './searchEmp'
import AllEmp from './allEmp'



const Employes = (props) => {
    const [employes, setEmployes] = React.useState([])
    const [search, setSearch] = React.useState('')
    const [clicked, setClicked] = React.useState(false)

    React.useEffect(() => {

        setEmployes(props.data)

    }, []);

    const searchResult = () => {
        let result = employes.filter(person => person.name.search(search) !== -1)
        console.log(result)
        return (
            <Col>
                {result.map((person, index) => (
                    <Row key={JSON.stringify(index)} className='empRow'>
                        <Col xs={2}>
                            <Image
                                style={{ height: '46px' }}
                                src={person.img}
                                roundedCircle
                                fluid
                            />
                        </Col>
                        <Col>{person.name}</Col>
                        <Col xs={1}>
                            <input type='checkbox' onChange={() => selectEmploye(person.name)} checked={person.selected} />
                        </Col>
                    </Row>
                ))}
            </Col>
        )
    }

    const selectEmploye = (id) => {
        let emp = employes
        let Person = emp.filter(person => person.name === id)
        let index = emp.indexOf(Person[0])
        let data = {
            name: Person[0].name,
            img: Person[0].img,
            selected: !Person[0].selected
        }
        emp.splice(index, 1, data)
        setEmployes(emp)
        setClicked(!clicked)
    }

    return (
        <>
            <Container>
                <div className='dropDown' onClick={() => setClicked(!clicked)}>
                    <Container>
                        <Row>
                            <Col xs={3}>
                                <Image
                                    style={{ height: '42px' }}
                                    src='https://img.icons8.com/officel/2x/person-male.png'
                                    roundedCircle
                                    fluid
                                />
                            </Col>
                            <Col>
                                <p style={{ paddingTop: '10px' }}>select Employee</p>
                            </Col>
                            <Col style={{ paddingTop: '10px', marginRight: '10px' }} xs={1}>
                                {clicked ? <>▲</> : <>▼</>}
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className='dropDown-container'>
                    {clicked ? (
                        <Container className='dropDownItems '>
                            <SearchEmp search={search} setSearch={setSearch} searchResult={searchResult} />
                            <Row>
                                <hr className='Line' />
                                <Col>
                                    {employes.map((person, index) => (
                                        <AllEmp index={index} person={person} selectEmploye={selectEmploye} selected={person.selected} />
                                    ))}
                                </Col>
                                <hr className='Line' />
                            </Row>
                        </Container>
                    ) : null}
                </div>
            </Container>
        </>
    )
}

export default Employes
