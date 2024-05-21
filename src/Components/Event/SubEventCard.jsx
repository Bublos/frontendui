import { CardCapsule } from '@hrbolek/uoisfrontend-shared/src'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { EventLink } from './EventLink'
import { UserLink } from '../User/UserLink'
import { EventsSVG, getWeekNumber } from './EventsSVG'

const SubEventRow = ({subEvent}) => {
    const startstring = new Date(subEvent?.startdate).toDateString()
    const endstring = new Date(subEvent?.enddate).toDateString()
    /* const weekNumber = getWeekNumber(subEvent.startdate); */
    return (
        <tr>
            {/* <td>{subEvent?.id}</td> */}
            {/* <td>{weekNumber}</td> */}
            <td><EventLink event={subEvent}>{subEvent?.name}</EventLink></td>
            <td>{startstring}</td>
            <td>{endstring}</td>
        </tr>
    )
}

export const SubEventsCard = ({event}) => {
    const subEvents = event?.subEvents || []
    return (
        <>
            <CardCapsule title={<>Událost <EventLink event={event } /></>}>
                {event.subEvents && event.subEvents.length > 0 ? (
                    <EventsSVG events={event.subEvents} event={event} />
                ) : (
                    <p>Tento Event nemá žádné subEvents.</p>
                )}
            </CardCapsule>
            <br />
            <CardCapsule title={<>Tabulka SubEvents <EventLink event={event } /></>}>
                <table className='table table-striped table-bordered table-sm'>
                    <thead>
                        <tr>
                            {/* <th>Týden</th> */}
                            <th>Název</th>
                            <th>Začátek</th>
                            <th>Konec</th>
                        </tr>
                    </thead>
                    <tbody>
                        {subEvents.map(
                            e => <SubEventRow key={e.id} subEvent={e} />
                        )}
                    </tbody>
                </table>
            </CardCapsule>
        </>
    )
}