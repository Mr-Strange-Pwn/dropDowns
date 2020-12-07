import React from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import { AiOutlineCalendar } from 'react-icons/ai'
import { CgArrowsBreakeV } from 'react-icons/cg'
import './datestyle.css'
export const Date2 = () => {

    const [clicked, setClicked] = React.useState(false)
    const [today, setToday] = React.useState(new Date())

    var lastWeek = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 7
    )
    const [dt, setDate] = React.useState('')
    const handleDate = (e) => {
        setDate(e.toLocaleString())
        setClicked(!clicked)
        console.log('dt', dt)
    }

    return (
        <>
            <Container>
                <div className='dropDown' onClick={() => setClicked(!clicked)}>
                    <Container>
                        <Row>
                            <Col xs={1}>
                                <AiOutlineCalendar />
                            </Col>
                            <Col>{
                                dt ? <p>{dt}</p> : <p style={{ paddingTop: '10px' }}>Pick Date</p>
                            }

                            </Col>
                            <Col xs={1}>
                                <CgArrowsBreakeV />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div >
                    {clicked ? (

                        <InfiniteCalendar
                            width={400}
                            height={400}
                            selected={today}
                            onSelect={e => handleDate(e)}
                            minDate={lastWeek}
                            max={new Date(2021, 11, 31)}

                            theme={{
                                floatingNav: {
                                    background: '#1c3663',
                                    chevron: '#FFA726',
                                    color: '#1c3663',
                                },
                                textColor: {
                                    active: '#FFF',
                                    default: '#FFF',
                                },
                                todayColor: '#FFA726',
                                weekdayColor: '#1c3663',
                            }}

                            displayOptions={{
                                showHeader: false,
                                showOverlay: false,
                                overscanMonthCount: 2


                            }}
                        />
                    ) : null}
                </div>
            </Container>
        </>
    )
}

export default Date2
