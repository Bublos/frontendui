/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EventLink } from './EventLink'
import { start } from '@popperjs/core'

export const EventMediumCard = ({event}) => {
    const startstring = new Date(event?.startdate).toDateString()
    const endstring = new Date(event?.enddate).toDateString()
    return (
        <CardCapsule  title={<>Událost <EventLink event={event } /></>}>
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
                <Col>Počátek</Col>
                <Col>{startstring}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{endstring}</Col>
            </Row>
        </CardCapsule>
    )
}
