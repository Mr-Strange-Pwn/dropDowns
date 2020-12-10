import React, { useEffect, useRef } from 'react'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'
import { Container, Row, Col } from 'react-bootstrap'
import { AiOutlineCalendar } from 'react-icons/ai'
import { TiArrowUnsorted } from 'react-icons/ti'
import './datestyle.css'
export const Date2 = (props) => {

    const [clicked, setClicked] = React.useState(false)
    const [today, setToday] = React.useState(new Date())
    const [dt, setDate] = React.useState('')

    const useOutsideAlerter = (ref) => {
        useEffect(() => {
            const handleClickOutside = (event) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setClicked(false);
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    React.useEffect(() => {
        props.onChange(dt)
    }, [dt])

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    var lastWeek = new Date(
        today.getFullYear(),
        today.getMonth(),
        today.getDate() - 7
    )

    const handleDate = (e) => {
        setDate(e.toLocaleDateString('en-ZA'))
        setClicked(!clicked)
        console.log('dt', dt)
    }

    return (
        <>
            <Container ref={wrapperRef}>
                <div className='dropDown' onClick={() => setClicked(!clicked)}>
                    <Container>
                        <Row>
                            <Col className="mt-1" xs={1}>
                                <AiOutlineCalendar />
                            </Col>
                            <Col className="text-left ">{
                                dt ? <p style={{ paddingTop: '10px' }}>{dt}</p> : <p style={{ paddingTop: '10px' }}>Pick Date</p>
                            }

                            </Col>
                            <Col style={{ paddingTop: "10px", marginRight: "10px" }} xs={1}>
                                <TiArrowUnsorted />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div >
                    {clicked ? (
                        <div className="dateContainer">
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
                            /></div>
                    ) : null}
                </div>
            </Container>
        </>
    )
}

export default Date2
