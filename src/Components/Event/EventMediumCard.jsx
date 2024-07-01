/* eslint-disable react/prop-types */
import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EventLink } from './EventLink'
import { start } from '@popperjs/core'
import {FacilityLink} from '@jokachu/uoisfrontend-facilities/src'


export const EventMediumCard = ({event}) => {
    const startDate = new Date(event?.startdate);
    const formattedStartDate = startDate.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'numeric', year: 'numeric' });
    const formattedStartTime = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formattedStartstring = `${formattedStartDate} ${formattedStartTime}`;

    const endDate = new Date(event?.enddate);
    const formattedEndDate = endDate.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'numeric', year: 'numeric' });
    const formattedEndTime = endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const formattedEndstring = `${formattedEndDate} ${formattedEndTime}`;

    const lastChangeDate = new Date(event?.lastchange);
    const formattedLastChangeDate = lastChangeDate.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'numeric', year: 'numeric' });

    const createDate = new Date(event?.created);
    const formattedCreateDate = createDate.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'numeric', year: 'numeric' });

    const facility = { id: event.placeId, name: event.place };
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
                    <Col><FacilityLink facility={facility} menu={true} /></Col>
                </Row>
                :""

            }
            <br></br>
            <Row>
                <Col>Počátek</Col>
                <Col>{formattedStartstring}</Col>
            </Row>
            <Row>
                <Col>Konec</Col>
                <Col>{formattedEndstring}</Col>
            </Row>
            <br></br>
            <Row>
                <Col>Vytvořen</Col>
                <Col>{formattedCreateDate}</Col>
            </Row>
            <Row>
                <Col>Poslední změna</Col>
                <Col>{formattedLastChangeDate}</Col>
            </Row>
            
            
        </CardCapsule>
    )
}
