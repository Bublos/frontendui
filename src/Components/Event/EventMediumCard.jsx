/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EventLink } from './EventLink'

export const EventMediumCard = ({event}) => {
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
                <Col>{event?.startdate}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{event?.enddate}</Col>
            </Row>
        </CardCapsule>
    )
}
