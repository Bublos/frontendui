/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EventLink } from './EventLink'
import { start } from '@popperjs/core'

export const EventMediumCard = ({event}) => {
    const startDate = new Date(event?.startdate);
    const startstring = `${startDate.toDateString()} ${startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;

    const endDate = new Date(event?.enddate);
    const endstring = `${endDate.toDateString()} ${endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    
    const laststring = new Date(event?.lastchange).toDateString()
    const createstring = new Date(event?.created).toDateString()
    return (
        <CardCapsule  title={<>Základní informace <EventLink event={event } /></>}>
            {
            event?.masterEvent?
                <Row>
                    <Col>Nadřízená událost</Col>
                    <Col><EventLink event={event.masterEvent} /></Col>
                </Row>
                :""

            }
            <Row>
                <Col>Název</Col>
                <Col>{event?.name}</Col>
            </Row>
            <Row>
                <Col>Typ</Col>
                <Col>{event?.eventType?.name}</Col>
            </Row>
            {
            event?.place?
                <Row>
                    <Col>Místo</Col>
                    <Col><a href={`/facilities/facility/view/${event.placeId}`}>{event.place}</a></Col>
                </Row>
                :""

            }
            <br></br>
            <Row>
                <Col>Počátek</Col>
                <Col>{startstring}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{endstring}</Col>
            </Row>
            <br></br>
            <Row>
                <Col>Vytvořen</Col>
                <Col>{createstring}</Col>
            </Row>
            <Row>
                <Col>Poslední změna</Col>
                <Col>{laststring}</Col>
            </Row>
            
            
        </CardCapsule>
    )
}
