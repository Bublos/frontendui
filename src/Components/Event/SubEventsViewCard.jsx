import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EventLink } from './EventLink'
import { UserLink } from '../User/UserLink'
import { EventsSVG, getWeekNumber } from './EventsSVG'

export const SubEventsViewCard = ({event}) => {

    return (
        <>
            <CardCapsule title={<>Událost <EventLink event={event } /></>}>
                {event.subEvents && event.subEvents.length > 0 ? (
                    <EventsSVG events={event.subEvents} event={event} />
                ) : (
                    <p>Tento Event nemá žádné subEvents.</p>
                )}
            </CardCapsule>
        </>
    )
}