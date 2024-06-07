import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EventLink } from './EventLink'
import { UserLink } from '../User/UserLink'
import { EventsSVG, getWeekNumber } from './EventsSVG'

export const SubEventsViewCard = ({subEvents}) => {
    return (
        <>
            <CardCapsule title={<>Rozvrh</>}>
                <EventsSVG events={subEvents} />

            </CardCapsule>
        </>
    )
}