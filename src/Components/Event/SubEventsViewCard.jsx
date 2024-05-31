import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EventLink } from './EventLink'
import { UserLink } from '../User/UserLink'
import { EventsSVG, getWeekNumber } from './EventsSVG'

export const SubEventsViewCard = ({subEvents}) => {
    console.log("Eventy2",subEvents);
    return (
        
        <>
            <CardCapsule title={<>Rozvrh</>}>
                {subEvents && subEvents.length > 0 ? (
                    <EventsSVG events={subEvents} />
                ) : (
                    <p>Tento Event nemá žádné subEvents.</p>

                )}
            </CardCapsule>
        </>
    )
}